---
title: "[Github] Github 홈 커스터마이징"
excerpt: "Github 홈을 꾸미는 방법"

categories:
  - Github
tags:
  - [Github, Etc]

toc: true
toc_sticky: true
 
date: 2024-06-15
last_modified_at: 2024-06-15
---

# 🧩 Github 커스터마이징

Github Blog를 만들기 전에 했던 것이 있다. 바로 **<u>Github 홈 프로필 커스터마이징!</u>**

다른 사람들의 Github 홈 페이지를 보면서 어떻게 저렇게 커스터마이징을 했지? 라는 생각으로 찾아봤고, 특정한 방법이 있다는 것을 알았다. 구글링도 해보고 유튜브 영상도 찾아봐 가면서 열심히 커스터마이징을 했던 기억이 있다. 나중에 혹시 다시 건드릴지도 모르는 때를 대비해서 미리 좀 정리를 해놓고자 한다.

## 📄 README.md 생성

Github 페이지로 들어가서 `New` 버튼을 눌러 새로운 `Repo`를 생성해준다. 이 때 Repo의 이름은 본인의 Github 아이디 이름과 같아야 하고, 당연히 외부에 보여줄 것이기 때문에 `public` 으로 설정, `Add README` 옵션을 켜준다. 그러면 내 Github 아이디와 동일한 이름의 새로운 Repo가 생성되고, 내부엔 `README.md` 파일만이 존재한다.

![Issue]({{ "/assets/images/posts/ETC/Github/2024-06-15-Github-Custom/Readme.png" | relative_url }}){: .align-center}

이제 이 `README.md` 파일에 내 Github 홈 페이지에 보여줄 **<u>하나의 소개서 역할</u>**을 하게 된다.

## 📝 md 파일 작성

이 `README.md` 파일엔 내 Github 홈 페이지를 커스터마이징하기 위한 여러 코드들을 넣을 수 있다. 다른 사람들도 많이 사용하고, 나 또한 유용하게 쓴 여러가지 요소들을 소개하고자 한다.

### 1. 헤더

![Issue]({{ "/assets/images/posts/ETC/Github/2024-06-15-Github-Custom/Header.png" | relative_url }}){: .align-center}

위의 이미지처럼 일종의 현수막 같은 그래픽화된 `헤더`를 추가해준다. 

아래의 링크로 들어가면 이 헤더의 종류도 여러가지가 있다는 것을 볼 수 있다. 내부에 들어가는 글자, 폰트의 크기와 간격, 애니메이션 효과 등도 마음대로 커스터마이징 가능하다. 

사용 방법은 링크의 페이지로 들어가면 한글화도 되어 있으니 그대로 따라하면 된다.
{: .notice--info}

