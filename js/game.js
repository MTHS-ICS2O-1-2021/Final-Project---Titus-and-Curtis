/* global Phaser */

// Created by: Curtis Edwards & Titus Diceman
// Created on: June 2022
// This is the Phaser3 configuration file

import ControlsScene from "./controlsScene.js"
import MenuScene from "./menuScene.js"
import GameSceneNormal from "./gameSceneNormal.js"
import GameSceneHard from "./gameSceneHard.js"
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"

// Our game scenes
const controlsScene = new ControlsScene()
const menuScene = new MenuScene()
const gameSceneNormal = new GameSceneNormal()
const gameSceneHard = new GameSceneHard()
const splashScene = new SplashScene()
const titleScene = new TitleScene()

/** Game scene.*/
const config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log(game)

// load scenes
// Note: remember any 'key' is global and CAN NOT be reused!
game.scene.add("controlsScene", controlsScene)
game.scene.add("menuScene", menuScene)
game.scene.add("gameSceneNormal", gameSceneNormal)
game.scene.add("gameSceneHard", gameSceneHard)
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)

// the start scene
game.scene.start("titleScene")
