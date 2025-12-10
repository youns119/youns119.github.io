---
title:  "[Etc] 코딩 테스트 팁"
excerpt: "코딩 테스트의 팁을 알아보자"

categories:
  - Etc
tags:
  - [Etc, Coding Test, Tip]

toc: true
toc_sticky: true
 
date: 2024-06-16
last_modified_at: 2024-06-16
---

# 📝 코딩 테스트

> 코딩 테스트란?

말 그대로 특정 상황에 대한 문제를 내고, 이를 정해진 프로그래밍 언어로 구현하는 테스트이다. 요즘의 IT 회사에서는 거의 필수적인 입사 절차로 활용되고 있으며, 나의 가장 큰 약점이기도 하다. 따라서 이번 기회로 `코딩 테스트`에 대한 각종 팁을 정리해보고자 한다.

# 💡 팁

코딩 테스트를 위한 공부를 할 떄 도움이 되는 각종 팁들이 존재한다. 여기부터 그 팁들을 나열해보겠다.

## 📌 문제 선택

`백준`, `프로그래머스`, `LeetCode` 등 코딩 테스트를 위한 각종 문제들이 존재하는 사이트들이 있다. 하지만 그 수많은 문제들 중에 어떤 문제를 풀어야할지 감이 잡히지 않을 때가 많다. 이럴 때 도움이 되는 방법들이 몇가지 존재한다.

### 1. 백준

#### - 단계별 풀이

