| 전체목차                                          |     |
| ------------------------------------------------- | --- |
| 강의 소개                                         |     |
| 전체적인 틀 만들고 Mongo DB 연결                  |     |
| Boiler Plate 강의                                 |     |
| 비디오 업로드 Form 만들기                         |     |
| Multer로 노드 서버에 비디오 저장하기              |     |
| ffmpeg로 비디오 썸네일 생성하기                   |     |
| 비디오 업로드하기                                 |     |
| 랜딩 페이지에 비디오들 나타나게 하기              |     |
| 비디오 디테일 페이지 만들기                       |     |
| 디테일 비디오 페이지에 Side 비디오 생성           |     |
| 구독 기능                                         |     |
| 구독 비디오 페이지                                |     |
| 댓글 기능 생성 - 구조 설명                        |     |
| 댓글 기능 생성 - Comment.j                        |     |
| 댓글 기능 생성 - SingleComment                    |     |
| 댓글 기능 생성 - ReplyComment                     |     |
| 좋아요 싫어요 기능 생성 - 구조 설명               |     |
| 좋아요 싫어요 기능 생성 - 템플릿, 데이터 가져오기 |     |
| 좋아요 싫어요 기능 - 클릭시 기능들                |     |
|                                                   |     |

[참고 - 원본](https://github.com/jaewonhimnae/react-youtube-clone)
[참고- 학생](https://github.com/wdh005/youtubeclonecoding)

# 2강 전체적인 틀 만들고 Mongo DB 연결하기

1. Boiler-plate 사용 이유

- 더 빠르게 개발을 완성하기 위해서
- 이 프로젝트의 중요한 부분을 더욱 집줄할 수 있기 위해서
- 이미 Boiler-plate를 위한 강의가 찍어져 있기 때문에

2. Boiler plate 다운로드

- [Git Hub](https://github.com/jaewonhimnae/boilerplate-mern-stack)

3. Boiler Plate 실행 방법

- 서버와 클라이언트에서 Dependencies 다운받기
  npm install
  (루트 한번, client 한번)
- dev.js 파일 생성
- MongoDB 로그인
- 클러스터 만든 후 아이디 비번 생성 후 dev.js 파일에 넣는다.

---

# 4. 비디오 업로드 FORM 만들기

1. Upload Page 만들기
2. Upload Page Route 만들기
3. Upload Pge Header Tab 만들기
4. Form Template 만들기
5. 파일을 올리는 Template 만들기 위해 Drop-zone 다운받기

```shell
npm install react-dropzone --save
```

6. onChange func 만들기

```js
<div style={{ maxWidth: "700px", margin: "2rem" }}>
  <div style={{ textAlgin: "center", marginBottom: "2rem" }}>
    <Title level={2}>Upload Video</Title>
  </div>
  <Form onSubmit>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/*Drop Zone*/}
      {/*Thumbnail*/}
      <div>
        <img src alt />
      </div>
    </div>
    <br />
    <br />
    <label>Title</label>
    <Input onChange value />
    <br />
    <br />
    <label>Description</label>
    <TextArea onChange value />
    <br />
    <br />
    <select onChange>
      <option key value></option>
    </select>
    <br />
    <br />
    <select onChange>
      <option key value></option>
    </select>
    <Button type='primary' size='large' onClick>
      Submit
    </Button>
  </Form>
</div>
```

> 위 와 같은 동영상 업로드 양식을 맞추었고, drop 기능을 활용하기 위해서, 아래와 같이 설치함

```shell
npm install react-dropzone --save
```

---

# 5. 동영상 넣기 - Onchange 기능 넣기

```js
const onTitleChange = (e) => {
  setVideoTitle(e.currentTarget.value);
};

const onDescriptionChange = (e) => {
  setDescription(e.currentTarget.value);
};

const onPrivateChange = (e) => {
  setPrivate(e.currentTarget.value);
};

const onCategoryChange = (e) => {
  setCategory(e.currentTarget.value);
};
```

---

# 5. Multer로 노드 서버에 비디오 저장하기

- OnDrop func 만들기
- 노드 서버에 파일을 저장히기 위해 Dependency를 먼저 다운로드

```shell
npm install multer --save in Server directory
```

- 비디오 파일을 서버로 보내기
- 받은 비디오 파일을 서버에서 저장
- 파일 저장 경로를 클라이언트로 전달해주기

---

# 6. ffmpeg로 비디오 썸네일 생성하기

1. 썸네일 생성을 위한 Dependency를 다운받기

- fluent-ffmpeg를 다운받기 위한 필수 조건

```
brew install ffmpeg
```

- Download fluent-ffmpeg Dependency

```
npm install fluent-ffmpeg
```

2. 서버에 저장된 비디오를 이용한 썸네일 생성

3. 생성된 썸네일을 서버에 저장
4. 썸네일 이미지 파일 경로 정보를 클라이언트에 보내기
5. 썸네일 이미지를 화면에 표시

---

# 7. 비디오 업로드 하기

![mongo](mongo.png)

1. 비디오 Collection을 만든다.

- write
- title
- description
- privacy
- filePath
- category
- views
- duration
- thumbnail

2. onSubmit Function을 만든다.
3. 요철할 데이터들을 서버로 보낸다.
4. 보낸 데이터들을 MongoDB에 저장한다.

---

# 8. 랜딩 페이지에 비디오들 나타나게 하기

1. 빈 랜딩 페이지 생성
2. 비디오 카드 Template 만들기
3. 몽고 DB에서 모든 비디오 데이터 가져오기
4. 가져온 비디오 데이터들을 스크린에 출력하기

- Use map() methods

---

# 9. 비디어 디테일 페이지 만들기

1. 비어있는 비디오 디테일 페이지 생성
2. 비디오 디테일 페이지를 위한 Route 만들기
3. 비디오 디테일 페이지 Template 만들기
4. MongoDB에서 비디오 데이터 가져오기
5. 가져온 데이터들을 스크린에 출력한다.

---

# 10. 디테일 비디오 페이지에 Side 비디오 생성

1. Side Video 부분 Layout template 만들기
2. 한 개의 카드 template 만들기
3. DB에서 모든 비디오 데이터를 불러오기'
4. 불러온 데이터 화면에 출력하기

---

# 11. 구독 기능 1

1. Subscriber Model 만들기

- userTo
- userFrom

2. Subscriber Button UI 만들기
3. 데이터베이스에서 얼마나 많은 사람이 비디오 업로드한 유저를 구독하는지 정보 가져오기
4. 내가 이 비디오 업로드한 유저를 구독하는지 정보 가져오기
5. 가져온 정보들 화면에 출력

---

# 12. 구독 기능 2

1. 구독하기 기능 만들기 ( 0 Subscribe)
2. 구독 취소하기 기능 만들기 ( 1 Subscribe )
3. 아직 구독중이 아니라면 -> SUBSCRIBE!
4. 이미 구독중이라면 -> UNSUBSCRIBE!

---

# 13. Subscription Page

1. 빈 Subscription 페이지 생성
2. Subscription Page를 위한 Route 만들기
3. Template 만들기
4. 내가 구독한 유저의 비디오들만 서버에서 가져오기
5. 가져온 비디오 데이터들을 화면에 출력하기
