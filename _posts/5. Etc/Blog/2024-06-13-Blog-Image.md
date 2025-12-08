---
title: "[Blog] 이미지 삽입"
excerpt: "블로그에 이미지 삽입하는 방법"

categories:
  - Blog
tags:
  - [Blog, Github, Image, Etc]

toc: true
toc_sticky: true
 
date: 2024-06-13
last_modified_at: 2024-06-13
---

# 🖼️ 이미지 삽입

블로그에 이미지를 삽입하는 방법은 크게 두 가지가 있다. 하지만 후술하겠지만 **<u>결국은 한 가지 방법 밖에 없다</u>**고 봐야 한다.
Github Blog의 단점 중 하나인 복잡한 이미지 삽입 방법에 대해서 알아보자.

## 📄 Issue 활용

Github Page의 `Issue` 탭을 활용하는 방식이다.

### 1. Issue 탭

자신의 Github Page에 들어가서 아무 Repo를 연다. 그러면 상단에 `Issue` 탭이 있는데 들어간다. `New Issue`를 누르면 새 Issue를 발행 가능한데, 여기서 `Add a description` 부분에 내가 삽입할 이미지를 드래그 해서 놓아준다.

![Issue]({{ "/assets/images/posts/ETC/Blog/2024-06-13-Blog-Image/Issue.png" | relative_url }}){: .align-center}

### 2. 주소 복사

그러면 이미지의 주소가 자동으로 변환되어 

```yaml
<img width="512" height="512" alt="Image" src="https://github.com/user-attachments/assets/af1ddf65-e7c1-4796-b1e6-8350fec37773" />
```

같은 형식으로 나오게 된다. 여기서 `src="이미지 주소"` 부분의 이미지 주소를 복사해준다.

### 3. 주소 붙여넣기

이 주소를 복사해서 포스트의 이미지 삽입할 곳에 문법에 맞춰 넣어주면 된다. 문법은 다음과 같다.

```yaml
![이미지 이름](이미지 주소)
```

`이미지 이름`엔 그냥 아무 이름이나 붙여도 되고, 이미지 주소엔 아까 그 주소를 넣어주면 끝!

### 4. 하지만

하지만 But!! **<u>이 방법이 현재 막혔다...</u>** 사실 막힌건지 나만 이상한건지는 모르겠지만 구글링도 하고 좀 찾아보니 나와 같은 사례의 사람들이 많이 존재했다. 현상은 Github의 `Readme.md` 파일이나 여타 Github 파일에서는 같은 방식으로 이미지를 삽입하는 것이 가능하지만, Github Blog 처럼 Github Page를 통해 배포하는 외부 사이트로는 이러한 방식으로 이미지 삽입이 불가능해진 것이다.

이유는 Github 측의 정책 변경으로 Github 도메인 내부 페이지에서는 Github을 통해 변환된 이미지가 사용 가능하지만, Github Page를 통한 외부 사이트에서는 `CORS + Referrer 정책`을 통해 외부 로딩을 아예 차단한 것이다. 흑흑...

하지만 우리에게는 아직 한 가지 방법이 남아 있고, **<u>그 방법이 사실상 가장 안전하며 확실한 방법</u>**이다.

## 📂 로컬 저장소

### 1. 로컬에 이미지 저장

내 블로그의 최상위 로컬 폴더에서 이미지 저장을 위한 폴더를 만들어 준다. 나 같은 경우에는 `_assets/image/posts/...` 같은 형식으로 포스트마다 폴더를 만들어서 저장했다.

![Issue]({{ "/assets/images/posts/ETC/Blog/2024-06-13-Blog-Image/local.png" | relative_url }}){: .align-center}

### 2. 로컬 주소 붙여넣기

이제 이 로컬의 주소를 활용해서 아까 그 문법에 맞춰 이미지를 삽입해주면 된다. 근데 문법이 조금 다르다. 예를 들어 `_assets/images/posts/ETC/Blog/2024-06-13-Blog-Image/local.png`의 로컬 주소를 가진 이미지를 삽입하고 싶으면 다음과 같이 입력하면 된다.

```yaml
![Issue]({{ "/assets/images/posts/ETC/Blog/2024-06-13-Blog-Image/local.png" | relative_url }})
```

### 3. 장단점

이렇게 로컬로 이미지를 저장하고 그 로컬의 주소를 이용하는 방식은 장단점이 있다.

- **<u>장점</u>**
    - 직접적으로 이미지를 옮기지 않는 이상 주소가 사라지거나 변하지 않음
    - 지금까지 포스팅한 이미지를 저장소에서 쉽게 찾을 수 있음
    - `외부 CDN`을 쓰는 방식이 아니라서 더 안정적임
- **<u>단점</u>**
    - 이미지를 로컬에 저장하고 분류해야 하므로 다소 귀찮음
    - `Github Page`의 최대 저장 용량인 1GB을 넘어가면 버벅임이나 끊김 등의 현상이 발생 가능

허나 나에겐 어차피 선택권이 없기 때문에 이 방법 밖에 없다. 용량이 조금 걱정되긴 하지만 사진의 용량을 넉넉잡아 300KB라고 해도 약 3500장은 저장 가능하기에 현재로서 걱정하는건 관두기로 했다.

# ✏️ 이미지 조작

상기한 방식으로 삽입한 이미지는 물론 **<u>정렬, 크기 변경</u>** 등의 조작이 가능하다. 

## 📏 이미지 정렬

- 왼쪽 정렬 : `{: .align-left}`
- 가운데 정렬 : `{: .align-center}`
- 오른쪽 정렬 : `{: .align-right}`

```yaml
![Issue]({{ "/assets/images/posts/ETC/Blog/2024-06-13-Blog-Image/logo.png" | relative_url }}){: .align-center width="30%"}
```

![Issue]({{ "/assets/images/posts/ETC/Blog/2024-06-13-Blog-Image/logo.png" | relative_url }}){: .align-center width="30%"}

## 📐 이미지 크기 변경

방법은 크게 두 가지가 있다.

### 1. 픽셀 변경

`{: width="100px", height="100px"}` 같은 식으로 가로 세로 픽셀을 직접 지정해주는 방법

```yaml
![Issue]({{ "/assets/images/posts/ETC/Blog/2024-06-13-Blog-Image/logo.png" | relative_url }}){: .align-center width="100px", height="100px"}
```

![Issue]({{ "/assets/images/posts/ETC/Blog/2024-06-13-Blog-Image/logo.png" | relative_url }}){: .align-center width="100px", height="100px"}

### 2. 비율 변경

`{: width="50%", height="50%"}` 같은 식으로 가로 세로 비율을 직접 지정해주는 방법. 원본의 크기가 아닌 최대 크기를 100%로 기준으로 둔다.

```yaml
![Issue]({{ "/assets/images/posts/ETC/Blog/2024-06-13-Blog-Image/logo.png" | relative_url }}){: .align-center width="50%", height="50%"}
```

![Issue]({{ "/assets/images/posts/ETC/Blog/2024-06-13-Blog-Image/logo.png" | relative_url }}){: .align-center width="50%", height="50%"}

참고로 두 방법 모두 앞의 `width= "..."` 부분만 써주면 뒤의 `height`는 알아서 조절되므로 굳이 둘 다 써줄 필요는 없다. 
{: .notice--info}

# 💭 그 외

이미지 뿐만 아니라, `gif`처럼 움직이는 짤도 같은 방식으로 삽입 가능하다. 스크린샷, 이미지, gif 파일 등 여러 형식의 이미지들을 삽입해보자!