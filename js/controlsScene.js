/* global Phaser */

// Created by: Curtis Edwards & Titus Diceman
// Created on: June 2022
// This is the Phaser3 configuration file

/**
 * This class is the ControlsScene Scene.
 */
class ControlsScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "controlsScene" })

    this.controlsSceneBackgroundImage = null
    this.okButton = null
    this.controls = null
    this.controlsSceneText = null
    this.controlsSceneTextStyle = {
      font: "60px Times",
      fill: "#ffffff",
      align: "center",
    }

    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     *   before preload() and create().
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
     */
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Controls Scene")
    this.load.image("controlsSceneBackground", "./assets/game_backdrop.png")
    this.load.image("okbutton", "./assets/ok_button.png")
    this.load.image("controls", "./assets/controls.gif")
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.controlsSceneBackgroundImage = this.add.sprite(
      0, 
      0, 
      "controlsSceneBackground"
      )
    this.controlsSceneBackgroundImage.x = 1080 / 2
    this.controlsSceneBackgroundImage.y = 1080 / 2

    this.okButton = this.add.sprite(1080 / 2, 1620 / 2 + 100, "okbutton")
    this.okButton.setInteractive({ useHandCursor: true })
    this.okButton.on("pointerdown", () => this.clickButton())

    this.controls = this.add
      .sprite(1080 / 2, 440 / 2 + 100, "controls")
      .setScale(1.5)

    this.controlsSceneText = this.add.text(
      1080 / 2,
      1280 / 2,
      "Use arrow keys or WASD to move",
      this.controlsSceneTextStyle
    )
    clickButton()
    {
      this.scene.start("menuScene")
    }
  }
}

export default ControlsScene
