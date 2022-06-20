/* global Phaser */

// Created by: Curtis Edwards & Titus Diceman
// Created on: June 2022
// This is the Phaser3 configuration file

/**
 * This class is the GameSceneHard.
 */
class GameSceneHard extends Phaser.Scene {
  // create an HardCar
  /**
   * This class is the GameSceneHard.
   */
  createHardCar() {
    var carHardSpeed = Math.floor(Math.random() * 200) + 400
    var carPosition = Math.floor(Math.random() * 20) + 1
    var carType = Math.floor(Math.random() * 15) + 1

    if (carType > 1) {
      // cars that spawn on the top lane
      if (carPosition == 1) {
        const anHardCar = this.physics.add.sprite(164, -30, "hardCar")

        anHardCar.body.velocity.y = carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 2) {
        const anHardCar = this.physics.add.sprite(352, -30, "hardCar")

        anHardCar.body.velocity.y = carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 3) {
        const anHardCar = this.physics.add.sprite(540, -30, "hardCar")

        anHardCar.body.velocity.y = carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 4) {
        const anHardCar = this.physics.add.sprite(728, -30, "hardCar")

        anHardCar.body.velocity.y = carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 5) {
        const anHardCar = this.physics.add.sprite(916, -30, "hardCar")

        anHardCar.body.velocity.y = carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      // cars that spawn on the right lane
      if (carPosition == 6) {
        const anHardCar = this.physics.add.sprite(1110, 164, "hardCarSide")

        anHardCar.body.velocity.x = -carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 7) {
        const anHardCar = this.physics.add.sprite(1110, 352, "hardCarSide")

        anHardCar.body.velocity.x = -carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 8) {
        const anHardCar = this.physics.add.sprite(1110, 540, "hardCarSide")

        anHardCar.body.velocity.x = -carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 9) {
        const anHardCar = this.physics.add.sprite(1110, 728, "hardCarSide")

        anHardCar.body.velocity.x = -carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 10) {
        const anHardCar = this.physics.add.sprite(1110, 916, "hardCarSide")

        anHardCar.body.velocity.x = -carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      // cars that spawn on the bottom lane
      if (carPosition == 11) {
        const anHardCar = this.physics.add
          .sprite(916, 1110, "hardCar")
          .setAngle(180)
        anHardCar.body.velocity.y = -carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 12) {
        const anHardCar = this.physics.add
          .sprite(728, 1110, "hardCar")
          .setAngle(180)
        anHardCar.body.velocity.y = -carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 13) {
        const anHardCar = this.physics.add
          .sprite(540, 1110, "hardCar")
          .setAngle(180)
        anHardCar.body.velocity.y = -carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 14) {
        const anHardCar = this.physics.add
          .sprite(352, 1110, "hardCar")
          .setAngle(180)
        anHardCar.body.velocity.y = -carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 15) {
        const anHardCar = this.physics.add
          .sprite(164, 1110, "hardCar")
          .setAngle(180)
        anHardCar.body.velocity.y = -carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      // cars that spawn on the left lane
      if (carPosition == 16) {
        const anHardCar = this.physics.add
          .sprite(-30, 916, "hardCarSide")
          .setAngle(180)
        anHardCar.body.velocity.x = carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 17) {
        const anHardCar = this.physics.add
          .sprite(-30, 728, "hardCarSide")
          .setAngle(180)
        anHardCar.body.velocity.x = carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 18) {
        const anHardCar = this.physics.add
          .sprite(-30, 540, "hardCarSide")
          .setAngle(180)
        anHardCar.body.velocity.x = carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 19) {
        const anHardCar = this.physics.add
          .sprite(-30, 352, "hardCarSide")
          .setAngle(180)
        anHardCar.body.velocity.x = carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
      if (carPosition == 20) {
        const anHardCar = this.physics.add
          .sprite(-30, 164, "hardCarSide")
          .setAngle(180)
        anHardCar.body.velocity.x = carHardSpeed
        this.hardCarGroup.add(anHardCar)
      }
    } else {
      // cars that spawn on the top lane
      if (carPosition == 1) {
        const anGoldCar = this.physics.add.sprite(164, -30, "goldCar")

        anGoldCar.body.velocity.y = carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 2) {
        const anGoldCar = this.physics.add.sprite(352, -30, "goldCar")

        anGoldCar.body.velocity.y = carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 3) {
        const anGoldCar = this.physics.add.sprite(540, -30, "goldCar")

        anGoldCar.body.velocity.y = carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 4) {
        const anGoldCar = this.physics.add.sprite(728, -30, "goldCar")

        anGoldCar.body.velocity.y = carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 5) {
        const anGoldCar = this.physics.add.sprite(916, -30, "goldCar")

        anGoldCar.body.velocity.y = carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      // cars that spawn on the right lane
      if (carPosition == 6) {
        const anGoldCar = this.physics.add.sprite(1110, 164, "goldCarSide")

        anGoldCar.body.velocity.x = -carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 7) {
        const anGoldCar = this.physics.add.sprite(1110, 352, "goldCarSide")

        anGoldCar.body.velocity.x = -carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 8) {
        const anGoldCar = this.physics.add.sprite(1110, 540, "goldCarSide")

        anGoldCar.body.velocity.x = -carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 9) {
        const anGoldCar = this.physics.add.sprite(1110, 728, "goldCarSide")

        anGoldCar.body.velocity.x = -carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 10) {
        const anGoldCar = this.physics.add.sprite(1110, 916, "goldCarSide")

        anGoldCar.body.velocity.x = -carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      // cars that spawn on the bottom lane
      if (carPosition == 11) {
        const anGoldCar = this.physics.add
          .sprite(916, 1110, "goldCar")
          .setAngle(180)
        anGoldCar.body.velocity.y = -carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 12) {
        const anGoldCar = this.physics.add
          .sprite(728, 1110, "goldCar")

          .setAgle(180)
        anGoldCar.body.velocity.y = -carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 13) {
        const anGoldCar = this.physics.add
          .sprite(540, 1110, "goldCar")
          .setAngle(180)
        anGoldCar.body.velocity.y = -carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 14) {
        const anGoldCar = this.physics.add
          .sprite(352, 1110, "goldCar")
          .setAngle(180)
        anGoldCar.body.velocity.y = -carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 15) {
        const anGoldCar = this.physics.add
          .sprite(164, 1110, "goldCar")
          .setAngle(180)
        anGoldCar.body.velocity.y = -carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      // cars that spawn on the left lane
      if (carPosition == 16) {
        const anGoldCar = this.physics.add
          .sprite(-30, 916, "goldCarSide")
          .setAngle(180)
        (anGoldCar.body.velocity.x = carHardSpeed),
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 17) {
        const anGoldCar = this.physics.add
          .sprite(-30, 728, "goldCarSide")
          .setAngle(180)
        anGoldCar.body.velocity.x = carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 18) {
        const anGoldCar = this.physics.add
          .sprite(-30, 540, "goldCarSide")
          .setAngle(180)
        anGoldCar.body.velocity.x = carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 19) {
        const anGoldCar = this.physics.add
          .sprite(-30, 352, "goldCarSide")
          .setAngle(180)
        anGoldCar.body.velocity.x = carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 20) {
        const anGoldCar = this.physics.add
          .sprite(-30, 164, "goldCarSide")
          .setAngle(180)
        anGoldCar.body.velocity.x = carHardSpeed
        this.goldCarGroup.add(anGoldCar)
      }
    }
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  constructor() {
    super({ key: "gameSceneHard" })

    this.gameSceneHardBackgroundImage = null
    this.monkeyHard = null
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = {
      font: "50px Arial",
      fill: "#ffffff",
      align: "center",
    }
    this.highScoreHard = 0
    this.highScoreHardText = null
    this.highScoreHardTextStyle = {
      font: "50px Arial",
      fill: "#fffc4d",
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
    console.log("Game Scene Hard")

    //images
    this.load.image(
      "gameSceneHardBackground",
      "./assets/hard_game_backdrop.png"
    )
    this.load.image("monkey", "./assets/monkey.gif")
    this.load.image("hardCar", "./assets/hard_car.png")
    this.load.image("hardCarSide", "./assets/hard_car_side.png")
    this.load.image("goldCar", "./assets/gold_car.png")
    this.load.image("goldCarSide", "./assets/gold_car_side.png")
    this.load.image("borderVertical", "./assets/border_vertical.png")
    this.load.image("borderHorizontal", "./assets/border_horizontal.png")
    this.load.image("okbutton", "./assets/ok_button.png")
    this.load.image("destroyBorder", "./assets/destroy_border.png")
    //sounds
    this.load.audio("carDrive", "./assets/carDrive.wav")
    this.load.audio("monkeyDeath", "./assets/monkeyDeath.wav")
    this.load.audio("goldCarCrash", "./assets/goldCarCrashHard.wav")
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
    this.game.sound.stopAll()
    this.gameSceneHardBackgroundImage.x = 1080 / 2
    this.gameSceneHardBackgroundImage.y = 1080 / 2

    this.monkeyHard = this.physics.add
      .sprite(1080 / 2, 1080 / 2, "monkey")
      .setScale(0.2)
      .setImmovable()
    this.borderRight = this.physics.add
      .sprite(1180, 540, "borderVertical")
      .setImmovable()
    this.borderBottom = this.physics.add
      .sprite(540, 1180, "borderHorizontal")
      .setImmovable()
    this.borderLeft = this.physics.add
      .sprite(-100, 540, "borderVertical")
      .setImmovable()
    this.borderTop = this.physics.add
      .sprite(540, -100, "borderHorizontal")
      .setImmovable()
    this.destroyBorder = this.physics.add
      .sprite(540, 540, "destroyBorder")
      .setScale(2)
      .setImmovable()

    this.scoreText = this.add.text(
      20,
      40,
      this.score.toString(),
      this.scoreTextStyle
    )

    this.highScoreHardText = this.add.text(
      970,
      40,
      this.highScoreHard.toString(),
      this.highScoreHardTextStyle
    )

    // create a group for the cars
    this.hardCarGroup = this.add.group()
    this.goldCarGroup = this.add.group()
    this.createHardCar()
    this.createHardCar()
    this.createHardCar()
    this.createHardCar()
    this.createHardCar()
    this.createHardCar()

    // Collisions between hardCar and monkey
    this.physics.add.collider(
      this.monkeyHard,
      this.hardCarGroup,
      function (monkeyHardCollide, hardCarCollide) {
        monkeyHardCollide.destroy()
        this.sound.play("monkeyDeath")
        this.okButton = this.add.sprite(1080 / 2, 1620 / 2 + 100, "okbutton")
        this.okButton.setInteractive({ useHandCursor: true })
        this.okButton.on("pointerdown", () => this.clickButton())
        this.physics.add.collider(
          this.hardCarGroup,
          this.destroyBorder,
          function (hardCarCollide, destroyCollide) {
            hardCarCollide.destroy()
          }.bind(this)
        )
        this.physics.add.collider(
          this.goldCarGroup,
          this.destroyBorder,
          function (goldCarCollide, destroyCollide) {
            goldCarCollide.destroy()
          }.bind(this)
        )
        if (this.score > this.highScoreHard) {
          this.highScoreHard = this.score
          this.highScoreHardText.setText(this.highScoreHard.toString())
        }
      }.bind(this)
    )

    // Collisions between goldCar and monkey
    this.physics.add.collider(
      this.monkeyHard,
      this.goldCarGroup,
      function (monkeyHardCollide, goldCarCollide) {
        goldCarCollide.destroy()
        this.sound.play("goldCarCrash")
        this.createHardCar()
        this.score = this.score + 25
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )

    // Collisions between car and the top border
    this.physics.add.collider(
      this.hardCarGroup,
      this.borderTop,
      function (hardCarCollide, borderCollide) {
        hardCarCollide.destroy()
        this.createHardCar()
        this.sound.play("carDrive")
        this.score = this.score + 1
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )
    this.physics.add.collider(
      this.goldCarGroup,
      this.borderTop,
      function (goldCarCollide, borderCollide) {
        goldCarCollide.destroy()
        this.createHardCar()
        this.sound.play("carDrive")
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )

    // Collisions between car and the right border
    this.physics.add.collider(
      this.hardCarGroup,
      this.borderRight,
      function (hardCarCollide, borderCollide) {
        hardCarCollide.destroy()
        this.createHardCar()
        this.sound.play("carDrive")
        this.score = this.score + 1
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )
    this.physics.add.collider(
      this.goldCarGroup,
      this.borderRight,
      function (goldCarCollide, borderCollide) {
        goldCarCollide.destroy()
        this.createHardCar()
        this.sound.play("carDrive")
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )

    // Collisions between car and the bottom border
    this.physics.add.collider(
      this.hardCarGroup,
      this.borderBottom,
      function (goldCarCollide, borderCollide) {
        goldCarCollide.destroy()
        this.createHardCar()
        this.sound.play("carDrive")
        this.score = this.score + 1
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )
    this.physics.add.collider(
      this.goldCarGroup,
      this.borderBottom,
      function (goldCarCollide, borderCollide) {
        goldCarCollide.destroy()
        this.createHardCar()
        this.sound.play("carDrive")
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )

    // Collisions between car and the left border
    this.physics.add.collider(
      this.hardCarGroup,
      this.borderLeft,
      function (hardCarCollide, borderCollide) {
        hardCarCollide.destroy()
        this.createHardCar()
        this.sound.play("carDrive")
        this.score = this.score + 1
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )
    this.physics.add.collider(
      this.goldCarGroup,
      this.borderLeft,
      function (goldCarCollide, borderCollide) {
        goldCarCollide.destroy()
        this.createHardCar()
        this.sound.play("carDrive")
        this.scoreText.setText(this.score.toString())
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
      if (this.monkeyHard.y < 0) {
        this.monkeyHard.y = 1040
      }
      if (
        this.monkeyHard.x < 140 ||
        this.monkeyHard.x > 940 ||
        (this.monkeyHard.x > 188 && this.monkeyHard.x < 328) ||
        (this.monkeyHard.x > 376 && this.monkeyHard.x < 516) ||
        (this.monkeyHard.x > 564 && this.monkeyHard.x < 704) ||
        (this.monkeyHard.x > 752 && this.monkeyHard.x < 892)
      ) {
        this.monkeyHard.y += 10
      }
    }

    if (keyLeftObj.isDown || keyLeftObjAlt.isDown) {
      this.monkeyHard.x -= 10
      if (this.monkeyHard.x < 0) {
        this.monkeyHard.x = 1040
      }

      if (
        this.monkeyHard.y < 140 ||
        this.monkeyHard.y > 940 ||
        (this.monkeyHard.y > 188 && this.monkeyHard.y < 328) ||
        (this.monkeyHard.y > 376 && this.monkeyHard.y < 516) ||
        (this.monkeyHard.y > 564 && this.monkeyHard.y < 704) ||
        (this.monkeyHard.y > 752 && this.monkeyHard.y < 892)
      ) {
        this.monkeyHard.x += 10
      }
    }

    if (keyBackwardObj.isDown || keyBackwardObjAlt.isDown) {
      this.monkeyHard.y += 10
      if (this.monkeyHard.y > 1080) {
        this.monkeyHard.y = 40
      }
      if (
        this.monkeyHard.x < 140 ||
        this.monkeyHard.x > 940 ||
        (this.monkeyHard.x > 188 && this.monkeyHard.x < 328) ||
        (this.monkeyHard.x > 376 && this.monkeyHard.x < 516) ||
        (this.monkeyHard.x > 564 && this.monkeyHard.x < 704) ||
        (this.monkeyHard.x > 752 && this.monkeyHard.x < 892)
      ) {
        this.monkeyHard.y -= 10
      }
    }

    if (keyRightObj.isDown || keyRightObjAlt.isDown) {
      this.monkeyHard.x += 10
      if (this.monkeyHard.x > 1080) {
        this.monkeyHard.x = 40
      }

      if (
        this.monkeyHard.y < 140 ||
        this.monkeyHard.y > 940 ||
        (this.monkeyHard.y > 188 && this.monkeyHard.y < 328) ||
        (this.monkeyHard.y > 376 && this.monkeyHard.y < 516) ||
        (this.monkeyHard.y > 564 && this.monkeyHard.y < 704) ||
        (this.monkeyHard.y > 752 && this.monkeyHard.y < 892)
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
    this.score = 0
  }
}

export default GameSceneHard
