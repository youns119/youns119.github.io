---
title: "[Blog] Github Blog 포스팅"
excerpt: "Github Blog에 포스팅하는 방법"

categories:
  - Blog
tags:
  - [Blog, Github]

toc: true
toc_sticky: true
 
date: 2024-06-11
last_modified_at: 2024-06-11
---

# 📘 블로그 포스팅

블로그는 만들었으니 이제 포스팅만 하면 된다. 근데 Github Blog는 포스팅하는 법이 정해져 있다. 이것도 블로그의 `jekyll theme`에 따라 다른지는 모르겠지만 내가 Fork한 `minimal-mistake`의 경우에는 특정한 방법을 통해 포스팅해야 한다. 

물론 `Markdown`을 위한 에디터 선택, Git에 Push하고 Deploy하거나 하는 절차는 공통이다.

## 🛠️ 에디터 선택

일단 `Markdown` 문법을 지원하는 에디터를 선택해야 한다. `Typora`, `Obsidian`, `Atom`, `StackEdit` 등등 여러 에디터나 노트 앱들이 있지만 나는 평소에 코테나 간단한 코드 작성용으로 `Visual Studio Code`를 자주 사용하기 때문에 이걸로 하기로 했다. 오른쪽에 미리 보기 창을 띄워서 `Markdown` 적용 프리뷰도 볼 수 있고, 무엇보다 손에 익숙하기 때문에 나름 만족하고 있다.

## 📂 포스트 폴더

그냥 포스트 파일들을 만들어서 막 적고 싶은대로 적고 Git에 Push만 하면 되는 것은 아니다. 내 블로그에서 어떤 포스트들이 있는지 알아야 하기 때문에 포스트들을 모아 놓는 폴더가 따로 필요하다. 그리고 그 폴더의 이름은 `_posts`라고 지어야 한다. 따라서 그냥 내 블로그 로컬 폴더의 최상위 경로에 `_posts`라는 이름의 폴더를 만들어 준다. 

나는 개인적으로 `_posts` 폴더를 만들고, 그 안에 카테고리별로 각각의 폴더들을 다시 만들어주는 방식으로 캡슐화를 했다. 예를 들어 

```yaml
_posts / 1. Cpp & CSharp & C
_posts / 2. CS & SW
...
```

이런 식으로 좀 더 보기 좋게 해놓았다.

## 📝 포스트 작성

이제 본격적으로 포스트를 작성하면 되는데 몇가지 지킬 양식이 있다. 물론 `Markdown` 문법을 사용해야 하고 파일도 `.md` 형식으로 만들어줘야 한다. 어떻게 작성되고 있는지는 `Visual Studio Code` 에디터를 사용 중이라면 오른쪽에 미리보기 창을 띄워놓으면 편하다. 

### 1. 파일 이름

파일 이름을 막 지으면 안된다. `yyyy-mm-dd-포스트이름` 형식으로 이름을 지어줘야 한다. 당연히 포스트 이름은 영어로 해주는 것이 좋고, 대소문자는 상관없다. 또한 띄어쓰기보단 `-`으로 대체해주는 것이 좋다. 예를 들면

```yaml
2024-06-11-Blog-Posting.md
```

이런 식으로. 또한 뒤의 포스트 이름이 곧 포스트 제목이 되는 것은 아니기 때문에 적당히 내용과 관련 있게만 지어주면 된다.

### 2. Front Matter

각 포스트의 최상단에는 `Front Matter`라는 머릿말이 필요하다. 예를 들면 현재 이 포스트 파일의 최상단에는 다음과 같은 머릿말이 있다.

```yaml
---
title: "[Blog] Github Blog 포스팅"
excerpt: "Github Blog에 포스팅하는 방법"

categories:
  - Blog
tags:
  - [Blog, Github]

toc: true
toc_sticky: true
 
date: 2024-06-11
last_modified_at: 2024-06-11
---
```

머릿말은 `---` 사이에 작성함으로써 꼭 구분을 해줘야하고, 내부의 각각의 요소들은 다음과 같은 역할을 한다.

- `title` : <u><strong>블로그의 제목.</strong></u> 큰따옴표 안에 적어줘야 하고, 이 제목이 바로 블로그에 출력되는 포스트의 제목과 같다. 참고로 이 곳이 공백이라면 아까 말한 포스트 파일의 제목이 자동으로 제목을 대체한다고 한다.