[백준 - 단계별 풀이](https://www.acmicpc.net/step)

`백준`에서는 단계별로 문제들을 정리해 놓은 페이지가 있다.

![BaekJoon_Step]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/BaekJoon_Step.png" | relative_url }}){: .align-center}

여기서 단계별로 문제들을 푸는 방식이다. 특히 초반에 코딩 테스트에 대한 감을 잡을 때 좋다.

#### - 강의

[백준 - 강의](https://www.acmicpc.net/lectures)

`백준`에서는 코딩 테스트에 대한 강의를 제공한다. 

![BaekJoon_Lecture]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/BaekJoon_Lecture.png" | relative_url }}){: .align-center}

하지만 강의는 유로라서 돈을 내야 한다. 내가 추천하는 방법은 강의를 듣는게 아니라 **<u>각 강의 페이지로 들어가서 나와 있는 알고리즘 별 문제들을 푸는 것</u>**이다. 초급부터 고급까지 알고리즘별로 추천 문제들이 있어서 알고리즘 공부에 아주 좋다.

### 2. 프로그래머스

#### - 알고리즘 고득점 Kit

[프로그래머스 - 알고리즘 고득점 Kit](https://school.programmers.co.kr/learn/challenges?tab=algorithm_practice_kit)

`프로그래머스`에서는 알고리즘 고득점 Kit이란 페이지가 따로 존재한다.

![Programmers_Kit]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/Programmers_Kit.png" | relative_url }}){: .align-center}

여기서 `프로그래머스` 사이트에서 직접 분석해서 **<u>자주 나오는 알고리즘 유형, 사람들이 많이 틀리는 유형</u>**들을 분류해 놓았다. 문제수가 그리 많지 않으니 다 풀어보면 좋을 것 같다.

#### - AI 추천 문제

[프로그래머스 - AI 추천 문제](https://school.programmers.co.kr/learn/challenges?order=recent&levels=2&languages=cpp)

`프로그래머스`에서는 직접 내가 푼 문제들의 유형과 성공 여부를 토대로 AI가 직접 문제를 추천해주는 시스템이 있다. 

![Programmers_AI]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/Programmers_AI.png" | relative_url }}){: .align-center}

도저히 뭘 풀어야할지 모를 때 이용하면 소소하게 도움이 된다.

### 3. 코드 업

[코드 업](https://codeup.kr/problemsetsol.php)

`코드 업`에서는 문제집을 제공한다.

![Codeup_Problems]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/Codeup_Problems.png" | relative_url }}){: .align-center}

여기에서는 `기초 입출력`부터 `Union-Find` 같은 고급 알고리즘까지 각 알고리즘별 추천 문제들이 모여 있다.

### 4. solved.ac

#### - Class 단계별 풀이

[solved.ac](https://solved.ac/class)

`solved.ac`에서는 Class 단계별 풀이 페이지가 있다. 

![Solved_Class]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/Solved_Class.png" | relative_url }}){: .align-center}

여기서 Class 내의 문제를 모두 풀고 다음 Class로 넘어가는 방식으로 단계별 풀이를 할 수 있다.

#### - 태그 활용

`solved.ac`의 내 프로필에 들어가보면 각 문제별 태그에 대한 나의 `레이팅`을 볼 수 있다.

![Solved_Tag1]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/Solved_Tag1.png" | relative_url }}){: .align-center}

여기서 낮은 레이팅 순서로 태그를 찾아서 우선적으로 풀면 **<u>나의 약한 알고리즘에 대한 보충</u>**을 하기에 좋다. 태그 페이지는 밑의 링크로 가면 된다.

[solved.ac-Tag](https://solved.ac/problems/tags)

### 5. 랜덤 문제

이 외에도 정말 어떤 문제를 풀어야 좋을지 모르겠다면 `랜덤 문제`를 뽑는 방식도 존재한다. 상기한 `프로그래머스`의 AI 추천 문제 뿐만이 아니라, `solved.ac`의 검색을 활용하는 방법도 있다.

![Solved_Random]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/Solved_Random1.png" | relative_url }}){: .align-center}

`solved.ac`의 상단 메뉴 중 돋보기 메뉴를 누르면 위의 창이 뜨는데, 여기에 정해진 문법대로 검색을 하면 된다. 검색법은 다음과 같다.

![Solved_Random]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/Solved_Random2.png" | relative_url }}){: .align-center}

이 외에도 `프로그래머스`에서 원하는 난이도를 선택하고 아무 문제나 골라 풀거나, `백준`의 고급 검색을 활용하는 방법도 있다.
{: .notice--info}

## ❓ 티어, 알고리즘 숨기기

`백준`이나 `solved.ac`를 사용한다면 알고리즘 분류나 티어에 대해 OnOff 기능을 설정에서 제공한다.

![Solved_Setting]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/Solved_Setting.png" | relative_url }}){: .align-center}

![BaekJoon_Setting]({{ "/assets/images/posts/ETC/Etc/2024-06-16-Etc-Coding-Test-Tip/BaekJoon_Setting.png" | relative_url }}){: .align-center}

알고리즘이나 티어를 끄거나 어려운 문제만 경고하도록 설정하는 것을 추천한다. **<u>실제 코딩 테스트에서는 알고리즘이나 난이도를 알려주지 않는다.</u>**

## ⏳ 시간 분배

실제 코딩 테스트에서는 시간 제한이 주어지는데, 대부분 **<u>한 문제당 30분 ~ 1시간</u>** 정도의 시간이 주어지게 된다. 따라서 실전에 대비해서 개인 코딩 테스트 공부를 할 때도, 시간 제한을 놓고 적절한 `시간 분배`를 하는 것이 좋다.

### 1. ~ 20분

<u>감이 잡히는 경우</u> : 
- 어떤 `알고리즘`을 써서 어떻게 풀어야 하는지 감이 잡힌다면 그대로 풀어 본다.

<u>그렇지 않은 경우</u> :
- 알고리즘 분류를 확인한다.
  - 아는 알고리즘이었던 경우, 같은 알고리즘의 다른 문제들을 풀며 연습.
  - 모르는 알고리즘인 경우, 구글링 등을 통해 해당 알고리즘을 공부.

### 2. ~ 40분

<u>풀었으나 틀린 경우</u> :
- 문제를 다시 읽어보거나, 미처 고려하지 못한 `예외 케이스`가 있는지 확인.
- 시간 혹은 메모리 초과인 경우는 사용 중인 `STL`이나 `자료구조`를 바꿔보거나 `코드 최적화` 시도.

<u>풀었는데 비효율적인 경우</u> :
- 더 효율적인 `STL`이나 `자료구조`가 있을지 고민.
- 내 코드의 알고리즘의 `시간복잡도`를 생각해보자.
- 더 이상 최적화가 떠오르지 않을 경우 다른 사람의 풀이를 참고.

### 3. ~60분

<u>틀렸거나 여전히 비효율적인 풀이인 경우</u> :
- 다른 사람의 풀이를 보거나 AI를 활용해보자.
- 그리고 일주일 정도 후에 다시 **<u>스스로 문제를 풀어보자.</u>**

### 4. 이후

다른 사람의 풀이나 AI를 활용한 풀이를 참고해서 **<u>더 효율적인 풀이나 다른 방식의 풀이</u>**가 있는지 확인하는 것이 좋다. 내가 생각치 못한 풀이가 가장 내 맘에 드는 풀이일 수도 있다.

## 🔍 조건 확인

주어지는 `케이스의 수`나 `예외 조건` 등을 확인하는 것은 당연하다. 추가적으로 생각해보면 좋을 것은 `시간 복잡도`와 `공간 복잡도`이다.

### 1. 시간 복잡도

> 컴퓨터는 간단한 동작을 1초에 약 1억 번 수행한다.

이 사실을 활용하면, 다음과 같은 사고가 가능하다.

- <span style = "color:lightblue">시간 제한이 1초일 때, N = 5,000 이라면 O(N²) 라면 25,000,000 번이므로 1초 1억 번에 비해 널널하네!</span>
- <span style = "color:lightblue">N = 100,000 이라면 O(NlogN) 이나 O(N√N) 으로 가능!</span>

물론 **<u>입출력, 문자열 처리, map, 정렬</u>** 같은 연산 1번은 더 무겁기 때문에 어느 정도의 오차는 있지만, 대략 위 같은 방법으로 계산해도 무방하다.
{: .notice--info}

### 2. 공간 복잡도

수많은 자료형들은 각각 차지하는 메모리 크기가 다르다.<br>
예를 들어 `int` 자료형은 4바이트, `char` 자료형은 1바이트 등등...

이를 활용하면, 다음과 같이 생각할 수 있다.

- <span style = "color:lightblue">메모리 제한이 256MB라면, int a[1000000]은 4,000,000B == 4MB이므로 통과!</span>
- <span style = "color:lightblue">메모리 제한이 10MB라면, int char[100000000]은 100,000,000B = 10MB이므로 다른 방법을 써볼까?</span>

실제로는 **<u>함수 콜스택, 각종 STL, 라이브러리 등의 내부 버퍼</u>**도 사용하기 때문에 아슬아슬하다 싶은 경우는 다른 방법을 생각하는 것이 좋다.
{: .notice--info}

## 🔖 기타 팁

### 1. 헤더 파일

코딩 테스트를 풀다 보면 어떤 STL, 기능, 함수 등을 사용하기 위해 특정 `헤더 파일`을 포함해야 하고, 가끔을 어떤 헤더 파일이 필요한지 헷갈릴 때가 종종 있다. 이럴 때 `"bits/stdc++.h"`라는 헤더파일만 있으면 대부분의 문제는 해결된다.

`"bits/stdc++.h"` 헤더 파일은 우리가 자주 쓸만한 헤더 파일들을 대부분 `include` 해놓은 파일이다. 구글링하면 금방 찾아서 다운로드 할 수 있는데, 이를 자신의 `Visual Studio`의 "include" 폴더 내에 넣으면 된다. 그리고 사용할 때는 이 헤더 파일만 `include` 해주면 끝!

```yaml
#include "bits/stdcn++.h"
```

이지만, 나는 개인적으로 사용을 꺼리는 편이다. 일단 나에게 **<u>필요 없는 헤더 파일도 강제로 포함</u>**시켜야 되는 것도 있고, 남용하면 이 파일 없이는 **<u>어떤 헤더 파일이 필요한지 까먹게 되기 때문</u>**이다.

### 2. 입출력 최적화

코테에서 항상 유용하게 쓰일 수 있는 `입출력 최적화` 방법이 두 가지 존재한다. 이를 `main` 함수의 최상단에 포함해주면 굉장히 도움이 된다.

#### - ios::sync_with_stdio(false)

> 이 코드의 역할은 **C++의 iostream(cin/cout)과 C의 stdio(scanf/prinf)의 동기화를 끊어주는 것**이다.

기본적으로 C++의 `cin/cout`은 C의 `scanf/prinf`와 내부 버퍼를 동기화해서 사용한다. 그 이유는 C++의 초창기에는 C 라이브러리와 `iostream`을 같이 쓸 일이 많았기 때문에, 동일한 버퍼를 사용함으로써 줄 바꿈이나 순서가 꼬이는 것을 방지할 수 있기 때문이다.

하지만 이로 인해 매 입출력 연산마다 버퍼를 동기화해야 하기 때문에 입출력이 느려진다. 따라서 저 코드는 **<u>동기화를 끊어줌으로써 입출력의 속도를 향상</u>**시킨다.

이 코드를 포함시키면 `cin/cout`과 `scanf/prinf`를 섞어쓰는 것을 지양해야 한다. (버퍼 순서가 뒤죽박죽 될 수 있기 때문)
{: .notice--warning}

#### - cin.tie(nullptr)

> 이 코드의 역할은 **cin과 cout의 자동 flush (출력 버퍼 지우기) 연결을 끊어주는 것**이다.

기본적으로 `cin`은 입력받기 전에 `cout`을 자동으로 `flush` 한다. 왜냐하면 다음 같은 상황에서 사용자에게 출력이 먼저 보이게 하기 위해서이다.

```yaml
cout << "입력하세요: "; // flush됨
cin >> x;              // input
```

하지만 코딩 테스트에서는 사람이 직접 데이터를 입력하는게 아니라, 컴퓨터가 데이터를 제공하기 때문에 자동 `flush`는 불필요한 `오버헤드`가 된다. 따라서 이 코드를 포함시킴으로써 **<u>cin와 cout의 연결을 끊고, 입출력의 속도가 빨라진다.</u>**

# 💭 그 외

이는 내가 지금까지 얻은 정보를 바탕으로 작성한 게시물이므로, 기타 다른 팁들이 많이 존재할 수도 있다. 코딩 테스트는 유용하게 활용할 수 있는 팁들이 많이 존재하니, 한 번 찾아보길 바란다!

## 🔗 참고자료

- <https://www.slideshare.net/slideshow/kucc-2022-4/251739276>
- <https://dev-junwoo.tistory.com/97>
- <https://gall.dcinside.com/board/view/?id=programming&no=1358794>