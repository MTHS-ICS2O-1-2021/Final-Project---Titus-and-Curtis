/* global Phaser */

// Created by: Curtis Edwards & Titus Diceman
// Created on: June 2022
// This is the Phaser3 configuration file
/**
 * This class is the Splash Scene.
 */
class GameSceneNormal extends Phaser.Scene {
  // create an NormalCar

  // THIS CODE WONT WORK RIGHT NOW

  // cars that spawn on the top lane
  createNormalCar() {
    var carNormalSpeed = Math.floor(Math.random() * 300) + 200
    var carPosition = Math.floor(Math.random() * 12) + 1

    if (carPosition == 1) {
      const anNormalCar = this.physics.add
        .sprite(270, 100, "normalCar")
        .setScale(0.6)
      anNormalCar.body.velocity.y = carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    if (carPosition == 2) {
      const anNormalCar = this.physics.add
        .sprite(540, 100, "normalCar")
        .setScale(0.6)
      anNormalCar.body.velocity.y = carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    if (carPosition == 3) {
      const anNormalCar = this.physics.add
        .sprite(800, 100, "normalCar")
        .setScale(0.6)
      anNormalCar.body.velocity.y = carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    // cars that spawn on the right lane
    if (carPosition == 4) {
      const anNormalCar = this.physics.add
        .sprite(980, 270, "normalCarSide")
        .setScale(0.6)
      anNormalCar.body.velocity.x = -carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    if (carPosition == 5) {
      const anNormalCar = this.physics.add
        .sprite(980, 540, "normalCarSide")
        .setScale(0.6)
      anNormalCar.body.velocity.x = -carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    if (carPosition == 6) {
      const anNormalCar = this.physics.add
        .sprite(980, 800, "normalCarSide")
        .setScale(0.6)
      anNormalCar.body.velocity.x = -carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    // cars that spawn on the bottom lane
    if (carPosition == 7) {
      const anNormalCar = this.physics.add
        .sprite(800, 980, "normalCar")
        .setScale(0.6)
        .setAngle(180)
      anNormalCar.body.velocity.y = -carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    if (carPosition == 8) {
      const anNormalCar = this.physics.add
        .sprite(540, 980, "normalCar")
        .setScale(0.6)
        .setAngle(180)
      anNormalCar.body.velocity.y = -carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    if (carPosition == 9) {
      const anNormalCar = this.physics.add
        .sprite(270, 980, "normalCar")
        .setScale(0.6)
        .setAngle(180)
      anNormalCar.body.velocity.y = -carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    // cars that spawn on the left lane
    if (carPosition == 10) {
      const anNormalCar = this.physics.add
        .sprite(100, 800, "normalCarSide")
        .setScale(0.6)
        .setAngle(180)
      anNormalCar.body.velocity.x = carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    if (carPosition == 11) {
      const anNormalCar = this.physics.add
        .sprite(100, 540, "normalCarSide")
        .setScale(0.6)
        .setAngle(180)
      anNormalCar.body.velocity.x = carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
    if (carPosition == 12) {
      const anNormalCar = this.physics.add
        .sprite(100, 270, "normalCarSide")
        .setScale(0.6)
        .setAngle(180)
      anNormalCar.body.velocity.x = carNormalSpeed
      this.normalCarGroup.add(anNormalCar)
    }
  }

  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "gameSceneNormal" })

    this.gameSceneNormalBackgroundImage = null
    this.monkeyNormal = null
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = {
      font: "65px Arial",
      fill: "#ffffff",
      align: "center",
    }
    this.gameOverTextStyle = {
      font: "65px Arial",
      fill: "#ff0000",
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
    console.log("Game Scene Normal")
    this.load.image(
      "gameSceneNormalBackground",
      "./assets/normal_game_backdrop.png"
    )
    this.load.image("monkey", "./assets/monkey.gif")
    this.load.image("normalCar", "./assets/normal_car.png")
    this.load.image("normalCarSide", "./assets/normal_car_side.png")
    this.load.image("borderVertical", "./assets/border_vertical.png")
    this.load.image("borderHorizontal", "./assets/border_horizontal.png")
    this.load.image("okbutton", "./assets/ok_button.png")
    // sounds
    this.load.audio("carCrash", "./assets/carCrash.wav")
    this.load.audio("carDrive", "./assets/carDrive.wav")
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
      "gameSceneNormalBackground"
      )
    this.gameSceneNormalBackgroundImage.x = 1080 / 2
    this.gameSceneNormalBackgroundImage.y = 1080 / 2

    this.monkeyNormal = this.physics.add
      .sprite(1080 / 2, 1080 / 2, "monkey")
      .setScale(0.27)
    this.borderRight = this.physics.add
      .sprite(1060, 540, "borderVertical")
      .setImmovable()
    this.borderBottom = this.physics.add
      .sprite(540, 1060, "borderHorizontal")
      .setImmovable()
    this.borderLeft = this.physics.add
      .sprite(20, 540, "borderVertical")
      .setImmovable()
    this.borderTop = this.physics.add
      .sprite(540, 20, "borderHorizontal")
      .setImmovable()

    // create a group for the normalCars
    this.normalCarGroup = this.add.group()
    this.createNormalCar()
    this.createNormalCar()

    // Collisions between car and monkey
    this.physics.add.collider(
      this.monkeyNormal,
      this.normalCarGroup,
      function (monkeyNormalCollide, normalCarCollide) {
        monkeyNormalCollide.destroy()
        this.sound.play("carCrash")
        this.okButton = this.add.sprite(1080 / 2, 1620 / 2 + 100, "okbutton")
        this.okButton.setInteractive({ useHandCursor: true })
        this.okButton.on("pointerdown", () => this.clickButton())
      }.bind(this)
    )

    // Collisions between car and the top border
    this.physics.add.collider(
      this.normalCarGroup,
      this.borderTop,
      function (normalCarCollide, borderCollide) {
        normalCarCollide.destroy()
        var randomNumber = Math.floor(Math.random() * 3) + 1
        this.createNormalCar()
      }.bind(this)
    )

    // Collisions between car and the right border
    this.physics.add.collider(
      this.normalCarGroup,
      this.borderRight,
      function (normalCarCollide, borderCollide) {
        normalCarCollide.destroy()
        this.createNormalCar()
      }.bind(this)
    )

    // Collisions between car and the bottom border
    this.physics.add.collider(
      this.normalCarGroup,
      this.borderBottom,
      function (normalCarCollide, borderCollide) {
        normalCarCollide.destroy()
        this.createNormalCar()
      }.bind(this)
    )

    // Collisions between car and the left border
    this.physics.add.collider(
      this.normalCarGroup,
      this.borderLeft,
      function (normalCarCollide, borderCollide) {
        normalCarCollide.destroy()
        this.createNormalCar()
      }.bind(this)
    )
  }

  update(time, delta) {
    //called 60 times a second.

    const keyForwardObj = this.input.keyboard.addKey("W")
    const keyLeftObj = this.input.keyboard.addKey("A")
    const keyBackwardObj = this.input.keyboard.addKey("S")
    const keyRightObj = this.input.keyboard.addKey("D")
    const keyForwardObjAlt = this.input.keyboard.addKey("UP")
    const keyLeftObjAlt = this.input.keyboard.addKey("LEFT")
    const keyBackwardObjAlt = this.input.keyboard.addKey("DOWN")
    const keyRightObjAlt = this.input.keyboard.addKey("RIGHT")

    if (keyForwardObj.isDown || keyForwardObjAlt.isDown) {
      this.monkeyNormal.y -= 10
      if (this.monkeyNormal.y < 100) {
        this.monkeyNormal.y = 980
      }
      if (
        this.monkeyNormal.x < 250 ||
        this.monkeyNormal.x > 820 ||
        (this.monkeyNormal.x > 290 && this.monkeyNormal.x < 530) ||
        (this.monkeyNormal.x < 780 && this.monkeyNormal.x > 550)
      ) {
        this.monkeyNormal.y += 10
      }
    }

    if (keyLeftObj.isDown || keyLeftObjAlt.isDown) {
      this.monkeyNormal.x -= 10
      if (this.monkeyNormal.x < 100) {
        this.monkeyNormal.x = 980
      }
      if (
        this.monkeyNormal.y < 250 ||
        this.monkeyNormal.y > 820 ||
        (this.monkeyNormal.y > 290 && this.monkeyNormal.y < 530) ||
        (this.monkeyNormal.y < 780 && this.monkeyNormal.y > 550)
      ) {
        this.monkeyNormal.x += 10
      }
    }

    if (keyBackwardObj.isDown || keyBackwardObjAlt.isDown) {
      this.monkeyNormal.y += 10
      if (this.monkeyNormal.y > 980) {
        this.monkeyNormal.y = 100
      }
      if (
        this.monkeyNormal.x < 250 ||
        this.monkeyNormal.x > 820 ||
        (this.monkeyNormal.x > 290 && this.monkeyNormal.x < 530) ||
        (this.monkeyNormal.x < 780 && this.monkeyNormal.x > 550)
      ) {
        this.monkeyNormal.y -= 10
      }
    }

    if (keyRightObj.isDown || keyRightObjAlt.isDown) {
      this.monkeyNormal.x += 10
      if (this.monkeyNormal.x > 980) {
        this.monkeyNormal.x = 100
      }
      if (
        this.monkeyNormal.y < 250 ||
        this.monkeyNormal.y > 820 ||
        (this.monkeyNormal.y > 290 && this.monkeyNormal.y < 530) ||
        (this.monkeyNormal.y < 780 && this.monkeyNormal.y > 550)
      ) {
        this.monkeyNormal.x -= 10
      }
    }
  }
  clickButton() {
    this.scene.start("menuScene")
  }
}

export default GameSceneNormal
