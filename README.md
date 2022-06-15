# 🥊 딱밤 머신 ( chestnutMachine ) Multi version

아두이노, 웹앱, 파이어베이스를 이용한 딱밤머신 만들기<br/>
(Arduiono Wemos D1 R1 + React + Firebase realtimeDatabase)

solo version([solo브랜치](https://github.com/daehwan2/chestnutMachine/tree/solo))을 먼저 작업했고 추가로
멀티플레이 기능을 넣었습니다.

# 📃 요구사항 명세 (Multi version)

- 게임의 최대 인원수는 4명이다.
- 첫번째로 방을 만드는 사람이 방장이 되며 게임 시작하기를 누를 수 있다.
- 홈 화면에서 방 생성여부를 알 수 있다.
- 게임을 시작하면 방에들어온 유저 순서대로 딱밤머신을 쳐서 점수를 측정한다.

# 🎨디자인 작업 (Multi version 추가)

https://www.figma.com/file/HbsvGWSwO512AxkmoUUTxk/%EB%94%B1%EB%B0%A4%EB%A8%B8%EC%8B%A0?node-id=0%3A1

# 스크린샷

| 홈                                                                                                              | 게임 페이지                                                                                                     | 유저가 들어왔을 경우                                                                                            | 게임시작                                                                                                        | 게임 끝                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/53414542/165442822-8fe198d4-0403-453c-bc6a-d889350c171d.png) | ![image](https://user-images.githubusercontent.com/53414542/165443011-63f032f1-c16e-4a42-b870-8c24c250a5cb.png) | ![image](https://user-images.githubusercontent.com/53414542/165443462-f92bac79-9917-440e-8cd1-33274c7f5ec7.png) | ![image](https://user-images.githubusercontent.com/53414542/165443515-aff69ef0-7c37-4f2b-ac23-da2b5fd59376.png) | ![image](https://user-images.githubusercontent.com/53414542/165443684-8d988c6e-0a05-4fc6-8c61-6c8ec64e6153.png) |

# 👑 결과물 웹 URL: https://daehwan2.github.io/chestnutMachine/ ( Multi version )

# 데이터베이스 구조

### 유저 3명이 대기중일 때

```json
{
  "isCompleted": false,
  "isPlaying": false,
  "playingUsers": {
    "-N0dPOBFva3ysyC-OK6N": {
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxbEhdq_D6aZbEbMoXP74LGmoNWmdqz1fjPf1RY=s96-c",
      "score": 0,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-N0dPPFvQyH_kc-TCEoO": {
      "email": "olivly1004@pukyong.ac.kr",
      "name": "성미진",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJycJM9YFAz2JWKAUtUFFT55aNGdB5S2lLyMVsM=s96-c",
      "score": 0,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
    "-N0dPoTtrXfst8EwJEFk": {
      "email": "thzns99@gmail.com",
      "name": "소연",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxQirk8LWPzOZ2Z0qmvSp30PiX1WPtbFhsJnTcB=s96-c",
      "score": 0,
      "uid": "k0SjuXH2Q6OX7xCK5AG5w1n2lPA3"
    }
  },
  "score": 0,
  "turn": 0
}
```

### 게임시작 눌렀을 경우 ( turn = 1 인 경우 첫번째 유저의 점수 )

```json
{
  "isCompleted": false,
  "isPlaying": true,
  "playingUsers": {
    "-N0dPOBFva3ysyC-OK6N": {
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxbEhdq_D6aZbEbMoXP74LGmoNWmdqz1fjPf1RY=s96-c",
      "score": 0,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-N0dPPFvQyH_kc-TCEoO": {
      "email": "olivly1004@pukyong.ac.kr",
      "name": "성미진",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJycJM9YFAz2JWKAUtUFFT55aNGdB5S2lLyMVsM=s96-c",
      "score": 0,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
    "-N0dPoTtrXfst8EwJEFk": {
      "email": "thzns99@gmail.com",
      "name": "소연",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxQirk8LWPzOZ2Z0qmvSp30PiX1WPtbFhsJnTcB=s96-c",
      "score": 0,
      "uid": "k0SjuXH2Q6OX7xCK5AG5w1n2lPA3"
    }
  },
  "score": 0,
  "turn": 1
}
```

### turn = 3 인경우 세번째 유저의 점수 측정을 기다리는 상태

```json
{
  "isCompleted": false,
  "isPlaying": true,
  "playingUsers": [
    {
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxbEhdq_D6aZbEbMoXP74LGmoNWmdqz1fjPf1RY=s96-c",
      "score": 999,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    {
      "email": "olivly1004@pukyong.ac.kr",
      "name": "성미진",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJycJM9YFAz2JWKAUtUFFT55aNGdB5S2lLyMVsM=s96-c",
      "score": 444,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
    {
      "email": "thzns99@gmail.com",
      "name": "소연",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxQirk8LWPzOZ2Z0qmvSp30PiX1WPtbFhsJnTcB=s96-c",
      "score": 0,
      "uid": "k0SjuXH2Q6OX7xCK5AG5w1n2lPA3"
    }
  ],
  "score": 0,
  "scores": {
    "-N0dPxavUu6XHRcOctmU": {
      "createdAt": 1651036119131,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 999,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-N0dQ-MweV4CYEWmqm3I": {
      "createdAt": 1651036130460,
      "email": "olivly1004@pukyong.ac.kr",
      "name": "성미진",
      "score": 444,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
  "turn": 3
}
```

### 게임을 완료한 경우(전부 딱밤머신을 친 경우)

```json
{
  "isCompleted": true,
  "isPlaying": true,
  "playingUsers": [
    {
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxbEhdq_D6aZbEbMoXP74LGmoNWmdqz1fjPf1RY=s96-c",
      "score": 999,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    {
      "email": "olivly1004@pukyong.ac.kr",
      "name": "성미진",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJycJM9YFAz2JWKAUtUFFT55aNGdB5S2lLyMVsM=s96-c",
      "score": 444,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
    {
      "email": "thzns99@gmail.com",
      "name": "소연",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxQirk8LWPzOZ2Z0qmvSp30PiX1WPtbFhsJnTcB=s96-c",
      "score": 688,
      "uid": "k0SjuXH2Q6OX7xCK5AG5w1n2lPA3"
    }
  ],
  "score": 0,
  "scores": {
    "-N0dPxavUu6XHRcOctmU": {
      "createdAt": 1651036119131,
      "email": "yournight0482@gmail.com",
      "name": "김대환",
      "score": 999,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-N0dQ-MweV4CYEWmqm3I": {
      "createdAt": 1651036130460,
      "email": "olivly1004@pukyong.ac.kr",
      "name": "성미진",
      "score": 444,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
    "-N0dQ2Gm5B-m2dFx2KcL": {
      "createdAt": 1651036142354,
      "email": "thzns99@gmail.com",
      "name": "소연",
      "score": 688,
      "uid": "k0SjuXH2Q6OX7xCK5AG5w1n2lPA3"
    }
  },
  "turn": 0
}
```
