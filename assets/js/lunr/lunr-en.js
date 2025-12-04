---
layout: none
---

var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  this.pipeline.remove(lunr.trimmer)

  for (var item in store) {
    this.add({
      title: store[item].title,
      excerpt: store[item].excerpt,
      categories: store[item].categories,
      tags: store[item].tags,
      id: item
    })
  }
});

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' {{ site.data.ui-text[site.locale].results_found | default: "Result(s) found" }}</p>');

    for (var i in result) {
      var ref  = result[i].ref;
      var data = store[ref];

      // ---- 메타(날짜 + 태그) HTML 만들기 ----
      var metaHtml = '<p class="page__meta">';

      // 날짜
      if (data.date) {
        metaHtml +=
          '<span class="page__meta-date">' +
            '<i class="far fa-calendar-alt" aria-hidden="true"></i> ' +
            data.date +
          '</span>';
      }

      // 카테고리
      if (data.categories && data.categories.length) {
        var cats = data.categories;
        if (!Array.isArray(cats)) cats = [cats];

        cats.forEach(function (cat) {
          // Jekyll의 slugify 비슷하게 (영문/공백 기준이면 이 정도로 충분)
          var slug = cat.toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')  // 공백/특수문자 → -
                        .replace(/^-+|-+$/g, '');     // 앞뒤 - 제거
              
          metaHtml +=
            ' <a href="{{ site.category_archive.path }}' + slug +'"'
            + ' class="page__taxonomy-item-category" rel="tag">'
            +   '<span class="label label-category">' + cat + '</span>'
            + '</a>';
        });
      }

      // 태그
      if (data.tags && data.tags.length) {
        var tags = data.tags;
        if (!Array.isArray(tags)) tags = [tags];

        tags.forEach(function (tag) {
          metaHtml +=
            ' <a href="/tags/#' + tag +
            '" class="page__taxonomy-item-tag" rel="tag">' +
              '<span class="label label-tag">' + tag + '</span>' +
            '</a>';
        });
      }

      metaHtml += '</p>';

      // ---- 홈과 최대한 비슷한 카드 구조 ----
      var searchitem =
        '<div class="list__item">' +
          '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">' +

            // 제목 + 메타 한 줄
            '<div class="archive__item-header">' +
              '<h2 class="archive__item-title" itemprop="headline">' +
                '<a href="' + data.url + '" rel="permalink">' + data.title + '</a>' +
              '</h2>' +
              metaHtml +
            '</div>' +

            // 그 아래 excerpt
            '<p class="archive__item-excerpt" itemprop="description">' +
              data.page_excerpt +
            '</p>' +

          '</article>' +
        '</div>';

      resultdiv.append(searchitem);
    }

  });
});