- `excerpt` : <u><strong>포스트의 간략 설명 글.</strong></u> 밑의 사진처럼 포스트의 제목 아래에 뜨는 부분이다. 나는 현재 블로그 커스터마이징을 해서 Home, Search 화면에서만 뜨게끔 설정해 놓았다.

![excerpt]({{ "/assets/images/posts/ETC/Blog/2024-06-10-Blog-Posting/excerpt.png" | relative_url }}){: .align-center}

- `categories` : <u><strong>현재 포스트의 카테고리.</strong></u> 지금 이 포스트의 카테고리는 `Blog`이고 이 카테고리에 따라 사이드바의 카테고리 칸에 포스트가 저장되며, `Category` 페이지에서도 이에 따라 정렬된다.

- `tags` : <u><strong>현재 포스트의 태그.</strong></u> 이 포스트의 태그는 `Blog`, `Github`이며 이에 따라 `Tag` 페이지에서 정렬된다.

- `toc` : <u><strong>Table Of Contents</strong></u>의 줄임말로, true로 해놓으면 현재 포스트의 모든 목차를 보여주게 된다. 딱히 필요 없으면 false로 해놓으면 된다.

![image]({{ "/assets/images/posts/ETC/Blog/2024-06-10-Blog-Posting/toc.png" | relative_url }}){: .align-center}

- `toc_sticky` : <u><strong>toc의 sticky 여부.</strong></u> 간략히 말하자면 이걸 true로 해놓으면 오른쪽의 toc이 스크롤을 움직임에 따라 같이 따라온다. 

- `date` : <u><strong>포스트 작성 날짜.</strong></u>

- `last_modifed_at` : <u><strong>포스트 수정 날짜.</strong></u> 수정이 없으면 그냥 현재 날짜로 하면 된다.

이 밖에도 `label`, `permalink`, `author_profile` 등등 여러 항목들이 있지만 나 같은 경우는 미리 default 값으로 한 파일에서 설정을 해두고, 각 포스트에는 필요한 값들만 채워넣으면 되는 식으로 해놓았다. 이렇게 하는 방법도 내가 이전에 포스팅한 글의 [참고자료](https://youns119.github.io/blog/Blog-Start/#-참고자료)의 글들을 정독하면 다 쉽게 가능하다.

## 💻 로컬 확인

기본적으로 Github Blog는 여타 블로그들과는 다르게 로컬로 작성을 하고 이를 Github Page를 통해 올리는 방식이기 때문에 실시간으로 글을 작성하고 블로그에서 확인하는 것이 불가능하다. 

하지만 `ruby`를 사용하면 <u><strong>로컬 상에서 현재 블로그의 미리보기가 가능하다!</strong></u> 따라서 나는 현재 콘솔창에 `bundle exec jekyll serve`라고 입력하면 `http://127.0.0.1:4000/` 주소로 로컬 블로그가 빌드된다. 이를 위한 과정은 좀 귀찮을 수 있으나 막상 하고 나면 매우 편하니 꼭 하길 추천.

## 📤 Git Push

이제 포스트를 모두 작성했으면 내 Git에 Push하면 끝이다. 그럼 자동으로 Deploy 되어서 블로그가 최신화되는 것을 볼 수 있다. 

참고로 내 블로그 리포지토리의 Action 탭을 들어가보면 현재 Push한 블로그의 내용이 실시간으로 Deploy 되는게 보인다. 이 과정은 보통 짧으면 1~2분에서 오래 걸리면 꽤나 오래 걸리니 내가 상술한 로컬 미리보기 기능을 꼭 하라고 추천하는 것이다.

---
# 💭 이후

위에서 블로그에 포스트를 작성하고 올리는 방법은 다 설명했고, 처음엔 조금 복잡하고 귀찮아도 익숙해지면 괜찮다. 주의할 점은 만약 노트북, pc 처럼 서로 다른 기기에서 블로그를 로컬로 운영하고 있다면, 작업하기 전에 꼭 Git으로 Refresh 혹은 Pull로 꼭 `동기화`를 시켜줘야 한다는 것이다. 화이팅!!