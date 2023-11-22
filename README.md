## 나만의 애니메이션 관련 유튜브 만들기
유튜브 API를 이용해서 애니메이션 관련 사이트를 만들겠습니다.<br />
평소에 애니메이션을 좋아하고 즐겨보기 때문에 애니메이션과 관련된 사이트를 만들었습니다. <br />

# 미리보기

# 설치
설치 프로그램 `npm install react-router-dom axios react-icons react-player sass react-helmet-async swiper`
<br />

# 페이지별 기능 설명
## Home

- search 기능
- 댓글 불러온 기능
- 비디오 출력
- 선호하는 유튜브 채널들을 목록으로 만들기
- 메인에 유튜버들 출력하여 클릭하면 해당 유튜버 채널로 이동



# 사용한 프로그램 소개
### postman
Postman은 API 개발 및 테스트를 위한 협업 도구로, 주로 웹 API를 테스트하고 문서화하는 데 사용됩니다. Postman을 사용하면 API 요청을 만들고 테스트하며, 응답을 확인하고 문서를 작성할 수 있습니다.

1. API 요청 생성 및 테스트: 사용자가 HTTP 요청을 생성하고 수정할 수 있습니다. GET, POST, PUT, DELETE 등의 다양한 HTTP 메소드를 지원합니다. 요청 헤더, 본문, 매개변수 등을 쉽게 추가 및 수정할 수 있습니다.
2. 콜렉션과 환경: Postman에서는 여러 요청을 그룹화하여 '콜렉션'에 저장할 수 있습니다. 환경 변수를 설정하여 여러 환경에서 동일한 요청을 테스트할 수 있습니다.
3. 테스트 스크립트: 응답을 검증하고 테스트하기 위한 JavaScript 기반의 테스트 스크립트를 작성할 수 있습니다. 예를 들어, 특정 값이 응답에 있는지 확인하거나, 상태 코드를 검증할 수 있습니다.
4. 협업 및 공유: Postman은 팀 프로젝트를 지원하며, API 작업을 공동으로 수행할 수 있습니다. 작업 환경 및 API 컬렉션을 공유하고, 팀원과 협업할 수 있습니다.
5. 문서화: API 요청 및 응답 예제를 포함한 문서를 생성할 수 있습니다.문서는 Postman에서 제공되는 레거시 기능뿐만 아니라, Postman API로 생성된 동적 문서로도 만들 수 있습니다.
6. 테스트 환경 설정: Postman은 여러 환경에서 테스트를 할 수 있도록 환경 변수를 지원합니다. 예를 들어, 개발 환경, 테스트 환경, 프로덕션 환경 등 각기 다른 환경에 대한 설정을 저장하고 전환할 수 있습니다.

### API
API(응용 프로그래밍 인터페이스)는 서로 다른 소프트웨어 애플리케이션 간에 상호 작용할 수 있도록 하는 인터페이스입니다. 이는 데이터, 서비스 또는 기능을 요청하고 응답하는 데 사용됩니다. API는 다양한 유형과 프로토콜을 가지고 있으며, 주로 웹에서 데이터를 주고받는 데 사용됩니다.

<br />

### swiper를 이용한 슬라이드 
swiper을 사용하여 메인화면의 유튜버들의 정보를 슬라이드 형태로 보여주었습니다.<br />
1. swiper 설정: swiper 컴포넌트를 사용하여 초기화하고 슬라이드의 개수, 간격, 자동 재생을 설정하였으며 modules 속성을 사용하여 Autoplay와 Navigation 모듈을 추가하였습니다.

2. SwiperSlide 생성: animationText 배열에 있는 각 유튜버 정보를 매핑하여 SwiperSlide를 생성하였고, Link를 사용하여 각 유튜버의 채널로 이동할 수 있는 링크를 설정하였습니다.

### .env
.env 파일은 환경 변수를 설정하는 데 사용되는 파일입니다. 이 파일을 사용하면 프로젝트에서 중요한 정보를 관리하고 외부에 노출하지 않고 저장할 수 있습니다. 주로 API 키, 비밀번호, 서버 주소와 같은 민감한 정보를 보호하기 위해 사용됩니다.

