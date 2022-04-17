# 🥊 딱밤 머신 ( chestnutMachine )

아두이노, 웹앱, 파이어베이스를 이용한 딱밤머신 만들기<br/>
(Arduiono Wemos D1 R1 + React + Firebase realtimeDatabase)



# ❓ 기획 배경

캡스톤 디자인으로 시작하게 됐습니다.<br/>
아두이노와 웹을 연동해보고 싶어서 재밌을 것 같은 프로젝트를 찾다가 마트에서 파는 딱밤머신을 보게되었고<br/>
랭킹기능을 제공하면 재밌겠다고 생각해서 기획하게 되었습니다.


![image](https://user-images.githubusercontent.com/53414542/159893511-62be50c0-1a69-4eea-bb1e-fee4f87fe42d.png)


# 📃 요구사항 명세

- Hardware
  - 기존 장난감의 기능을 제공하면서 웹앱과 연동해서 플레이 할 수 있게 제조한다.
     - 딱밤으로 머신을 때리면 뒤에있는 센서에 부딪혀서 점수를 측정한다.
     - 최고기록은 4digit-segment로 제공한다. (기존 3자리에서 4자리로 변경)
     - 시작버튼은 없앤다. ( 웹앱에서만 시작이 가능함. => 식별을 위해서 )
     - 시작버튼을 웹앱에서 눌렀을때 머신이 올라와서 때릴수 있는 상태로 된다.
- Software
  - Home page
    - 구글로그인 버튼 및 랭킹버튼을 보여준다.
    - 로그인된 상태면 유저이름과 유저가 플레이한 게임횟수, 최고기록, 시작버튼, 로그아웃 버튼을 보여준다.
  - Ranking page 
    - 랭킹을 제공한다. 1~30등정도까지 볼수 있다.
    - 자신의 랭킹은 볼 수 있게 한다.
  - Play page
    - 시작버튼을 눌렀을땐 플레이하고 있는 유저가 있으면 alert를 통해 알려주고 동작이 안되게한다.
    - 시작버튼을 눌렀을때 플레이하고 있는 유저가 없으면 hardware쪽에서 머신이 올라와서 칠수 있는 상태가 된다.
    - 시작버튼을 눌렀을때 플레이하고 있는 유저가 없으면 머신을 때려주세요를 띄우고 센서에 점수가 측정될때까지 기다린다.
    - 점수가 측정되면 점수를 보여주고 일정시간뒤에 랭킹페이지로 이동한다.
 

# 🎨디자인 작업
https://www.figma.com/file/HbsvGWSwO512AxkmoUUTxk/%EB%94%B1%EB%B0%A4%EB%A8%B8%EC%8B%A0?node-id=0%3A1


# 👩‍👧‍👧조원
**부경대학교 디스플레이 반도체공학과 2022-1 캡스톤 2조**
- 김대환
- 안동환
- 성미진
- 염소연
- 한태희
- 임준오
- 박지호

# 👑 결과물 웹 URL: https://daehwan2.github.io/chestnutMachine/
(현재 멀티 버젼으로 배포되어 있다. 추후에 브랜치를 새로파서 리드미 작성예정.)
> 팀원과의 공유 및 결과를 공유하고 이용하기 위해 미리 웹을 먼저 작업했다.

|home(비로그인시)|home(로그인시)|play|ranking|
|------|---|---|---|
|![image](https://user-images.githubusercontent.com/53414542/160878649-5df5ba8c-8d82-4297-9813-f21eb105d84b.png)|![image](https://user-images.githubusercontent.com/53414542/160878778-ca2f37b0-1fb6-4492-bf46-be8e90936230.png)|![image](https://user-images.githubusercontent.com/53414542/160880086-86a95b8b-75eb-400d-84ef-1377c1694351.png)|![image](https://user-images.githubusercontent.com/53414542/160879181-13e82272-d717-4356-82dd-9ccc8e1a726b.png)|


# 데이터베이스 구조

> realtime database를 이용해 아두이노와의 통신을 한다
- 게임하기를 누르면 `isPlaying`을 `true` 로 세팅하고 `playingUser`에 로그인된 유저 정보를 넣는다.
- /play 페이지에서 `isPlaying`이 `true`고 유저가 있으면 `score` 값을 받아와서 0이상 값이 입력되면 `scores`배열에 추가한다.
- (이때 `score` 값에는 아두이노에서 센서값이 입력된다.)
- `scores` 배열에 값이 추가되면 `isCompleted`를 `true`로 세팅한다.

### 게임을 하고있지않을때의 db (/play 페이지에 로그인한 유저가없을때) 
```json
{
  "isCompleted": false,
  "isPlaying": false,
  "score": 0,
  "scores": {
    "-MzPc2C2mO1AWS1B0ZMF": {
      "createdAt": 1648640409229,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 765,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-MzPeD_z8Tuwcu0203aX": {
      "createdAt": 1648640978086,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 807,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-MzPeGlmGhIMicBMBJgo": {
      "createdAt": 1648640991129,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 737,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    }
  }
}

```

### 게임을 하고있을때의 db (/play 페이지에 로그인한 유저가 있을 경우 )

```json
{
  "isCompleted": false,
  "isPlaying": true,
  "playingUser": {
    "email": "yournight0482@gmail.com",
    "name": "김대환",
    "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxbEhdq_D6aZbEbMoXP74LGmoNWmdqz1fjPf1RY=s96-c",
    "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
  },
  "score": 0,
  "scores": {
    "-MzPc2C2mO1AWS1B0ZMF": {
      "createdAt": 1648640409229,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 765,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-MzPeD_z8Tuwcu0203aX": {
      "createdAt": 1648640978086,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 807,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-MzPeGlmGhIMicBMBJgo": {
      "createdAt": 1648640991129,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 737,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    }
  }
}
```

### 게임중인 유저가 있을때 딱밤머신을 쳤을 경우의 db

```json
{
  "isCompleted": true,
  "isPlaying": true,
  "playingUser": {
    "email": "yournight0482@gmail.com",
    "name": "김대환",
    "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxbEhdq_D6aZbEbMoXP74LGmoNWmdqz1fjPf1RY=s96-c",
    "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
  },
  "score": 550,
  "scores": {
    "-MzPc2C2mO1AWS1B0ZMF": {
      "createdAt": 1648640409229,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 765,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-MzPeD_z8Tuwcu0203aX": {
      "createdAt": 1648640978086,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 807,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-MzPeGlmGhIMicBMBJgo": {
      "createdAt": 1648640991129,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 737,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-MzQWspIkv61pfB7Wzwq": {
      "createdAt": 1648655569038,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 550,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    }
  }
}

```
