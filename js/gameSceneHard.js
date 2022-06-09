/* global Phaser */

// Created by: Curtis Edwards & Titus Diceman
// Created on: June 2022
// This is the Phaser3 configuration file
/**
 * This class is the Splash Scene.
 */
class GameSceneHard extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "gameSceneHard" });

    this.gameSceneHardBackgroundImage = null;
    this.monkeyHard = null;
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Game Scene Hard");
    this.load.image(
      "gameSceneHardBackground",
      "./assets/hard_game_backdrop.png"
    );
    this.load.image("monkey", "./assets/monkey.gif");
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.gameSceneHardBackgroundImage = this.add.sprite(
      0,
      0,
      "gameSceneHardBackground"
    );
    this.gameSceneHardBackgroundImage.x = 1080 / 2;
    this.gameSceneHardBackgroundImage.y = 1080 / 2;

    this.monkeyHard = this.physics.add
      .sprite(1080 / 2, 1080 / 2, "monkey")
      .setScale(0.35);
  }

  update(time, delta) {
    //called 60 times a second.

    const keyForwardObj = this.input.keyboard.addKey("W");
    const keyLeftObj = this.input.keyboard.addKey("A");
    const keyBackwardObj = this.input.keyboard.addKey("S");
    const keyRightObj = this.input.keyboard.addKey("D");
    const keyForwardObjAlt = this.input.keyboard.addKey("UP");
    const keyLeftObjAlt = this.input.keyboard.addKey("LEFT");
    const keyBackwardObjAlt = this.input.keyboard.addKey("DOWN");
    const keyRightObjAlt = this.input.keyboard.addKey("RIGHT");

    if (keyForwardObj.isDown || keyForwardObjAlt.isDown) {
      this.monkeyHard.y -= 10;
      if (this.monkeyHard.y < 100) {
        this.monkeyHard.y += 10;
      }
      if (
        this.monkeyHard.x < 250 ||
        this.monkeyHard.x > 820 ||
        (this.monkeyHard.x > 290 && this.monkeyHard.x < 530) ||
        (this.monkeyHard.x < 780 && this.monkeyHard.x > 550)
      ) {
        this.monkeyHard.y += 10;
      }
    }

    if (keyLeftObj.isDown || keyLeftObjAlt.isDown) {
      this.monkeyHard.x -= 10;
      if (this.monkeyHard.x < 100) {
        this.monkeyHard.x += 10;
      }
      if (
        this.monkeyHard.y < 250 ||
        this.monkeyHard.y > 820 ||
        (this.monkeyHard.y > 290 && this.monkeyHard.y < 530) ||
        (this.monkeyHard.y < 780 && this.monkeyHard.y > 550)
      ) {
        this.monkeyHard.x += 10;
      }
    }

    if (keyBackwardObj.isDown || keyBackwardObjAlt.isDown) {
      this.monkeyHard.y += 10;
      if (this.monkeyHard.y > 980) {
        this.monkeyHard.y -= 10;
      }
      if (
        this.monkeyHard.x < 250 ||
        this.monkeyHard.x > 820 ||
        (this.monkeyHard.x > 290 && this.monkeyHard.x < 530) ||
        (this.monkeyHard.x < 780 && this.monkeyHard.x > 550)
      ) {
        this.monkeyHard.y -= 10;
      }
    }

    if (keyRightObj.isDown || keyRightObjAlt.isDown) {
      this.monkeyHard.x += 10;
      if (this.monkeyHard.x > 980) {
        this.monkeyHard.x -= 10;
      }
      if (
        this.monkeyHard.y < 250 ||
        this.monkeyHard.y > 820 ||
        (this.monkeyHard.y > 290 && this.monkeyHard.y < 530) ||
        (this.monkeyHard.y < 780 && this.monkeyHard.y > 550)
      ) {
        this.monkeyHard.x -= 10;
      }
    }
  }
}

export default GameSceneHard;
