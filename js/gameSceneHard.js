/* global Phaser */

// Created by: Curtis Edwards & Titus Diceman
// Created on: June 2022
// This is the Phaser3 configuration file

/**
 * This class is the GameSceneHard.
 */
class GameSceneHard extends Phaser.Scene {
  // create an HardCar

  // cars that spawn on the top lane

  /**
   * This class is the GameSceneHard.
   */
  createHardCar() {
    var carHardSpeed = Math.floor(Math.random() * 300) + 300
    var carPosition = Math.floor(Math.random() * 12) + 1

    if (carPosition == 1) {
      const anHardCar = this.physics.add
        .sprite(270, 100, "hardCar")
        .setScale(0.6)
      anHardCar.body.velocity.y = carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    if (carPosition == 2) {
      const anHardCar = this.physics.add
        .sprite(540, 100, "hardCar")
        .setScale(0.6)
      anHardCar.body.velocity.y = carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    if (carPosition == 3) {
      const anHardCar = this.physics.add
        .sprite(800, 100, "hardCar")
        .setScale(0.6)
      anHardCar.body.velocity.y = carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    // cars that spawn on the right lane
    if (carPosition == 4) {
      const anHardCar = this.physics.add
        .sprite(980, 270, "hardCarSide")
        .setScale(0.6)
      anHardCar.body.velocity.x = -carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    if (carPosition == 5) {
      const anHardCar = this.physics.add
        .sprite(980, 540, "hardCarSide")
        .setScale(0.6)
      anHardCar.body.velocity.x = -carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    if (carPosition == 6) {
      const anHardCar = this.physics.add
        .sprite(980, 800, "hardCarSide")
        .setScale(0.6)
      anHardCar.body.velocity.x = -carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    // cars that spawn on the bottom lane
    if (carPosition == 7) {
      const anHardCar = this.physics.add
        .sprite(800, 980, "hardCar")
        .setScale(0.6)
        .setAngle(180)
      anHardCar.body.velocity.y = -carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    if (carPosition == 8) {
      const anHardCar = this.physics.add
        .sprite(540, 980, "hardCar")
        .setScale(0.6)
        .setAngle(180)
      anHardCar.body.velocity.y = -carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    if (carPosition == 9) {
      const anHardCar = this.physics.add
        .sprite(270, 980, "hardCar")
        .setScale(0.6)
        .setAngle(180)
      anHardCar.body.velocity.y = -carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    // cars that spawn on the left lane
    if (carPosition == 10) {
      const anHardCar = this.physics.add
        .sprite(100, 800, "hardCarSide")
        .setScale(0.6)
        .setAngle(180)
      anHardCar.body.velocity.x = carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    if (carPosition == 11) {
      const anHardCar = this.physics.add
        .sprite(100, 540, "hardCarSide")
        .setScale(0.6)
        .setAngle(180)
      anHardCar.body.velocity.x = carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
    if (carPosition == 12) {
      const anHardCar = this.physics.add
        .sprite(100, 270, "hardCarSide")
        .setScale(0.6)
        .setAngle(180)
      anHardCar.body.velocity.x = carHardSpeed
      this.hardCarGroup.add(anHardCar)
    }
  }

  constructor() {
    super({ key: "gameSceneHard" })

    this.gameSceneHardBackgroundImage = null
    this.monkeyHard = null
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
    console.log("Game Scene Hard")
    //images
    this.load.image(
      "gameSceneHardBackground",
      "./assets/hard_game_backdrop.png"
    )
    this.load.image("monkey", "./assets/monkey.gif")
    this.load.image("hardCar", "./assets/hard_car.png")
    this.load.image("hardCarSide", "./assets/hard_car_side.png")
    this.load.image("borderVertical", "./assets/border_vertical.png")
    this.load.image("borderHorizontal", "./assets/border_horizontal.png")
    this.load.image("okbutton", "./assets/ok_button.png")
    //sounds
    this.load.audio("carCrash", "./assets/carCrash.wav")
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
    )
    this.gameSceneHardBackgroundImage.x = 1080 / 2
    this.gameSceneHardBackgroundImage.y = 1080 / 2

    this.monkeyHard = this.physics.add
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

    // create a group for the cars
    this.hardCarGroup = this.add.group()
    this.createHardCar()
    this.createHardCar()
    this.createHardCar()

    // Collisions between car and monkey
    this.physics.add.collider(
      this.monkeyHard,
      this.hardCarGroup,
      function (monkeyHardCollide, hardCarCollide) {
        monkeyHardCollide.destroy()
        this.sound.play("carCrash")
        this.okButton = this.add.sprite(1080 / 2, 1620 / 2 + 100, "okbutton")
        this.okButton.setInteractive({ useHandCursor: true })
        this.okButton.on("pointerdown", () => this.clickButton())
      }.bind(this)
    )

    // Collisions between car and the top border
    this.physics.add.collider(
      this.hardCarGroup,
      this.borderTop,
      function (hardCarCollide, borderCollide) {
        hardCarCollide.destroy()
        var randomNumber = Math.floor(Math.random() * 3) + 1
        this.createHardCar()
      }.bind(this)
    )

    // Collisions between car and the right border
    this.physics.add.collider(
      this.hardCarGroup,
      this.borderRight,
      function (hardCarCollide, borderCollide) {
        hardCarCollide.destroy()
        this.createHardCar()
      }.bind(this)
    )

    // Collisions between car and the bottom border
    this.physics.add.collider(
      this.hardCarGroup,
      this.borderBottom,
      function (hardCarCollide, borderCollide) {
        hardCarCollide.destroy()
        this.createHardCar()
      }.bind(this)
    )

    // Collisions between car and the left border
    this.physics.add.collider(
      this.hardCarGroup,
      this.borderLeft,
      function (hardCarCollide, borderCollide) {
        hardCarCollide.destroy()
        this.createHardCar()
      }.bind(this)
    )
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
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
      this.monkeyHard.y -= 10
      if (this.monkeyHard.y < 100) {
        this.monkeyHard.y = 980
      }
      if (
        this.monkeyHard.x < 250 ||
        this.monkeyHard.x > 820 ||
        (this.monkeyHard.x > 290 && this.monkeyHard.x < 530) ||
        (this.monkeyHard.x < 780 && this.monkeyHard.x > 550)
      ) {
        this.monkeyHard.y += 10
      }
    }

    if (keyLeftObj.isDown || keyLeftObjAlt.isDown) {
      this.monkeyHard.x -= 10
      if (this.monkeyHard.x < 100) {
        this.monkeyHard.x = 980
      }
      if (
        this.monkeyHard.y < 250 ||
        this.monkeyHard.y > 820 ||
        (this.monkeyHard.y > 290 && this.monkeyHard.y < 530) ||
        (this.monkeyHard.y < 780 && this.monkeyHard.y > 550)
      ) {
        this.monkeyHard.x += 10
      }
    }

    if (keyBackwardObj.isDown || keyBackwardObjAlt.isDown) {
      this.monkeyHard.y += 10
      if (this.monkeyHard.y > 980) {
        this.monkeyHard.y = 100
      }
      if (
        this.monkeyHard.x < 250 ||
        this.monkeyHard.x > 820 ||
        (this.monkeyHard.x > 290 && this.monkeyHard.x < 530) ||
        (this.monkeyHard.x < 780 && this.monkeyHard.x > 550)
      ) {
        this.monkeyHard.y -= 10
      }
    }

    if (keyRightObj.isDown || keyRightObjAlt.isDown) {
      this.monkeyHard.x += 10
      if (this.monkeyHard.x > 980) {
        this.monkeyHard.x = 100
      }
      if (
        this.monkeyHard.y < 250 ||
        this.monkeyHard.y > 820 ||
        (this.monkeyHard.y > 290 && this.monkeyHard.y < 530) ||
        (this.monkeyHard.y < 780 && this.monkeyHard.y > 550)
      ) {
        this.monkeyHard.x -= 10
      }
    }
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

export default GameSceneHard
