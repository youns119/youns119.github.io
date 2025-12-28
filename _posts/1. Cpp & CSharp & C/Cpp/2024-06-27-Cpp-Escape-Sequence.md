---
title:  "[C++] C++의 특수 문자 출력에 대해"
excerpt: "C++에서의 특수 문자 출력에 대해 알아보자"

categories:
  - Cpp
tags:
  - [Cpp, Escape Sequence, ASCII, Output]

toc: true
toc_sticky: true
 
date: 2024-06-27
last_modified_at: 2024-06-27
---

# ✨ 특수 문자

`특수 문자` 출력은 생각보다 여러 곳에서 많이 쓰인다. **<u>리소스 경로, 디버깅 콘솔, 코딩 테스트 등</u>**에서 제대로 된 특수 문자 출력 방법이 기억이 안나서 다시 검색하는 번거로움이 싫어서 따로 정리하고자 한다.

## 🚪 이스케이프 시퀀스 (Escape Sequence)

문자열 안에서 `\(백슬래시)`로 시작하는 특수 문자들을 `이스케이프 시퀀스`라고 한다.

| 이스케이프 | 출력 결과  | 설명      |
| ----- | ------ | ------- |
| `\n`  | 줄바꿈    | newline |
| `\t`  | 탭      | tab     |
| `\r`  | 캐리지 리턴 | 줄 맨 앞으로 |
| `\b`  | 백스페이스  | 한 글자 삭제 |
| `\\`  | `\`    | 백슬래시 출력 |
| `\"`  | `"`    | 큰따옴표    |
| `\'`  | `'`    | 작은따옴표   |
| `\0`  | 널 문자   | 문자열 종료  |

- `\(백슬래시)` 출력

```cpp
cout << "\\";   // 출력 : \
```

- `큰따옴표` / `작은따옴표` 출력

```cpp
cout << "\"Hello\"";   // 출력 : "Hello"
cout << '\'';          // 출력 : '
```

- `여러 줄 문자열` 출력

```cpp
cout << "Hello\nWorld\nC++";
```

## 📦 Raw String Literal (C++11 ~ )

`R"( ... )"` 형식으로 표현하는 것을 `Raw String Literal`이라고 한다. 이 괄호 안의 `이스케이프 시퀀스`는 모두 무시되므로, 특수 문자가 많고 긴 문자열을 출력할 때 매우 편하게 쓸 수 있다.

- `Raw String Literal`이 특히나 좋은 경우
  - `\(백슬래시)`, `큰따옴표` / `작은따옴표`의 출력이 많을 때
  - 경로 문자열 출력 `(C:\Users\...)`
  - 정규식 / 이스케이프가 많은 문자열을 그대로 출력해야 할 때

```cpp
cout << R"(C:\Users\youns119\Documents)";

cout << R"(Hello
World
C++)";
```

### ※ 주의 사항

기본 형태가 `R"( ... )"`이므로 문자열 내부에 `)"`가 먼저 나오면 종료로 인식되어 문자열이 끊길 수 있다. 따라서 이럴 때는 `구분자 (delimiter)`를 붙여서 해결한다.

`구분자 (delimiter)`는 기본적으로
- 영문자, 숫자, `_` ⭕ 가능 
- 공백, 괄호, 따옴표, 특수문자 ❌ 불가능

의 규칙만 지키면 그냥 맘대로 이름을 지어도 된다. 그러나 관례적으로는 `DELIM`, `TAG`, `RAW`, `END` 등을 자주 쓴다. 사용법은 아래와 같다.

```cpp
R"TAG(이 안에 )" 가 있어도 OK)TAG"
```

이런식으로 구분자로 시작과 끝을 잘 지켜주기만 하면 된다.


## 🎨 ASCII 아트 출력

위의 `이스케이프 시퀀스`와 `Raw String Literal` 같은 것을 적절히 사용하면 `ASCII` 아트 출력을 매우 쉽게 할 수 있다.

### 예제 1)

- 고양이 출력 (`이스케이프 시퀀스` 방식)
> <https://www.acmicpc.net/problem/10171>

<details>
<summary style = "color:lightblue">고양이 출력</summary>
<div markdown="1">       

```cpp
cout << "\\    /\\" << '\n';
cout << " )  ( ')" << '\n';
cout << "(  /  )" << '\n';
cout << " \\(__)|" << '\n';
```

</div>
</details>

### 예제 2)

- 개 출력 (`Raw String Literal` 방식)
> <https://www.acmicpc.net/problem/10172>

<details>
<summary style = "color:lightblue">개 출력</summary>
<div markdown="1">       

```cpp
cout << R"(|\_/|
|q p|   /}
( 0 )"""\
|"^"`    |
||_/=\\__|)";
```

</div>
</details>

## 🔤 문자 vs 문자열

`문자`는 단일 문자를 뜻하며, `문자열`은 그러한 문자들이 모인 하나의 문장을 뜻한다. 따라서 표현 방식도 달라야 한다.

```cpp
char c = '\n';        // 단일 문자
string s = "\n";     // 문자열

cout << c;
cout << s;
```

**<u>`char`은 작은 따옴표, `string`은 큰 따옴표</u>**로 표현한다.
{: .notice--info}

## 🧾 char로 ASCII 코드 출력

`문자열`로 `ASCII` 코드를 출력하는 것이 아닌 단일 문자로 출력하고 싶을 때, `char`형으로도 표현 가능하다.

```cpp
cout << char(65);   // A
cout << char(10);   // 줄바꿈
cout << char(92);   // \
```

---
# 💭 그 외

그 외에도 특수 문자와 관련한 여러 트릭이나 표현 방식이 있겠지만, 이 정도만 알아둬도 당장은 충분하지 않을까 싶다. 혹여나 새로운 정보를 얻게 되면 계속 갱신해야겠다.