/* global Phaser */

// Created by: Curtis Edwards & Titus Diceman
// Created on: June 2022
// This is the Phaser3 configuration file
/**
 * This class is the Splash Scene.
 */
class ControlsScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "controlsScene" })

    this.controlsSceneBackgroundImage = null
    this.okButton = null
    this.okButtonHover = null
    this.controls = null
    this.controlsSceneText = null
    this.controlsSceneTextStyle = {
      font: "60px Times",
      fill: "#8b8b8b",
      align: "center",
    }
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
    this.load.image("okbuttonhover", "./assets/normal_ok_button_hover.png")
    this.load.image("controls", "./assets/controls1.png")
    // sounds
    this.load.audio("menuMusic", "./assets/menuMusic.wav")
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
    this.okButton.on("pointerover", function () {
      this.setTint(0xccffce)
    })
    this.okButton.on("pointerout", function () {
      this.clearTint()
    })
    this.okButton.on("pointerdown", () => this.clickButton())
    this.sound.play("menuMusic")

    this.controls = this.add
      .sprite(1080 / 2, 440 / 2 + 100, "controls")
      .setScale(0.75)

    this.controlsSceneText = this.add
      .text(
        1080 / 2,
        1280 / 2,
        "Use arrow keys or WASD to move",
        this.controlsSceneTextStyle
      )
      .setOrigin(0.5)
  }
  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  clickButton() {
    this.scene.start("menuScene")
  }
}

export default ControlsScene
