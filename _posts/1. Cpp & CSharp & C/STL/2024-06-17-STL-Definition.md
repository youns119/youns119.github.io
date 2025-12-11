---
title:  "[STL] STL이란?"
excerpt: "STL에 대해 알아보자"

categories:
  - STL
tags:
  - [STL, Cpp]

toc: true
toc_sticky: true
 
date: 2024-06-17
last_modified_at: 2025-06-17
---

# STL이란?

> STL은 그냥 "C++에서 쓰는 컨테이너들 묶음"이 아니라, C++ 템플릿 철학을 관통하는 라이브러리 구조이다.

`STL`에 대해서는 그 동안 그냥 `C++`에서 자주 쓰이는 `자료구조`들을 쓰기 쉽도록 리팩토링하고 제공하는 라이브러리라고 알고 있었다. 하지만 더 알아보니 생각보다 심오한 구조인 것 같다. 그래서 따로 정리해 두면 좋을까 싶어 포스팅을 만들기로 했다.

## 정의

`STL`을 간단히 정의하자면 다음과 같다.

**<u>C++에서 템플릿 기반의 컨테이너 + 반복자 + 알고리즘 + 함수 객체들을 모아둔 표준 라이브러리 체계.</u>**

이를 좀 더 알기 쉽게 표현하자면,
- <span style = "color:lightblue">`템플릿`을 이용해서 자료형에 상관없이 재사용할 수 있게 만들어진 라이브러리.</span>
- 예 : `std::vector<int>`, `std::sort`, `std::map`, `std::function`

이라고 할 수 있다.

