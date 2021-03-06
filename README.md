# together saving FE

- [프로젝트 설명](#프로젝트-설명)
- [주요 서비스 미리보기](#주요-서비스-미리보기)
- [기술 스택](#기술-스택)
- [팀원 소개](#팀원-소개)
- [FE 컨벤션](#FE-컨벤션)
- [실행 방법](#실행-방법)

## 프로젝트 설명

### 🔗 배포 주소

http://dongsu.s3-website.ap-northeast-2.amazonaws.com

저축과 재테크를 시작하고, 저축의 긍정적인 경험을 쌓아갈 수 있도록 도와주는 **웰스테크 플랫폼**인 세이블 앱 내에서 저축 경험과
목표 달성률을 높일 수 있는 락인 포인트를 개발했습니다. **저축 챌린지**라는 재미 요소를 더해 다양한 사용자들과 경쟁하며
자연스럽게 저축 습관을 기를 수 있습니다.

## 주요 서비스 미리보기

<details>
  <summary>메인 페이지</summary>
  <img src="https://user-images.githubusercontent.com/56878724/154066742-51e318ac-f161-41a8-b9e4-0db47557bd69.gif" width="300px" height="600px"/>
</details>
<details>
  <summary>챌린지 더보기</summary>
  <img src="https://user-images.githubusercontent.com/56878724/154068250-565e7576-94e7-4460-b909-c12a2694b243.gif" width="300px" height="600px"/>
</details>
<details>
  <summary>챌린지 상세 보기</summary>
  <img src="https://user-images.githubusercontent.com/87749134/154067439-9ae6cd68-5dea-4825-b601-65b1b00706cf.gif" width="300" height="600" />
</details>
<details>
  <summary>챌린지 결제하기</summary>
  <img src="https://user-images.githubusercontent.com/87749134/154067429-f4ea2782-9463-47a2-b50e-20750eb74187.gif" width="300" height="600" />
</details>
<details>
  <summary>내 저축 현황 보기</summary>
  <img src="https://user-images.githubusercontent.com/56878724/154067889-67a72e7b-7415-46ca-b1ed-d0bef953d2d1.gif" width="300px" height="600px"/>
</details>
<details>
  <summary>저축하기</summary>
  <img src="https://user-images.githubusercontent.com/56878724/154068080-d5c45f30-c48a-49c5-83d1-6f7e379c6fe4.gif" width="300px" height="600px"/>
</details>
<details>
  <summary>사람들과 소통하기</summary>
  <img src="https://user-images.githubusercontent.com/56878724/154065767-ecfda021-29d6-4801-b541-682a8a628f92.gif" width="600px" height="600px"/>
</details>

## 기술 스택

<div id="a">
  <img src="https://img.shields.io/badge/front-react%20and%20hooks-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/front-styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=DB7093">
  <img src="https://img.shields.io/badge/front-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=764ABC">
  <img src="https://img.shields.io/badge/front-Redux--thunk-764ABC?style=for-the-badge&logo=redux&logoColor=764ABC">
  <img src="https://img.shields.io/badge/front-axios-945DD6?style=for-the-badge&logo=axios&logoColor=945DD6">
  <img src="https://img.shields.io/badge/front-webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=8DD6F9">
  <img src="https://img.shields.io/badge/front-babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=F9DC3E">
  <img src="https://img.shields.io/badge/deploy-amazon%20aws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=#232F3E">
</div>

## 팀원 소개

| [김보미](https://github.com/bxxmi)         | 🎨 Front-end     |
| ------------------------------------------ | ---------------- |
| **[이동수](https://github.com/sonicce99)** | **🎨 Front-end** |

## FE 컨벤션

FE 팀 내에서 정한 규칙입니다.

### 💻 Git

- 작업 시작하기 전에 issue 카드를 생성
- Commit message Template 에 맞춰 작성한다
- Issue Template 에 맞춰 작성한다
- PR Template 에 맞춰 작성한다.
- git-flow 를 사용하여 branch 명을 명확히 한다

### 💅🏻 Code style : react/recommended

- 익명 함수는 화살표 함수로 생성한다
- setState를 움직이는 함수 이름은 handle\_\_ 로 짓는다

<details>
<summary>ISSUE Template</summary>
  <img width="900" alt="스크린샷 2022-02-15 오후 9 27 05" src="https://user-images.githubusercontent.com/87749134/154062487-c8618580-daa0-407f-a37d-013e09e53644.png">
</details>

<details>
<summary>PR Template</summary>
  <img width="800" alt="스크린샷 2022-02-15 오후 9 28 35" src="https://user-images.githubusercontent.com/87749134/154062493-6510c89f-caed-4cd6-80d0-a32d9a346928.png">
</details>

<details>
<summary>Error Handling</summary>
<img width="800" alt="스크린샷 2022-02-15 오후 10 19 18" src="https://user-images.githubusercontent.com/87749134/154070019-49a2ceba-99dc-4b10-9630-0784d89166b5.png">
</details>

## 실행 방법

클론 후 로컬 환경에서 실행할 때 아래 명령어를 입력하시면 됩니다.

- 패키지 설치

```
$ npm i
```

- 프로젝트 실행

```
$ npm run dev
```
