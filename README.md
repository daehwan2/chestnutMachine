# π₯ λ±λ°€ λ¨Έμ  ( chestnutMachine ) Multi version

μλμ΄λΈ, μΉμ±, νμ΄μ΄λ² μ΄μ€λ₯Ό μ΄μ©ν λ±λ°€λ¨Έμ  λ§λ€κΈ°<br/>
(Arduiono Wemos D1 R1 + React + Firebase realtimeDatabase)

solo version([soloλΈλμΉ](https://github.com/daehwan2/chestnutMachine/tree/solo))μ λ¨Όμ  μμνκ³  μΆκ°λ‘
λ©ν°νλ μ΄ κΈ°λ₯μ λ£μμ΅λλ€.

<img src="./document-image/test.gif" width="250" height="auto"/>


# π μκ΅¬μ¬ν­ λͺμΈ (Multi version)

- κ²μμ μ΅λ μΈμμλ 4λͺμ΄λ€.
- μ²«λ²μ§Έλ‘ λ°©μ λ§λλ μ¬λμ΄ λ°©μ₯μ΄ λλ©° κ²μ μμνκΈ°λ₯Ό λλ₯Ό μ μλ€.
- ν νλ©΄μμ λ°© μμ±μ¬λΆλ₯Ό μ μ μλ€.
- κ²μμ μμνλ©΄ λ°©μλ€μ΄μ¨ μ μ  μμλλ‘ λ±λ°€λ¨Έμ μ μ³μ μ μλ₯Ό μΈ‘μ νλ€.

# π¨λμμΈ μμ (Multi version μΆκ°)

https://www.figma.com/file/HbsvGWSwO512AxkmoUUTxk/%EB%94%B1%EB%B0%A4%EB%A8%B8%EC%8B%A0?node-id=0%3A1

# μ€ν¬λ¦°μ·

| ν                                                                                                              | κ²μ νμ΄μ§                                                                                                     | μ μ κ° λ€μ΄μμ κ²½μ°                                                                                            | κ²μμμ                                                                                                        | κ²μ λ                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/53414542/165442822-8fe198d4-0403-453c-bc6a-d889350c171d.png) | ![image](https://user-images.githubusercontent.com/53414542/165443011-63f032f1-c16e-4a42-b870-8c24c250a5cb.png) | ![image](https://user-images.githubusercontent.com/53414542/165443462-f92bac79-9917-440e-8cd1-33274c7f5ec7.png) | ![image](https://user-images.githubusercontent.com/53414542/165443515-aff69ef0-7c37-4f2b-ac23-da2b5fd59376.png) | ![image](https://user-images.githubusercontent.com/53414542/165443684-8d988c6e-0a05-4fc6-8c61-6c8ec64e6153.png) |

# π κ²°κ³Όλ¬Ό μΉ URL: https://daehwan2.github.io/chestnutMachine/ ( Multi version )

# λ°μ΄ν°λ² μ΄μ€ κ΅¬μ‘°

### μ μ  3λͺμ΄ λκΈ°μ€μΌ λ

```json
{
  "isCompleted": false,
  "isPlaying": false,
  "playingUsers": {
    "-N0dPOBFva3ysyC-OK6N": {
      "email": "yournight0482@gmail.com",
      "name": "κΉλν",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxbEhdq_D6aZbEbMoXP74LGmoNWmdqz1fjPf1RY=s96-c",
      "score": 0,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-N0dPPFvQyH_kc-TCEoO": {
      "email": "olivly1004@pukyong.ac.kr",
      "name": "μ±λ―Έμ§",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJycJM9YFAz2JWKAUtUFFT55aNGdB5S2lLyMVsM=s96-c",
      "score": 0,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
    "-N0dPoTtrXfst8EwJEFk": {
      "email": "thzns99@gmail.com",
      "name": "μμ°",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxQirk8LWPzOZ2Z0qmvSp30PiX1WPtbFhsJnTcB=s96-c",
      "score": 0,
      "uid": "k0SjuXH2Q6OX7xCK5AG5w1n2lPA3"
    }
  },
  "score": 0,
  "turn": 0
}
```

### κ²μμμ λλ μ κ²½μ° ( turn = 1 μΈ κ²½μ° μ²«λ²μ§Έ μ μ μ μ μ )

```json
{
  "isCompleted": false,
  "isPlaying": true,
  "playingUsers": {
    "-N0dPOBFva3ysyC-OK6N": {
      "email": "yournight0482@gmail.com",
      "name": "κΉλν",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxbEhdq_D6aZbEbMoXP74LGmoNWmdqz1fjPf1RY=s96-c",
      "score": 0,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-N0dPPFvQyH_kc-TCEoO": {
      "email": "olivly1004@pukyong.ac.kr",
      "name": "μ±λ―Έμ§",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJycJM9YFAz2JWKAUtUFFT55aNGdB5S2lLyMVsM=s96-c",
      "score": 0,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
    "-N0dPoTtrXfst8EwJEFk": {
      "email": "thzns99@gmail.com",
      "name": "μμ°",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxQirk8LWPzOZ2Z0qmvSp30PiX1WPtbFhsJnTcB=s96-c",
      "score": 0,
      "uid": "k0SjuXH2Q6OX7xCK5AG5w1n2lPA3"
    }
  },
  "score": 0,
  "turn": 1
}
```

### turn = 3 μΈκ²½μ° μΈλ²μ§Έ μ μ μ μ μ μΈ‘μ μ κΈ°λ€λ¦¬λ μν

```json
{
  "isCompleted": false,
  "isPlaying": true,
  "playingUsers": [
    {
      "email": "yournight0482@gmail.com",
      "name": "κΉλν",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxbEhdq_D6aZbEbMoXP74LGmoNWmdqz1fjPf1RY=s96-c",
      "score": 999,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    {
      "email": "olivly1004@pukyong.ac.kr",
      "name": "μ±λ―Έμ§",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJycJM9YFAz2JWKAUtUFFT55aNGdB5S2lLyMVsM=s96-c",
      "score": 444,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
    {
      "email": "thzns99@gmail.com",
      "name": "μμ°",
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
      "name": "κΉλν",
      "score": 999,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-N0dQ-MweV4CYEWmqm3I": {
      "createdAt": 1651036130460,
      "email": "olivly1004@pukyong.ac.kr",
      "name": "μ±λ―Έμ§",
      "score": 444,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
  "turn": 3
}
```

### κ²μμ μλ£ν κ²½μ°(μ λΆ λ±λ°€λ¨Έμ μ μΉ κ²½μ°)

```json
{
  "isCompleted": true,
  "isPlaying": true,
  "playingUsers": [
    {
      "email": "yournight0482@gmail.com",
      "name": "κΉλν",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJxbEhdq_D6aZbEbMoXP74LGmoNWmdqz1fjPf1RY=s96-c",
      "score": 999,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    {
      "email": "olivly1004@pukyong.ac.kr",
      "name": "μ±λ―Έμ§",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJycJM9YFAz2JWKAUtUFFT55aNGdB5S2lLyMVsM=s96-c",
      "score": 444,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
    {
      "email": "thzns99@gmail.com",
      "name": "μμ°",
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
      "name": "κΉλν",
      "score": 999,
      "uid": "Kvh7M2sodHRLYTzLeMQdY1W9PFu1"
    },
    "-N0dQ-MweV4CYEWmqm3I": {
      "createdAt": 1651036130460,
      "email": "olivly1004@pukyong.ac.kr",
      "name": "μ±λ―Έμ§",
      "score": 444,
      "uid": "HiK1Wz3qrcYejPj1moaTDGDM4w12"
    },
    "-N0dQ2Gm5B-m2dFx2KcL": {
      "createdAt": 1651036142354,
      "email": "thzns99@gmail.com",
      "name": "μμ°",
      "score": 688,
      "uid": "k0SjuXH2Q6OX7xCK5AG5w1n2lPA3"
    }
  },
  "turn": 0
}
```
