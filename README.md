# Movie Trailer

## 영화 트레일러 open API를 활용하여 영화 목록을 조회하고 사이트 구현하기

### develop date

2023.09.24 ~ 2023.10.02
| 날짜(월/일) | 개발 내용 |
| ----------- | --------------------------------------------------------------------------------------------- |
| 09/24 | 디자인 작업 진행, 폴더 구조 계획 |
| 09/25 | 문서 구조에 맞게 route 설정, header & footer, scrollTop 기능 구현, 공용 CSS 파일 생성 |
| 09/26 | 영화 목록 필더링 (header filterBar)기능 구현, 검색 기능 로직 구현, 디자인 추가 |
| 09/27 | detail page 구현, hoverEffect 컴포넌트화하기, git commit 내역 얽힌 부분 해결 (pull issue) |
| 09/28 | detail page review 보기 만들기, 배너 디자인 |
| 09/29 | 무한 스크롤 구현1, 검색 기능을 통해 원하는 키워드가 포함된 영화 찾기 기능 구현 |
| 09/30 | 무한 스크롤 구현2, 코드 정리(중복된 코드 유무 확인 및 css 정리) |
| 10/01 | skeleton UI, error boundary1, poster 없는 영화 대체 이미지 삽입 |
| 10/02 | error boundary2, 일부 코드 DI(consts 정리), 배포, README.md 정리, 회고 |

### developers

김지원 안주현 오주연 이대경 정수현

### Stacks

Environment
<img src="https://img.shields.io/badge/GitHub-000000?style=flat-square&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white">
<img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white">

Config
<img src="https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white">

Development
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3cript&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white">

Communication
<img src="https://img.shields.io/badge/GitHub-000000?style=flat-square&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/discord-5865F2?style=flat-square&logo=discord&logoColor=white">

### GitHub Convention

| 표기        | 표기 사용 상황                                                                                |
| ----------- | --------------------------------------------------------------------------------------------- |
| 🟢 feat     | 새로운 기능                                                                                   |
| 🔴 Remove   | 파일을 삭제하는 작업만 수행한 경우                                                            |
| 🔥 HOTFIX   | 급하게 치명적인 버그를 고쳐야하는 경우                                                        |
| 🐞 fix      | 버그 수정                                                                                     |
| 📂 docs     | 문서 수정                                                                                     |
| 🔖 Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                            |
| 💬 Comment  | 필요한 주석 추가 및 변경                                                                      |
| 🎁 style    | 레이아웃, 코드 스타일 수정                                                                    |
| 💡 refactor | 기능, 코드 개선                                                                               |
| 🟡 test     | 테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음       |
| 🪣 chore    | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음 |

### folder structure

<p align="center">
    <img src="https://github.com/frontend-2group/MovieTrailer/assets/134191817/66987396-9312-4314-96a3-4266728f9cf9" width="50%">
</p>

### figma link

디테일한 디자인은 아래 피그마 링크에서 확인 가능합니다.
https://www.figma.com/file/pGQXz9HbHI4KCgcIov0fz5/%5B-FrontendGroup2-%5D-MovieTrailer?type=design&node-id=1669%3A162202&mode=design&t=TnpVgFm46yy8Bibl-1

### wire frame

<p align="center">
    <img src="https://github.com/frontend-2group/MovieTrailer/assets/134191817/b5549d84-94e5-407f-9845-c7be58443b4f" width="30%">
    <img src="https://github.com/frontend-2group/MovieTrailer/assets/134191817/e7f58594-17f2-4a28-9fd7-4ec6d1f58220" width="30%">
    <img src="https://github.com/frontend-2group/MovieTrailer/assets/134191817/a7189856-9aac-4a62-8141-c8c09fd61b1c" width="30%">
</p>

### design

<p align="center">왼쪽은 메인 페이지입니다. 왼쪽은 cursor :hover,  :focus 시 변하게 될 css가 적용된 메인 페이지 입니다.</p>
<p align="center">
    <img src="https://github.com/frontend-2group/MovieTrailer/assets/134191817/c0bac63f-c59a-4b8e-835e-693433989f9b" width="40%">
    <img src="https://github.com/frontend-2group/MovieTrailer/assets/134191817/fc24f39f-951b-4f0a-92ed-70970a237c09" width="40%">
</p>
<p align="center">검색 시 보이게 될 화면과 상세보기 버튼 클릭 시 보이게 될 영화의 상세 정보를 그려주는 화면입니다.</p>
<p align="center">
    <img src="https://github.com/frontend-2group/MovieTrailer/assets/134191817/e2fffae6-a776-4142-87fa-8430579d1634" width="40%">
    <img src="https://github.com/frontend-2group/MovieTrailer/assets/134191817/778568d6-ddee-43d3-9827-737aa222846f" width="40%">
</p>

### preview MV

### deploy

배포 주소 :
