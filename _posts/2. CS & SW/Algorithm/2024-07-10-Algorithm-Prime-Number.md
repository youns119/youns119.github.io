---
title:  "[Algorithm] 소수 판별 알고리즘"
excerpt: "소수 판별 알고리즘에 대해 알아보자"

categories:
  - Algorithm
tags:
  - [Algorithm, Mathematics, Prime Number, Sieve of Eratosthenes]

toc: true
toc_sticky: true
 
date: 2024-07-10
last_modified_at: 2024-07-10
---

# 소수 판별


기본적인 `<= 1` 범위 처리, `짝수` 처리, `i * i <= iInput; i += 2`로 `홀수`를 검사하며 경계까지 소수 판별하는 방식으로 했다.

`i * i <= iInput` 루프를 가지고 `N`번 입력 받으므로 시간복잡도는 `O(N√M)`이지만 N이 크지 않으므로 사실상 `O(√N)`로 볼 수 있다.