# Vue.js

- Vue.js는 웹프론트엔드 프레임워크임
- 컴포넌트 기반의 SPA(single page applicaiton)를 구축할 수 있게 해주는 프레임워크

## 컴포넌트(Component)

- 웹을 구성하는로고, 메뉴바, 버튼, 모달창 등 웹 페이지 내의 다양한 UI 요소
- 재사용 가능하도록 구조화한 것

## SPA(Single Page Applicaiton)

- 단일 페이지 어플리케이션
- 하나의 페이지 안에서 필요한 영역 부분만 로딩 되는 형태
- 빠른페이지 변환
- 적은 트래픽 양

## vue 설치하기

```
npm install -g @vue/cli
```

### vue 시작하기

```
vue create test
default로 선택
cd test
npm run serve
```

> localhost:8080으로 접속

### vue 라우터 설치

```
npm install vue-router --save
```

- 라우터 : 웹페이지간에 이동하는 방법

### bootstrap vue

[vue](https://bootstrap-vue.org/)

```
npm install vue bootstrap-vue bootstrap
```

- main 부분에 추가할 것!

```js
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
```

![lifecycle](lifecycle.png)

[vue](https://kr.vuejs.org/v2/guide/instance.html)