- [Capsule-Render](https://github.com/kyechan99/capsule-render)

참고로 나의 `README.md` 파일에 있는 코드는 다음과 같다.

```yaml
![header](https://capsule-render.vercel.app/api?type=soft&text=Hello%20World!&fontAlign=35&fontSize=45&desc=Welcome%20to%20my%20GitHub&descSize=20&descAlign=70&descAlignY=50&theme=onedark)
```

### 2. 기술 배지

![Issue]({{ "/assets/images/posts/ETC/Github/2024-06-15-Github-Custom/Stack.png" | relative_url }}){: .align-center}

이렇게 내가 가진 `기술 스택`들을 배지 형태로 아이콘화하여 출력해준다. 그냥 텍스트로 나열하는 것보다 가시성이 좋고, 정렬해 놓으면 예뻐 보인다.

개인적으로는 아래의 두 가지 사이트를 이용했다. 사이트에서 원하는 아이콘을 검색하고, 그 아이콘의 `이름`과 `색상`을 복사해서 정해진 문법으로 넣으면 된다. 

- [Shields.io](https://shields.io/)
- [Simple Icons](https://simpleicons.org/)

문법은 다음과 같다.

```yaml
<img src="https://img.shields.io/badge/텍스트-색상?style=flat-square&logo=아이콘이름&logoColor=white"/>
```

예를 들어 내 Github 홈 페이지의 `C++` 아이콘의 코드는 다음과 같다.

```yaml
<img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white"/>
```

### 3. 통계

![Issue]({{ "/assets/images/posts/ETC/Github/2024-06-15-Github-Custom/Stat_1.png" | relative_url }}){: .align-center}

![Issue]({{ "/assets/images/posts/ETC/Github/2024-06-15-Github-Custom/Stat_2.png" | relative_url }}){: .align-center}

위와 같이 나의 Github에 있는 `Repo`들에서 쓰이는 언어의 비율이나 Github 활동 기록을 수치화 및 그래프화해서 보기 좋게 만들어준다.

아래의 링크에 들어가서 보면 내가 쓴 것 외에도 여러 `Stat`들이 존재하며, `색상`, `아이콘`, `크기`나 `정렬`의 조정 또한 가능하다.

- [Github Readme Stats](https://github.com/anuraghazra/github-readme-stats)

문법은 사용하는 방법에 따라서 너무나 다양해질 수 있기 때문에 하나하나 쓰긴 힘들고, 위의 이미지 중 두번째 이미지에 대한 나의 코드는 다음과 같다.

```yaml
[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=youns119&show_icons=true&rank_icon=github&include_all_commits=true&theme=onedark)](https://github.com/anuraghazra/github-readme-stats)
```

#### ※ 주의 사항

참고로 이 기능은 `Vercel`이라는 외부 서버를 사용하는데, 이는 이 아이콘의 제작자인 "Anurag"이 운영하는 `Vercel` 서버이다. 따라서 이 사람의 서버가 불안정해지면, 나의 저 이미지도 로딩이 안되서 보이지 않게 되는 문제가 발생한다.

이에 대한 해결책은 **<u>직접 Vercel 계정을 만들고 서버를 호스팅하는 것.</u>** 뭐 말은 거창해 보이지만 호스팅 비용이 나가는 것도 아니고, 그저 내 Github에 대한 영구적인 `token`만 주면 되는 방식이라 겁먹을 필요는 없다. 참고로 나 또한 같은 문제를 겪었기에 이 방식으로 해결했다. 방법은 아래의 링크에 모두 나와 있고 어렵지 않으니 따라해보자.

- [Using Vercel](https://github.com/anuraghazra/github-readme-stats?tab=readme-ov-file#deploy-on-your-own)

`Deploy on your own` 부분을 보면 된다.
{: .notice--primary}

---
# 💭 그 외

이 외에도 아이콘에 내 블로그의 `링크`를 연결하는 방법, `gif` 이미지를 삽입하는 방법, `Markdown`을 사용해 코드 블록이나 구분선 등을 넣는 방법 등을 모두 이전에 `Blog` 카테고리의 글들로 설명해 놓았다. 혹시 몰라 연관 게시글들의 링크를 첨부할테니 참고 바람. 막상 해보면 금방할 수 있을만큼 간단할 것이다!

- [Markdown 문법 정리](https://youns119.github.io/blog/Blog-Posting-2/)
- [이미지 링크 삽입](https://youns119.github.io/blog/Blog-Posting-2/#4-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%81%ED%81%AC)
- [이미지 삽입](https://youns119.github.io/blog/Blog-Image/)

참고로 이미지 삽입의 `Issue` 활용 방식으로 하면 쉽다. Github 홈 페이지의 README.md 파일은 **<u>외부 사이트로 인식하지 않기 때문에 정상 작동할 것이다.</u>**
{: .notice--info}

## ➕ 추가

혹시 몰라 유용한 이모지들을 찾는 사람이 있다면 이 사이트를 참고하면 좋을 것이다.

- [유용한 이모지 모음](https://gist.github.com/rxaviers/7360908)