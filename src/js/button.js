class Button {
    constructor(x, y, label, scene, callback) {
      const button = scene.add
        .text(x, y, label)
        .setOrigin(0.5)
        .setPadding(10)
        .setStyle({
          backgroundColor: "#FFFF",
          fontSize: "50px",
          fill: "#000",
          fontFamily: "TimesNewRoman",
        })
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => callback())
        .on("pointerover", () => button.setStyle({ fill: "#0000ff" }))
        .on("pointerout", () => button.setStyle({ fill: "#000" }));
    }
  }
  
  export default Button;