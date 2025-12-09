---
title: "[Blog] 포스팅 문법 정리"
excerpt: "포스팅할 때 쓰는 각종 문법 정리"

categories:
  - Blog
tags:
  - [Blog, Github, Markdown, HTML, KAL, Etc]

toc: true
toc_sticky: true
 
date: 2024-06-11
last_modified_at: 2024-06-11
---

Github Blog는 포스팅 할 때 지켜야할 문법이나 규칙들이 꽤나 많다. 익숙해지면 포스팅도 금방금방 하게 되지만, 가끔씩 잘 안 쓰는 문법은 까먹어서 다시 인터넷을 뒤져보거나 하는 경우가 있다. 그래서 좀 전체적으로 정리해 놓으면 내가 보기 좋지 않을까 싶어 올리는 포스트!

---
# 📚 문법

블로그에 포스팅 할 때는 주로 `Markdown`, `HTML`, `KAL` 등을 자주 쓴다. 따라서 이를 중심으로 설명할 것이다.

## 📄 Markdown

Github Blog 문법의 알파이자 오메가. 여타 다른 블로그나 노트 앱에서도 자주 쓰이는 문법이므로 배워놓으면 좋다.

- <u><strong>장점</strong></u>은 간결, 단순, 저용량, 변환 간단.
- <u><strong>단점</strong></u>은 표준이 없어서 도구에 따라 문법이 달라지거나 변환 결과가 바뀔 수 있다.

또한 포스트 글을 쓰다보면 `Markdown` 문법과 `HTML` 언어를 막 섞어서 쓸 때가 많은데, `HTML` 안에서는 `Markdown` 문법이 무시되므로 주의할 것.

## 🔽 줄바꿈

`줄바꿈`을 하는 방법이다. `Markdown`, `HTML` 두 가지 방법이 있다.

### 1. Markdown

스페이스 두번 + Enter로 하는 방식이다.

```
Hi  
Hello
```

Hi  
Hello

### 2. HTML

`<br>`을 사용하는 방식이다.

```
Hi <br> Hello
```

Hi <br> Hello

## 📃 문단 나누기

문장 사이에 한 줄의 공백을 두면 된다.

```
Hi

Hello
```

Hi

Hello

## 📂 중첩 구조

스페이스 2번에 한 번 `중첩`된다. 사실 그냥 Tab 키 한 번 눌러서 하는게 가장 편하다.

```
- List
  - List
    - List
```

- List
  - List
    - List

## ⛔ 문법 무시

문법을 그대로 보여주고 싶으면 앞에 `\`를 붙여주면 된다.

```
<u>Hi</u>

\<u>Hi</u>
```

<u>Hi</u>

\<u>Hi</u>

## ✏️ 텍스트

### 1. 강조

`**` 사이에 텍스트를 입력하면 `볼드체`가 된다.

```
**Hello**
```

**Hello**

### 2. 기울임

`*` 사이에 텍스트를 입력하면 `이탈릭체`가 된다.

```
*Hello*
```

*Hello*

### 3. 취소선

`~~` 사이에 텍스트를 입력하면 `취소선`이 생긴다.

```
~~Hello~~
```

~~Hello~~

### 4. 밑줄

\<u> \</u> 사이에 텍스트를 입력하면 `밑줄`이 생긴다.

```
<u>Hello</u>
```

<u>Hello</u>

### 5. 텍스트 색상

\<span style="color:원하는 색상"> \</span> 사이에 텍스트를 입력하면 텍스트 `색상`이 바뀐다.

```
<span style="color:red">Hello</span>
```

<span style="color:red">Hello</span>

### 6. 전부 적용

상기한 것들을 모두 적용하면 다음과 같다.

```
~~***<u><span style = "color:red">Hello</span></u>***~~
```

~~***<u><span style = "color:red">Hello</span></u>***~~

## 🔖 헤더 (Header)

앞에 `#`를 붙이는 것으로 헤더를 만들 수 있다. 6번째 `헤더`까지만 지원되며, 글자 크기가 줄어들고 헤더에 따라 밑에 구분선이 생기기도 한다. 참고로 나는 두번째 헤더 밑에만 구분선이 생기게 해놓았다.

```
### h3
#### h4
##### h5
###### h6
```

### h3
#### h4
##### h5
###### h6

## 💬 인용문 (BlockQuote)

`인용문`을 보기 좋게 출력해 준다.

```
> BlockQuote
>> BlockQuote
>>> BlockQuote
```

> BlockQuote
>> BlockQuote
>>> - list
```
Code
```

인용문을 중첩하거나 인용문 안에 다른 `Markdown` 문법을 쓰는 것도 된다. 

## 📋 목록 (List)

앞에 숫자나 기호를 붙여 `목록`을 만든다. 순서 있는 목록과 없는 목록, 체크 목록이 존재한다.

### 1. 순서 있는 목록 (Ordered List)

`숫자와 점`으로 목록을 만든다.

```
1. First
    1. First
        - List
        - List
    2. Second
2. Second
    1. First
        1. First
            1. First
3. Third
```

1. First
    1. First
        - List
        - List
    2. Second
