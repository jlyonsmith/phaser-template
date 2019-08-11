import Phaser from "phaser"
import WebFont from "webfontloader"
import autobind from "autobind-decorator"

@autobind
export default class extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" })
  }

  preload() {
    this.fontsReady = false

    this.add.text(100, 100, "loading fonts...")
    this.load.image("loaderBg", "src/assets/images/loader-bg.png")
    this.load.image("loaderBar", "src/assets/images/loader-bar.png")
    this.load.image("mushroom", "src/assets/images/mushroom2.png")

    WebFont.load({
      google: {
        families: ["Bangers"],
      },
      active: this.fontsLoaded,
    })
  }

  update() {
    if (this.fontsReady) {
      this.scene.start("GameScene")
    }
  }

  fontsLoaded() {
    this.fontsReady = true
  }
}
