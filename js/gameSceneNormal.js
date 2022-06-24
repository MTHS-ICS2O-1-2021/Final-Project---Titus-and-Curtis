/* global Phaser */

// Created by: Curtis Edwards & Titus Diceman
// Created on: June 2022
// This is the Phaser3 configuration file
/**
 * This class is the Splash Scene.
 */
class GameSceneNormal extends Phaser.Scene {
  // create an NormalCar

  // cars that spawn on the top lane
   /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  createNormalCar() {
    var carNormalSpeed = Math.floor(Math.random() * 200) + 300
    var carPosition = Math.floor(Math.random() * 20) + 1
    var carType = Math.floor(Math.random() * 15) + 1

    if (carType > 1) {
      // cars that spawn on the top lane
      if (carPosition == 1) {
        const anNormalCar = this.physics.add
          .sprite(164, -30, "normalCar")
          
        anNormalCar.body.velocity.y = carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 2) {
        const anNormalCar = this.physics.add
          .sprite(352, -30, "normalCar")
          
        anNormalCar.body.velocity.y = carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 3) {
        const anNormalCar = this.physics.add
          .sprite(540, -30, "normalCar")
          
        anNormalCar.body.velocity.y = carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 4) {
        const anNormalCar = this.physics.add
          .sprite(728, -30, "normalCar")
          
        anNormalCar.body.velocity.y = carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 5) {
        const anNormalCar = this.physics.add
          .sprite(916, -30, "normalCar")
          
        anNormalCar.body.velocity.y = carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      // cars that spawn on the right lane
      if (carPosition == 6) {
        const anNormalCar = this.physics.add
          .sprite(1110, 164, "normalCarSide")
          
        anNormalCar.body.velocity.x = -carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 7) {
        const anNormalCar = this.physics.add
          .sprite(1110, 352, "normalCarSide")
          
        anNormalCar.body.velocity.x = -carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 8) {
        const anNormalCar = this.physics.add
          .sprite(1110, 540, "normalCarSide")
          
        anNormalCar.body.velocity.x = -carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 9) {
        const anNormalCar = this.physics.add
          .sprite(1110, 728, "normalCarSide")
          
        anNormalCar.body.velocity.x = -carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 10) {
        const anNormalCar = this.physics.add
          .sprite(1110, 916, "normalCarSide")
          
        anNormalCar.body.velocity.x = -carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      // cars that spawn on the bottom lane
      if (carPosition == 11) {
        const anNormalCar = this.physics.add
          .sprite(916, 1110, "normalCar")
          
          .setAngle(180)
        anNormalCar.body.velocity.y = -carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 12) {
        const anNormalCar = this.physics.add
          .sprite(728, 1110, "normalCar")
          
          .setAngle(180)
        anNormalCar.body.velocity.y = -carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 13) {
        const anNormalCar = this.physics.add
          .sprite(540, 1110, "normalCar")
          
          .setAngle(180)
        anNormalCar.body.velocity.y = -carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 14) {
        const anNormalCar = this.physics.add
          .sprite(352, 1110, "normalCar")
          
          .setAngle(180)
        anNormalCar.body.velocity.y = -carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 15) {
        const anNormalCar = this.physics.add
          .sprite(164, 1110, "normalCar")
          
          .setAngle(180)
        anNormalCar.body.velocity.y = -carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      // cars that spawn on the left lane
      if (carPosition == 16) {
        const anNormalCar = this.physics.add
          .sprite(-30, 916, "normalCarSide")
          
          .setAngle(180)
        anNormalCar.body.velocity.x = carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 17) {
        const anNormalCar = this.physics.add
          .sprite(-30, 728, "normalCarSide")
          
          .setAngle(180)
        anNormalCar.body.velocity.x = carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 18) {
        const anNormalCar = this.physics.add
          .sprite(-30, 540, "normalCarSide")
          
          .setAngle(180)
        anNormalCar.body.velocity.x = carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 19) {
        const anNormalCar = this.physics.add
          .sprite(-30, 352, "normalCarSide")
          
          .setAngle(180)
        anNormalCar.body.velocity.x = carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
      if (carPosition == 20) {
        const anNormalCar = this.physics.add
          .sprite(-30, 164, "normalCarSide")
          
          .setAngle(180)
        anNormalCar.body.velocity.x = carNormalSpeed
        this.normalCarGroup.add(anNormalCar)
      }
    } else {
      // cars that spawn on the top lane
      if (carPosition == 1) {
        const anGoldCar = this.physics.add
          .sprite(164, -30, "goldCar")
          
        anGoldCar.body.velocity.y = carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 2) {
        const anGoldCar = this.physics.add
          .sprite(352, -30, "goldCar")
          
        anGoldCar.body.velocity.y = carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 3) {
        const anGoldCar = this.physics.add
          .sprite(540, -30, "goldCar")
          
        anGoldCar.body.velocity.y = carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 4) {
        const anGoldCar = this.physics.add
          .sprite(728, -30, "goldCar")
          
        anGoldCar.body.velocity.y = carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 5) {
        const anGoldCar = this.physics.add
          .sprite(916, -30, "goldCar")
          
        anGoldCar.body.velocity.y = carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      // cars that spawn on the right lane
      if (carPosition == 6) {
        const anGoldCar = this.physics.add
          .sprite(1110, 164, "goldCarSide")
          
        anGoldCar.body.velocity.x = -carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 7) {
        const anGoldCar = this.physics.add
          .sprite(1110, 352, "goldCarSide")
          
        anGoldCar.body.velocity.x = -carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 8) {
        const anGoldCar = this.physics.add
          .sprite(1110, 540, "goldCarSide")
          
        anGoldCar.body.velocity.x = -carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 9) {
        const anGoldCar = this.physics.add
          .sprite(1110, 728, "goldCarSide")
          
        anGoldCar.body.velocity.x = -carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 10) {
        const anGoldCar = this.physics.add
          .sprite(1110, 916, "goldCarSide")
          
        anGoldCar.body.velocity.x = -carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      // cars that spawn on the bottom lane
      if (carPosition == 11) {
        const anGoldCar = this.physics.add
          .sprite(916, 1110, "goldCar")
          
          .setAngle(180)
        anGoldCar.body.velocity.y = -carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 12) {
        const anGoldCar = this.physics.add
          .sprite(728, 1110, "goldCar")
          
          .setAngle(180)
        anGoldCar.body.velocity.y = -carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 13) {
        const anGoldCar = this.physics.add
          .sprite(540, 1110, "goldCar")
          
          .setAngle(180)
        anGoldCar.body.velocity.y = -carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 14) {
        const anGoldCar = this.physics.add
          .sprite(352, 1110, "goldCar")
          
          .setAngle(180)
        anGoldCar.body.velocity.y = -carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 15) {
        const anGoldCar = this.physics.add
          .sprite(164, 1110, "goldCar")
          
          .setAngle(180)
        anGoldCar.body.velocity.y = -carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      // cars that spawn on the left lane
      if (carPosition == 16) {
        const anGoldCar = this.physics.add
          .sprite(-30, 916, "goldCarSide")
          
          .setAngle(180)
        anGoldCar.body.velocity.x = carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 17) {
        const anGoldCar = this.physics.add
          .sprite(-30, 728, "goldCarSide")
          
          .setAngle(180)
        anGoldCar.body.velocity.x = carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 18) {
        const anGoldCar = this.physics.add
          .sprite(-30, 540, "goldCarSide")
          
          .setAngle(180)
        anGoldCar.body.velocity.x = carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 19) {
        const anGoldCar = this.physics.add
          .sprite(-30, 352, "goldCarSide")
          
          .setAngle(180)
        anGoldCar.body.velocity.x = carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
      if (carPosition == 20) {
        const anGoldCar = this.physics.add
          .sprite(-30, 164, "goldCarSide")
          
          .setAngle(180)
        anGoldCar.body.velocity.x = carNormalSpeed
        this.goldCarGroup.add(anGoldCar)
      }
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
      font: "50px Arial",
      fill: "#ffffff",
      align: "center",
    }
    this.highScoreNormal = 0
    this.highScoreNormalText = null
    this.highScoreNormalTextStyle = {
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
    console.log("Game Scene Normal")
    this.load.image(
      "gameSceneNormalBackground",
      "./assets/normal_game_backdrop.png"
    )
    this.load.image("monkey", "./assets/monkey.gif")
    this.load.image("normalCar", "./assets/normal_car.png")
    this.load.image("normalCarSide", "./assets/normal_car_side.png")
    this.load.image("goldCar", "./assets/gold_car.png")
    this.load.image("goldCarSide", "./assets/gold_car_side.png")
    this.load.image("borderVertical", "./assets/border_vertical.png")
    this.load.image("borderHorizontal", "./assets/border_horizontal.png")
    this.load.image("gameOverButton", "./assets/gameOver_button.png")
    this.load.image("destroyBorder", "./assets/destroy_border.png")
    // sounds
    this.load.audio("carDrive", "./assets/carDrive.wav")
    this.load.audio("monkeyDeath", "./assets/monkeyDeath.wav")
    this.load.audio("goldCarCrash", "./assets/goldCarCrashNormal.wav")
    this.load.audio("normalMode", "./assets/normalMode.wav")
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
    this.game.sound.stopAll()
    this.sound.play("normalMode")
    this.gameSceneNormalBackgroundImage.x = 1080 / 2
    this.gameSceneNormalBackgroundImage.y = 1080 / 2

    this.monkeyNormal = this.physics.add
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

    this.highScoreNormalText = this.add.text(
      970,
      40,
      this.highScoreNormal.toString(),
      this.highScoreNormalTextStyle
    )

    // create a group for the normalCars
    this.normalCarGroup = this.add.group()
    this.goldCarGroup = this.add.group()
    this.createNormalCar()
    this.createNormalCar()
    this.createNormalCar()
    this.createNormalCar()

    // Collisions between car and monkey
    this.physics.add.collider(
      this.monkeyNormal,
      this.normalCarGroup,
      function (monkeyNormalCollide, normalCarCollide) {
        monkeyNormalCollide.destroy()
        this.sound.play("monkeyDeath")
        this.okButton = this.add.sprite(540, 540, "gameOverButton")
        this.okButton.setInteractive({ useHandCursor: true })
        this.okButton.on("pointerdown", () => this.clickButton())
        this.okButton.on('pointerover', function() {this.setTint(0xccffce)})
        this.okButton.on('pointerout', function() {this.clearTint()})
        this.physics.add.collider(
          this.normalCarGroup,
          this.destroyBorder,
          function (normalCarCollide, destroyCollide) {
            normalCarCollide.destroy()
          }.bind(this)
        )
        this.physics.add.collider(
          this.goldCarGroup,
          this.destroyBorder,
          function (goldCarCollide, destroyCollide) {
            goldCarCollide.destroy()
          }.bind(this)
        )
        if (this.score > this.highScoreNormal) {
          this.highScoreNormal = this.score
          this.highScoreNormalText.setText(this.highScoreNormal.toString())
        }
      }.bind(this)
      )

    // Collisions between goldCar and monkey
    this.physics.add.collider(
      this.monkeyNormal,
      this.goldCarGroup,
      function (monkeyNormalCollide, goldCarCollide) {
        goldCarCollide.destroy()
        this.createNormalCar()
        this.score = this.score + 25
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )

    // Collisions between car and the top border
    this.physics.add.collider(
      this.normalCarGroup,
      this.borderTop,
      function (normalCarCollide, borderCollide) {
        normalCarCollide.destroy()
        this.createNormalCar()
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
        this.createNormalCar()
        this.sound.play("carDrive")
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )

    // Collisions between car and the right border
    this.physics.add.collider(
      this.normalCarGroup,
      this.borderRight,
      function (normalCarCollide, borderCollide) {
        normalCarCollide.destroy()
        this.createNormalCar()
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
        this.createNormalCar()
        this.sound.play("carDrive")
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )

    // Collisions between car and the bottom border
    this.physics.add.collider(
      this.normalCarGroup,
      this.borderBottom,
      function (normalCarCollide, borderCollide) {
        normalCarCollide.destroy()
        this.createNormalCar()
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
        this.createNormalCar()
        this.sound.play("carDrive")
        this.scoreText.setText(this.score.toString())
      }.bind(this)
    )

    // Collisions between car and the left border
    this.physics.add.collider(
      this.normalCarGroup,
      this.borderLeft,
      function (normalCarCollide, borderCollide) {
        normalCarCollide.destroy()
        this.createNormalCar()
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
        this.createNormalCar()
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
      this.monkeyNormal.y -= 10
      if (this.monkeyNormal.y < 0) {
        this.monkeyNormal.y = 1040
      }
      if (
        this.monkeyNormal.x < 140 ||
        this.monkeyNormal.x > 940 ||
        (this.monkeyNormal.x > 188 && this.monkeyNormal.x < 328) ||
        (this.monkeyNormal.x > 376 && this.monkeyNormal.x < 516) ||
        (this.monkeyNormal.x > 564 && this.monkeyNormal.x < 704) ||
        (this.monkeyNormal.x > 752 && this.monkeyNormal.x < 892)
      ) {
        this.monkeyNormal.y += 10
      }
    }

    if (keyLeftObj.isDown || keyLeftObjAlt.isDown) {
      this.monkeyNormal.x -= 10
      if (this.monkeyNormal.x < 0) {
        this.monkeyNormal.x = 1040
      }

      if (
        this.monkeyNormal.y < 140 ||
        this.monkeyNormal.y > 940 ||
        (this.monkeyNormal.y > 188 && this.monkeyNormal.y < 328) ||
        (this.monkeyNormal.y > 376 && this.monkeyNormal.y < 516) ||
        (this.monkeyNormal.y > 564 && this.monkeyNormal.y < 704) ||
        (this.monkeyNormal.y > 752 && this.monkeyNormal.y < 892)
      ) {
        this.monkeyNormal.x += 10
      }
    }

    if (keyBackwardObj.isDown || keyBackwardObjAlt.isDown) {
      this.monkeyNormal.y += 10
      if (this.monkeyNormal.y > 1080) {
        this.monkeyNormal.y = 40
      }
      if (
        this.monkeyNormal.x < 140 ||
        this.monkeyNormal.x > 940 ||
        (this.monkeyNormal.x > 188 && this.monkeyNormal.x < 328) ||
        (this.monkeyNormal.x > 376 && this.monkeyNormal.x < 516) ||
        (this.monkeyNormal.x > 564 && this.monkeyNormal.x < 704) ||
        (this.monkeyNormal.x > 752 && this.monkeyNormal.x < 892)
      ) {
        this.monkeyNormal.y -= 10
      }
    }

    if (keyRightObj.isDown || keyRightObjAlt.isDown) {
      this.monkeyNormal.x += 10
      if (this.monkeyNormal.x > 1080) {
        this.monkeyNormal.x = 40
      }

      if (
        this.monkeyNormal.y < 140 ||
        this.monkeyNormal.y > 940 ||
        (this.monkeyNormal.y > 188 && this.monkeyNormal.y < 328) ||
        (this.monkeyNormal.y > 376 && this.monkeyNormal.y < 516) ||
        (this.monkeyNormal.y > 564 && this.monkeyNormal.y < 704) ||
        (this.monkeyNormal.y > 752 && this.monkeyNormal.y < 892)
      ) {
        this.monkeyNormal.x -= 10
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

export default GameSceneNormal