1. 환경 변수 설정: youtube API key 와 Rapid API key의 값을 변수로 설정하였습니다.

### RapidAPI
RapidAPI는 다양한 API를 탐색하고 이를 쉽게 사용할 수 있게 하는 플랫폼입니다. RapidAPI를 통해 다양한 분야에서 API를 찾아볼 수 있으며, 이 API들은 웹 개발, 데이터 과학, 머신 러닝, 클라우드 서비스, 금융 등 다양한 용도로 사용될 수 있습니다.

### youtube API
YouTube API는 YouTube의 데이터 및 기능에 프로그래밍적으로 접근할 수 있게 하는 API입니다. YouTube API를 사용하면 YouTube 동영상, 채널, 댓글 등과 관련된 정보를 읽고 쓸 수 있습니다. YouTube API는 개발자들이 사용자 지정 애플리케이션을 만들고 YouTube 플랫폼과 상호 작용할 수 있도록 하는 강력한 도구입니다.

1. YouTube Data API: YouTube 동영상, 채널, 댓글 등과 관련된 데이터에 접근할 수 있습니다. 동영상 검색, 특정 채널의 동영상 목록 가져오기 등이 가능합니다.
2. YouTube Analytics API: YouTube 채널 및 동영상의 통계 데이터에 접근할 수 있습니다. 조회수, 좋아요 수, 신규 구독자 수 등을 확인할 수 있습니다.
3. YouTube Live Streaming API: YouTube 실시간 스트리밍 서비스와 상호 작용할 수 있습니다. 실시간 스트리밍의 시작 및 종료, 댓글 관리 등이 가능합니다.
4. YouTube Player API: 웹 페이지에 YouTube 동영상을 삽입하고 커스터마이징할 수 있는 API입니다. 특정 동영상을 재생, 일시 중지, 볼륨 조절 등이 가능합니다.
5. YouTube Reporting API: YouTube 데이터를 보고서로 다운로드할 수 있는 API입니다. 수익 보고서, 광고 성능 보고서 등을 얻을 수 있습니다.

### 더보기 기능
더 보기 버튼을 통하여 추가로 검색 결과를 불러오는 기능입니다. nextPageToken을 사용하여 페이지를 변경하고, 가져온 데이터를 이전에 있는 비디오 목록에 추가하였습니다.

1. 상태 설정: const [videos, setVideos] = useState([]); : videos라는 상태 변수를 만들어 빈 배열로 초기화합니다. 이 배열은 유튜브에서 받아온 비디오 정보를 담습니다.
const [nextpageToken, setNextPageToken] = useState(null); : nextpageToken이라는 상태 변수를 만들어 초기값을 null로 설정합니다. 이 변수는 다음 페이지의 토큰을 저장합니다.

2. API 요청 함수: fetchVideos 함수 : 유튜브 API에 검색어와 페이지 토큰을 전달하여 비디오 데이터를 가져오는 함수입니다. 가져온 데이터는 setVideos로 이전 데이터에 추가됩니다.

3. 페이지 변경 함수: handleLoadMore 함수 : "더 보기" 버튼을 클릭했을 때 호출되는 함수입니다. 현재 페이지 토큰이 있다면 fetchVideos 함수를 호출하여 다음 페이지의 비디오를 가져옵니다.

4. 렌더링: VideoSearch 컴포넌트 : 현재까지 가져온 비디오 데이터를 화면에 보여주는 역할을 하는 컴포넌트입니다.

5. "더 보기" 버튼 : 클릭하면 handleLoadMore 함수를 호출하여 다음 페이지의 비디오를 가져오도록 설정된 버튼입니다.

6. 컴포넌트 반환: return 문 : 페이지에는 검색 결과를 보여주는 VideoSearch 컴포넌트와 "더 보기" 버튼이 있는 부분이 렌더링됩니다.

### Suspense
리액트의 Suspense는 리액트에서 비동기적으로 로드되는 컴포넌트나 데이터에 대한 대기 상태를 관리하고 사용자 경험을 향상시키기 위한 기능입니다. 주로 코드 스플리팅(Code Splitting)과 함께 사용되며, 앱의 초기 로딩 시간을 최적화하고 필요한 자원을 효율적으로 관리하는 데 도움이 됩니다.