# 2. Boiler-Plate & MongoDB 연결(따라하며 배우는 리액트 노드)

1. Boiler-plate 이용 이유

- 더 빠르게 개발을 완성하기 위해서
- 프로젝트의 중요한 부분을 더욱 집중할 수 있기 위해서
- 이미 Boiler-plate를 위한 강의가 찍어져 있어서

2. Boiler Plate 다운로드
   [링크](https://github.com/jaewonhimae/boilerplate-mern-stack)
   -> 나는 여기서 git clone해서 복사하였음!!

3. boiler plate 실행

- 서버와 클라이언트에서 Dependencies 다운받기(루트에 받기, 여기서는 src) npm install (하나하나 해줄줄 알았는데 npm install로 한방에 해준다..ㅎㅎ)
- dev.js 파일 생성
- MongoDB 로그인
- 클러스터 만든 후 아이디 비번 생성후 dev.js 파일에 넣는다.

---

# 3. The MovieDB API

1. The MovieDB Website로 이동
   [ThemovieDB]](https://www.themoviedb.org)
2. 가입 후 로그인 & API_KEY 받기

- 회원가입 후 로그인하여
- 프로필 - 설정 - API - Request an API key - developer

3. Text Editor에서 the MovieDB API를 위한 설정

![Api](api.png)

![image](image.png)

> 반복되는 부분을 고정하고 유동적으로 쓰도록 하자!!

---

# 4. Landing Page 만들기(1)

1. 전체적인 템플릿을 간단하게 만들기
2. Movie API에서 가져온 모든 데이터를 State에 넣기
3. MainImage Component를 만들기
4. Grid Card Component 만들기
5. Load More Function 만들기

[깃허브](https://github.com/jaewonhimnae/react-movie-app-ko/blob/master/client/src/components/views/LandingPage/LandingPage.js)
