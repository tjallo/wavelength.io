<template>
  <div id="canvas">
    <!-- <div> -->
  </div>
</template>

<script>
import P5 from "p5"; // Package from npm

export default {
  name: "App",
  components: {},
  mounted() {
    const script = (p5) => {
      const windowHeight = 1000;
      const windowWidth = 1000;
      const PI = Math.PI;
      const arcSize = 0.75;
      const radius = windowWidth / 2 - 0.5 * windowWidth * (1 - arcSize);
      const colWidth = 0.04;
      //   const minMouseX = windowWidth * (1 - arcSize);
      //   const maxMouseX = windowWidth * arcSize;
      // eslint-disable-next-line no-unused-vars
      const twoPointerAngles = [
        [
          -PI * (colWidth * -2 + colWidth / 2),
          -PI * (colWidth * -3 + colWidth / 2),
        ],
        [
          -PI * (colWidth * 2 + colWidth / 2),
          -PI * (colWidth * 1 + colWidth / 2),
        ],
      ];
      // eslint-disable-next-line no-unused-vars
      const threePointerAngles = [
        [
          -PI * (colWidth * -2 + colWidth / 2),
          -PI * (colWidth * -1 + colWidth / 2),
        ],
        [
          -PI * (colWidth * 0 + colWidth / 2),
          -PI * (colWidth * 1 + colWidth / 2),
        ],
      ];
      // eslint-disable-next-line no-unused-vars
      const onePointerAngles = [
        [
          -PI * (colWidth * 0 + colWidth / 2),
          -PI * (colWidth * -1 + colWidth / 2),
        ],
      ];
      //   const HALF_PI = Math.PI * 0.5;
      // These are your typical setup() and draw() methods
      p5.setup = () => {
        p5.createCanvas(windowHeight, windowWidth);
        // p5.frameRate(2);
      };
      p5.draw = () => {
        p5.clear();
        p5.fill(255);
        p5.arc(
          windowHeight / 2,
          windowWidth / 2,
          windowWidth * arcSize,
          windowWidth * arcSize,
          PI,
          0,
          "CHORD"
        );

        // let maxRange = [PI, PI * 2 - PI * colWidth * 5];
        let centreOffset = -(PI * colWidth * 5) / 2;

        // let randNr = p5.random(maxRange[0], maxRange[1]);
        let pos1 = -0.5 * PI + centreOffset;
        p5.arc_range(pos1, colWidth);
        p5.drawMouse();
      };

      p5.arc_range = (start, colWidth) => {
        let color1 = p5.color(255, 196, 3);
        let color2 = p5.color(255, 124, 52);
        let color3 = p5.color(184, 213, 231);

        p5.fill(color1);
        p5.custom_arc(start, colWidth);
        p5.fill(color2);
        p5.custom_arc(start + colWidth * PI, colWidth);
        p5.fill(color3);
        p5.custom_arc(start + colWidth * PI * 2, colWidth);
        p5.fill(color2);
        p5.custom_arc(start + colWidth * PI * 3, colWidth);
        p5.fill(color1);
        p5.custom_arc(start + colWidth * PI * 4, colWidth);
      };

      p5.custom_arc = (r1, colWidth) => {
        let r2 = r1 + colWidth * PI;
        p5.arc(
          windowHeight / 2,
          windowWidth / 2,
          windowWidth * arcSize,
          windowWidth * arcSize,
          r1,
          r2
        );
      };

      p5.drawMouse = () => {
        // p5.noStroke();
        // p5.ellipse(p5.mouseX, p5.mouseY, 40, 40);
        // p5.line(p5.mouseX, p5.mouseY, p5.mouseX + 20, p5.mouseY + 20);
        // p5.line(200, 200, windowWidth / 2, windowHeight / 2);

        // let radius = windowWidth / 2 - (windowWidth / 2) * arcSize;
        // let xPos = 0.5 * windowWidth * (1 - arcSize);

        // p5.line(xPos, windowHeight, xPos, 0);

        // let cur = colWidth * -2 + colWidth / 2;

        // eslint-disable-next-line no-unused-vars

        // onePointerAngles.forEach((x) => {
        //   x.forEach((y) => {
        //     p5.circleLine(y);
        //   });
        // });
        p5.circleLine(-PI * p5.calculateAngle());
      };

      // The Range is between PI * [-0.5, 0.5]
      p5.circleLine = (angle) => {
        let x = -radius * Math.sin(angle) + windowWidth / 2;
        let y = -radius * Math.cos(angle) + windowHeight / 2;

        // console.log(x, y);
        // console.log(p5.mouseX, p5.mouseY)

        p5.line(x, y, windowWidth / 2, windowHeight / 2);
      };

      p5.calculateAngle = () => {
        let angle = p5.mouseX / windowWidth - 0.5;
        if (angle > 0.5) {
          return 0.5;
        } else if (angle < -0.5) {
          return -0.5;
        }
        return angle;
      };
    }; // Attach the canvas to the div
    // eslint-disable-next-line no-unused-vars
    const p5canvas = new P5(script, "canvas");
  },
};
</script>

<style>
* {
  background-color: purple;
}
</style>