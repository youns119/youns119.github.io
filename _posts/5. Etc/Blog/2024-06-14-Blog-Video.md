---
title: "[Blog] 유튜브 영상 삽입"
excerpt: "블로그에 유튜브 영상 삽입하는 방법"

categories:
  - Blog
tags:
  - [Blog, Github, Youtube, Video, Etc]

toc: true
toc_sticky: true
 
date: 2024-06-14
last_modified_at: 2024-06-14
---

# 🎥 유튜브 영상 삽입

유튜브 영상 삽입 방법인데, 사실상 뭐 자주 쓸까 싶다. 생각나는거라 해봤자 포트폴리오 모작 영상 올리기 정도..? 그래도 필요성이 있는 이상 일단 알아보자.

## 📄 HTML

`HTML` 태그를 활용하는 방식이다. 원하는 유튜브 영상에 우클릭을 하면 `소스 코드 복사`가 있는데 그걸로 소스를 복사하면 `<iframe>`으로 이루어진 태그가 나온다. 이것을 그대로 붙여넣기만 하면 된다.

```yaml
<iframe width="1840" height="1035" src="https://www.youtube.com/embed/z3aS5AwhJSU" title="𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕 | 내가 책 읽을 때 듣는 누자베스 (Nujabes) 노래들" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

<iframe width="1840" height="1035" src="https://www.youtube.com/embed/z3aS5AwhJSU" title="𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕 | 내가 책 읽을 때 듣는 누자베스 (Nujabes) 노래들" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
# 💭 그 외

원래는 내가 현재 쓰고 있는 `jekyll theme`의 `minimal-mistake` 테마에서 `_include/video.html` 파일을 통해 여러 영상 플랫폼의 영상들을 블로그에 embedding 해주는 기능이 있다. 하지만 최근 **<u>유튜브의 정책과 충돌</u>**하는지 제대로 영상 삽입이 되지 않아서 사실상 위의 한 가지 방법 밖에 쓰질 못한다. 뭐, 어차피 저 방법이 가장 편하므로 상관은 없다.