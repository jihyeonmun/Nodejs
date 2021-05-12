Hello, My Friends  
Thank you for having interest in this repository !

To use this application,

1. make dev.js file inside config folder
2. put mongoDB info into dev.js file
3. Type " npm install " inside the root directory ( Download Server Dependencies )
4. Type " npm install " inside the client directory ( Download Front-end Dependencies )

If you have problem, feel free to ask me ^^

You can watch the tutorial for this app.

https://www.youtube.com/channel/UCFyXA9x8lpL3EYWeYhj4C4Q?view_as=subscriber

---

# 3. 상품 업로드 페이지 만들기

1. 비어이는 업로드 페이지 생성
2. 업로드 페이지 Route 만들기
3. 업로드 페이지 탭 만들기
4. Drop zone을 제외한 Form을 만들기

- 파일 업로드만을 위한 컴포넌트 만들기

5. 모든 INPUT을 위한 onChange Function 만들기

---

# 6. Drop-zone 적용하기

1. Utils 폴더 안에 파일 업로드 파일 만들기
2. Drop-zone 라이브러리 다운받기

```shell
npm install react-dropzone --save
```

(클라이언트에서)

3. File 업로드 컴포넌트를 위한 UI 만들기

4. onDrop Function 만들기
   Multer

```shell
npm install multer --save
```

> Frontend와 Backend 간의 파일 전달을 위해서는 multer가 필요함

- 1. 파일 전달
- 2. 파일 저장 (multer 필요)
- 3. 파일 저장 정보 전달

5. onDelete Function 만들기
