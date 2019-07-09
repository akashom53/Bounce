class Config {
  constructor() {
    this.width = 900
    this.aspectRatio = 16 / 9
    this.height = this.width / this.aspectRatio

    this.bgColor = {r:220, g:220, b:255}
  }

}

let config = new Config()