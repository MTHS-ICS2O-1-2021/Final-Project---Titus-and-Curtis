/* global Phaser */

// Created by: Curtis Edwards
// Created on: May 2022
// This is the Title Scene

/**
 * This class is the Title Scene.
 */
 class TitleScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: 'titleScene' })

    this.titleSceneBackgroundImage = null
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
      this.cameras.main.setBackgroundColor('#ffffff')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/game_backdrop.png')
    this.load.image('titleImage', './assets/game_title.png')
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.titleSceneBackgroundImage = this.add.sprite(
      0,
      0,
      'titleSceneBackground'
    )
    this.titleSceneBackgroundImage.x = 1080 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleImage = this.add.sprite(540, 540, 'titleImage').setScale(1.5)
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   *  @param {number} time - The current time.
   *  @param {number} delta - The delta time in ms since the last frame.
   */

  update(time, delta) {
    if (time > 4000) {
    this.scene.switch('controlsScene')
    }
  }
 }

export default TitleScene
