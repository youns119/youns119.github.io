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
    for (var item in result) {
      var ref = result[item].ref;
      var data = store[ref];
    
      // --- 메타 정보 문자열 만들기 (날짜 + 카테고리 + 태그) ---
      var metaHtml = '<p class="page__meta">';
    
      // 날짜 (lunr-store.js 에 date 혹은 date_string 같은 필드가 있을 것)
      if (data.date_string) {
        metaHtml +=
          '<span class="page__meta-date">' +
            '<i class="far fa-calendar-alt" aria-hidden="true"></i> ' +
            data.date_string +
          '</span>';
      } else if (data.date) {
        // date_string 이 없고 date 만 있을 때
        metaHtml +=
          '<span class="page__meta-date">' +
            '<i class="far fa-calendar-alt" aria-hidden="true"></i> ' +
            data.date +
          '</span>';
      }
    
      // 카테고리 라벨
      if (data.categories && data.categories.length) {
        var cats = data.categories;
        if (!Array.isArray(cats)) cats = [cats];
      
        cats.forEach(function (cat) {
          metaHtml +=
            ' <a href="/categories/#' + cat +
            '" class="page__taxonomy-item-category" rel="tag">' +
              '<span class="label label-category">' + cat + '</span>' +
            '</a>';
        });
      }
    
      // 태그 라벨
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
    
      // --- 검색 결과 카드 HTML (홈의 글 카드와 최대한 동일 구조) ---
      var searchitem;
    
      if (data.teaser) {
        // 썸네일 있는 경우
        searchitem =
          '<div class="list__item">' +
            '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">' +
              '<div class="archive__item-teaser">' +
                '<img src="' + data.teaser + '" alt="">' +
              '</div>' +
              '<h2 class="archive__item-title" itemprop="headline">' +
                '<a href="' + data.url + '" rel="permalink">' + data.title + '</a>' +
              '</h2>' +
              metaHtml +
              '<p class="archive__item-excerpt" itemprop="description">' +
                data.excerpt.split(" ").splice(0, 20).join(" ") + '...' +
              '</p>' +
            '</article>' +
          '</div>';
      } else {
        // 썸네일 없는 경우
        searchitem =
          '<div class="list__item">' +
            '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">' +
              '<h2 class="archive__item-title" itemprop="headline">' +
                '<a href="' + data.url + '" rel="permalink">' + data.title + '</a>' +
              '</h2>' +
              metaHtml +
              '<p class="archive__item-excerpt" itemprop="description">' +
                data.excerpt.split(" ").splice(0, 20).join(" ") + '...' +
              '</p>' +
            '</article>' +
          '</div>';
      }
    
      resultdiv.append(searchitem);
    }

  });
});
