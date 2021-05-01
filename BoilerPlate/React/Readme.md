# What is REACT JS?

## React JS ?

1. Libray, Made by Facebook
2. Components : module과 비슷하게 컴포넌트로 이뤄져 있어서 reusable이 뛰어남.
3. Virtual DOM

## Real DOM Vs Virtual DOM

### Real DOM

> 만약 10개의 리스트가 있다면 그 중에 하나의 리스트만 Update됨. 전체리스트를 다시 Reload 해야됨. Super Expensive한 작업

### Virtual DOM

> 만약 10개의 리스트가 있다면 그 중에 하나의 리스트만 Update 됨. 그 바뀐 한가지 아이템만 DOM에서 바꿔준다. HOW?

1. Virtual DOM은 Real DOM과 같은 properties들을 갖고 있으면 그냥 가볍게 Real DOM을 Copy한라 보면 된다!
2. JSX을 렌더링 한다. 그러면 Virtual DOM이 Update가 됨
3. Virtual DOM이 이전 Virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분을 찾는다.
4. Virtual DOM이 이전 virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분을 찾는다. 이 과정을 "diffing"이라고 함.

---