2. Second
    1. First
        1. First
            1. First
3. Third

### 2. 순서 없는 목록 (Unordered List)

`*, -, +` 기호를 사용해 목록을 만들 수 있고, 서로 혼합해서 사용하는 것도 가능하다.

```
* List
    - List
    + List
* List
    * List
        * List
- List
    * List
        + List
        + List
+ List
```

* List
    - List
    + List
* List
    * List
        * List
- List
    * List
        + List
        + List
+ List

### 3. 체크 목록 (Check List)

`[ ]` 안에 `x`의 유무로 표현 가능하다.

```
- [ ] Not Checked
- [X] Checked
```

- [ ] Not Checked
- [X] Checked

## 💻 코드

코드 영역을 만들어서 그 안에 문자를 출력한다. `들여쓰기`를 사용하거나, ``` 사이에 글자를 입력한다.

### 1. 들여쓰기

`들여쓰기`로 하는 경우 문장 사이에 한줄 띄어줘야 하며, 들여쓰기를 하지 않은 문장을 만날 때까지 계속된다.

```
Code

    Code

Code
```
- 실제 적용 예 :

Code

    Code

Code

### 2. 코드 블럭 (Code Block)

\`\`\` 사이에 끼워 넣어서 `코드 블럭`을 만들기도 가능하다.

\```

Code

\```

```
Code
```

### 3. 문법 강조 (Syntax Highlighting)

참고로 \`\`\` 옆에 사용 언어를 선언해서 `문법 강조`를 해줄 수도 있다.


- \```cpp 의 경우 :
```cpp
public class A
{
    int iA{};
    float iB{};
}
```

- \```java 의 경우 : 
```java
public class A
{
    int iA{};
    float iB{};
}
```

- \```yaml 의 경우 :
```yaml
public class A
{
    int iA{};
    float iB{};
}
```

## 📏 구분선

수평으로 길게 뻗은 `구분선`을 만든다. 문단이나 페이지 나누기용으로 자주 쓰인다. 아래는 구분선을 만드는 모든 방법이다.

```
***
*****
* * *
---
- - -
```

- 실제 적용 예 :

***
*****
* * *
- - -
---

## 🔗 링크

특정 주소의 `링크`를 걸 수 있다. 여러 방법이 있으니 사용하기 나름.

### 1. inline 링크

말 그대로 링크 자체만 띡하고 올리는 방법.

```
- <https://github.com/youns119>
```

- <https://github.com/youns119>

### 2. inline 링크 + 설명

설명까지 첨부한 inline 링크.

```
- [내 깃헙 페이지](https://github.com/youns119)
```

- [내 깃헙 페이지](https://github.com/youns119)

### 3. 페이지 내 문단 이동 링크

페이지 내의 문단(헤더)들은 모두 링크가 존재하므로 이를 이용해 이동하는 방식이다.

1. 헤더의 제목을 () 안에 복사.
2. 특수 문자 제거, 공백은 `-`로 변환
3. 대문자는 소문자로.
4. 앞에 `#` 추가.

```
- [순서 없는 목록](#2-순서-없는-목록-unordered-list)
```

- [순서 없는 목록](#2-순서-없는-목록-unordered-list)

이를 활용해서 다른 페이지의 문단으로 이동도 가능하다.

```
- [참고자료](https://youns119.github.io/blog/Blog-Start/#-참고자료)
```

- [참고자료](https://youns119.github.io/blog/Blog-Start/#-참고자료)

### 4. 이미지 링크

이미지에 링크를 걸어서 클릭하면 이동하게끔 하는 방식이다.

```
[![image](이미지주소)](이동하려는 링크 주소)
```

[![image]({{ "/assets/images/posts/ETC/Blog/2024-06-11-Blog-Posting-2/avatar_.gif" | relative_url }}){: width="20%" height="20%"}](https://github.com/youns119)

## 📒 테이블

`|`, `---`의 조합으로 `테이블`을 만들 수 있다. 정렬도 가능하다

- 정렬
    - 왼쪽 정렬 -> `|:---|`
    - 오른쪽 정렬 -> `|---:|`
    - 가운데 정렬 -> `|:---:|`

```
|이름|학점|주소|
|:---:|---:|---|
|김철수|4.0|서울|
|이영희|3.5|광주|
|정민수|3.0|부산|
```

|이름|학점|주소|
|:---:|---:|---|
|김철수|4.0|서울|
|이영희|3.5|광주|
|정민수|3.0|부산|

## 🔍 디테일

`토글`로 작동하는 버튼을 만들어서 내용을 숨길 수 있다. `<details>` 로 토글 버튼을 만들 수 있고, `<summary>` 로 토글 버튼의 이름을 만들 수 있다. `<div markdown="1">` 을 하면 내용에 `Markdown` 문법을 쓸 수 있다.

```
<details>
<summary>Detail</summary>
<div markdown="1">       

Hello!

</div>
</details>
```

<details>
<summary>Detail</summary>
<div markdown="1">       

***Hello!***

</div>
</details>

## ☑️ 버튼

버튼을 만드는 방법은 `Markdown`, `HTML` 두 가지 방법이 있다. 

참고로 주소에 `#`만 있으면 페이지 맨 위로 이동한다.
{: .notice--info}

### 1. Markdown

```
[Button](#){: .btn .btn--primary }
```

[Button](#){: .btn .btn--primary }

### 2. HTML

```
<a href="#" class="btn--success">Button</a>
```

<a href="#" class="btn--success">Button</a>

## 💡 문자 박스

`주의 사항`이나 `공지` 등을 쓰기에 좋다. 주로 `KAL`, `HTML` 두 가지 방법을 쓴다.

### 1. KAL

문단 바로 뒤에 `{: .notice}`를 붙여주면 된다.

- 종류
    - Default : .notice
    - Primary : .notice--primary
    - Info : .notice--info
    - Warning : .notice--warning
    - Success : .notice--success
    - Danger : .notice--danger

```
notice--default
{: .notice}

notice--primary
{: .notice--primary}

notice--info
{: .notice--info} 

notice--warning
{: .notice--warning} 

notice--success
{: .notice--success} 

notice--danger
{: .notice--danger} 
```

notice--default
{: .notice}

notice--primary
{: .notice--primary}

notice--info
{: .notice--info} 

notice--warning
{: .notice--warning} 

notice--success
{: .notice--success} 

notice--danger
{: .notice--danger} 

### 2. HTML

`<div class>` 태그를 사용하는 방법이다.

```
<div class="notice" markdown="1">

notice--default

- List
    - List

</div>
```

<div class="notice" markdown="1">

notice--default

- List
    - List
    
</div>

## 📐 Mathjax 수식

`Mathjax`라는 플러그인을 사용해서 수식을 쓰는 방법이다. 이 플러그인을 사용하는 방법은 [여기를 참고](https://www.cross-validated.com/How-to-render-math-on-Minimal-Mistakes/).

### 1. 단일 수식

단일 수식을 쓰는 방식이다. `$$` 사이에 수식을 쓰면 된다. 

```
$$f(x)= if x < x_{min} : (x/x_{min})^a$$  
$$otherwise : 0$$  
$$P(w)=U(x/2)(7/5)/Z$$  
$$p_{\theta}(x) = \int p_{\theta}(2z)p_{\theta}(y\mid k)dz$$  
$$x = argmax_k((x_t-x_u+x_v)^T*x_m)/(||x_b-x_k+x_l||)$$ 
```

$$f(x)= if x < x_{min} : (x/x_{min})^a$$  
$$otherwise : 0$$  
$$P(w)=U(x/2)(7/5)/Z$$  
$$p_{\theta}(x) = \int p_{\theta}(2z)p_{\theta}(y\mid k)dz$$  
$$x = argmax_k((x_t-x_u+x_v)^T*x_m)/(||x_b-x_k+x_l||)$$ 

### 2. inline 수식

문장과 함께 `inline`으로 같이 쓰는 방식이다. `\\(`, `\\)` 사이에 수식을 쓰면 된다.

```
수식 = \\(\vec{f_{ij,spring}} = -k(\vert\vec{x_i} - \vec{x_j}\vert - l_0){\vec{x_i} - \vec{x_j}\over{\vert\vec{x_i} - \vec{x_j}\vert}} \\)
```

수식 = \\(\vec{f_{ij,spring}} = -k(\vert\vec{x_i} - \vec{x_j}\vert - l_0){\vec{x_i} - \vec{x_j}\over{\vert\vec{x_i} - \vec{x_j}\vert}} \\)

### 3. 블록 수식

하나의 별개의 `블록`으로 수식을 쓰는 방식이다. `\\[`, `\\]` 사이에 수식을 쓰면 된다.

```
수식 = \\[\vec{f_{ij,spring}} = -k(\vert\vec{x_i} - \vec{x_j}\vert - l_0){\vec{x_i} - \vec{x_j}\over{\vert\vec{x_i} - \vec{x_j}\vert}} \\]
```

수식 = \\[\vec{f_{ij,spring}} = -k(\vert\vec{x_i} - \vec{x_j}\vert - l_0){\vec{x_i} - \vec{x_j}\over{\vert\vec{x_i} - \vec{x_j}\vert}} \\]

## 📊 다이어그램

놀랍게도 `Markdown`으로 `UML 다이어그램`까지 표현할 수가 있다! 근데 사실 `draw.io`를 써서 이미지로 저장하는게 더 편할 것 같아서 딱히 쓸 것 같진 않다... 그럼에도 일단 참고 자료는 첨부한다.

- [Flow Charts](https://flowchart.js.org/)
- [Sequence Diagrams](https://bramp.github.io/js-sequence-diagrams/)

---
# 💭 그 외

이 외에도 찾아보면 쓸만한 문법들이나 기능들이 꽤나 많다. 특히나 `KAL(Kramdown Attribute List)` 문법이라고 `jekyll theme` 에서 `Markdown`과 연계하는 문법 중에 쓸만한 기능들이 꽤나 많으니 잘 찾아보면 좋을 것 같다. 상기한 문법들은 거의 자주 쓰이는 문법들만 정리해 놓았으니 이것만 기억해놔도 충분할지도?