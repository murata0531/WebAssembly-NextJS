# WebAssembly-NextJS

Next.jsでWebAssemblyを構築

# 環境

Docker

TypeScript

Next

jest

ESLint

Prettier

Storybook

styled-components

# 使用

インストールしたいものがある場合(Dockerfileに書いても良い)

```
$ docker-compose run --rm nextjs yarn add <追加したいライブラリなど>
```

# 構築

yarn更新
```
$ docker-compose run --rm nextjs yarn add yarn
```

コンテナ立ち上げ

```
$ docker-compose up
```

立ち上がったら 
    
NextJS -> `http://localhost:3000` にアクセス
    
Storybook -> `http://localhost:6006` にアクセス