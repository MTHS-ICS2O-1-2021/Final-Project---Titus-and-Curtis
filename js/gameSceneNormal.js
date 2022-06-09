/* global Phaser */

// Created by: Curtis Edwards & Titus Diceman
// Created on: June 2022
// This is the Phaser3 configuration file
/**
 * This class is the Splash Scene.
 */
 class GameSceneNormal extends Phaser.Scene {
  
    // create an normalCar
  createNormalCar () {
    consts normalCarXLocation = Math.floor(Math.random() * 1079) + 1 //spawns the normalCar between 1 and 1921 pixel
    let normalCarXVelocity = Math.floor(Math.random() * 50) + 1 // random speed of the normalCar
    normalCarXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anNormalCar = this.physics.add.sprite(normalCarXLocation, -100, "normalCar")
    anNormalCar.body.velocity.y = 200
    this.normalCarGroup.add(anNormalCar)
  }
   
   /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: 'gameSceneNormal' })

    this.gameSceneNormalBackgroundImage = null
    this.monkeyNormal = null

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
    console.log('Game Scene Normal')
    this.load.image('gameSceneNormalBackground', './assets/normal_game_backdrop.png')
    this.load.image('monkey', './assets/monkey.gif')
    this.load.image('normalCar', 'assets/normal_car.png')
    
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.gameSceneNormalBackgroundImage = this.add.sprite(
      0,
      0,
      'gameSceneNormalBackground'
    )
    this.gameSceneNormalBackgroundImage.x = 1080 / 2
    this.gameSceneNormalBackgroundImage.y = 1080 / 2

    this.monkeyNormal = this.physics.add.sprite(1080 / 2, (1080 / 2), 'monkey').setScale(0.35)

   // create a group for the normalCars
    this.normalCarGroup = this.add.group()
    this.createNormalCar()
  
  }
 

  update(time, delta) {
    //called 60 times a second.

    const keyForwardObj = this.input.keyboard.addKey("W")
    const keyLeftObj = this.input.keyboard.addKey("A")
    const keyBackwardObj = this.input.keyboard.addKey("S")
    const keyRightObj = this.input.keyboard.addKey("D")
    const keyForwardObjAlt = this.input.keyboard.addKey('UP')
    const keyLeftObjAlt = this.input.keyboard.addKey('LEFT')
    const keyBackwardObjAlt = this.input.keyboard.addKey('DOWN')
    const keyRightObjAlt = this.input.keyboard.addKey('RIGHT')

    if (keyForwardObj.isDown || keyForwardObjAlt.isDown) {
      this.monkeyNormal.y -= 10
      if (this.monkeyNormal.y < 100) {
        this.monkeyNormal.y = 980
      }
      if (this.monkeyNormal.x < 250 || this.monkeyNormal.x > 820 || (this.monkeyNormal.x > 290 && this.monkeyNormal.x < 530) || (this.monkeyNormal.x < 780 && this.monkeyNormal.x > 550)) {
        this.monkeyNormal.y += 10
      }
    }
    
    if (keyLeftObj.isDown || keyLeftObjAlt.isDown) {
      this.monkeyNormal.x -= 10
      if (this.monkeyNormal.x < 100) {
        this.monkeyNormal.x = 980
      }
      if (this.monkeyNormal.y < 250 || this.monkeyNormal.y > 820 || (this.monkeyNormal.y > 290 && this.monkeyNormal.y < 530) || (this.monkeyNormal.y < 780 && this.monkeyNormal.y > 550)) {
        this.monkeyNormal.x += 10
      }
    }
    
    if (keyBackwardObj.isDown || keyBackwardObjAlt.isDown) {
      this.monkeyNormal.y += 10
      if (this.monkeyNormal.y > 980) {
        this.monkeyNormal.y = 100
      }
      if (this.monkeyNormal.x < 250 || this.monkeyNormal.x > 820 || (this.monkeyNormal.x > 290 && this.monkeyNormal.x < 530) || (this.monkeyNormal.x < 780 && this.monkeyNormal.x > 550)) {
        this.monkeyNormal.y -= 10
      }
    }
    
    if (keyRightObj.isDown || keyRightObjAlt.isDown) {
      this.monkeyNormal.x += 10
      if (this.monkeyNormal.x > 980) {
        this.monkeyNormal.x = 100
      }
            if (this.monkeyNormal.y < 250 || this.monkeyNormal.y > 820 || (this.monkeyNormal.y > 290 && this.monkeyNormal.y < 530) || (this.monkeyNormal.y < 780 && this.monkeyNormal.y > 550)) {
        this.monkeyNormal.x -= 10
      }
    }
  }
}
  

export default GameSceneNormal
