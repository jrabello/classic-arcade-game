# Classic Arcade Game Project

This project was created for udacity's nanodegree, the purpose is to develop a game using javascript best practices and very fun to play :)

<p align="center">
  <img alt="game screenshot" src="https://github.com/jrabello/classic-arcade-game/raw/master/images/game.png"/>
</p>

## Usage
You can play online going to:
[link](https://jrabello.github.io/classic-arcade-game/)

The player has to reach the water without colliding with any bug along the way, use UP DOWN RIGHT and LEFT key to move the player

## Installation
The project was created using typescript/html/css, to be able to compile it you should first install typescript compiler: 
```shell
$ npm install -g typescript
```

Then enter /ts folder and type:
```shell
$ tsc -t es6 --outDir ../js/dist app.ts
```

Opening html directly from your machine won't work, because app.js is loaded as a javascript module, so you should run a local web server in root folder:
```shell
$ npm install live-server
```

Then go to root folder of project(/) and start the server:
```shell
$ live-server
```
