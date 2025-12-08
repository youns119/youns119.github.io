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

# Markdown

Github Blog 문법의 알파이자 오메가. 여타 다른 블로그나 노트 앱에서도 자주 쓰이는 문법이므로 배워놓으면 좋다.

- <u><strong>장점</strong></u>은 간결, 단순, 저용량, 변환 간단.
- <u><strong>단점</strong></u>은 표준이 없어서 도구에 따라 문법이 달라지거나 변환 결과가 바뀔 수 있다.

또한 포스트 글을 쓰다보면 `Markdown` 문법과 `HTML` 언어를 막 섞어서 쓸 때가 많은데, `HTML` 안에서는 `Markdown` 문법이 무시되므로 주의할 것.

## 헤더 (Header)

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

## 인용문 (BlockQuote)

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

## 목록 (List)

앞에 숫자나 기호를 붙여 `목록`을 만든다. 순서 있는 목록과 없는 목록이 따로 존재한다.

### 순서 있는 목록 (Ordered List)

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

### 순서 없는 목록 (Unordered List)

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

## 코드

코드 영역을 만들어서 그 안에 문자를 출력한다. `들여쓰기`를 사용하거나, ``` 사이에 글자를 입력한다.

### 들여쓰기

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

### 코드 블럭 (Code Block)

\`\`\` 사이에 끼워 넣어서 `코드 블럭`을 만들기도 가능하다.

\```

Code

\```

```
Code
```

### 문법 강조 (Syntax Highlighting)

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

## 구분선

수평으로 길게 뻗은 `구분선`을 만든다. 문단이나 페이지 나누기용으로 자주 쓰인다. 아래는 구분선을 만드는 모든 방법이다.

```
* * *
***
*****
- - -
---
```

- 실제 적용 예 :

***
*****
* * *
- - -
---

## 링크

특정 주소의 `링크`를 걸 수 있다. 여러 방법이 있으니 사용하기 나름.

### inline 링크

말 그대로 링크 자체만 띡하고 올리는 방법.

```
<https://github.com/youns119>
```

<https://github.com/youns119>

### inline 링크 + 설명

설명까지 첨부한 inline 링크.

```
[내 깃헙 페이지](https://github.com/youns119)
```

[내 깃헙 페이지](https://github.com/youns119)

### 페이지 내 문단 이동 링크

페이지 내의 문단(헤더)들은 모두 링크가 존재하므로 이를 이용해 이동하는 방식이다.

1. 헤더의 제목을 () 안에 복사.
2. 특수 문자 제거, 공백은 `-`로 변환
3. 대문자는 소문자로.
4. 앞에 `#` 추가.

```
```