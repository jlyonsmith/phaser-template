import Phaser from "phaser"

export default class extends Phaser.Scene {
  constructor() {
    super({ key: "SplashScene" })
  }

  preload() {
    this.load.image("mushroom", "src/assets/images/mushroom2.png")
  }

  create() {
    this.scene.start("GameScene")
  }

  update() {}
}
