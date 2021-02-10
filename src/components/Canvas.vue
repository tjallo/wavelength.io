<template>
  <div id="canvas" class="info">
    <!-- <div> -->
    <div class="info" style="list-style-type: none">
      <span>Left Mouse Click: Select Guess</span>
      <br />
      <span>H: Toggle Showing colours</span>
      <br />
      <span>R: Reset Selection</span>
      <br />
      <span>Enter: Show Score</span>
    </div>
    <h1 v-if="showScore">Score: {{ score }}</h1>
  </div>
</template>

<script>
import P5 from "p5"; // Package from npm

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      score: 0,
      showScore: false,
    };
  },
  methods: {},
  mounted() {
    const script = (p5) => {
      let clicked = false;
      let a1 = 0;
      let show = true;
      let locked = false;

      // eslint-disable-next-line no-unused-vars
      let score = 0;
      const windowHeight = 1000;
      const windowWidth = 1000;
      const PI = Math.PI;
      const arcSize = 0.9;
      const radius = windowWidth / 2 - 0.5 * windowWidth * (1 - arcSize);
      const colWidth = 0.03;
      let centreOffset = -(PI * colWidth * 5) / 2;
      let pos1 = -0.5 * PI + centreOffset;
      let maxRange = [PI, PI * 2 - PI * colWidth * 5];
      // eslint-disable-next-line no-unused-vars
      let twoPointerAngles = [
        [
          -PI * (colWidth * -3 + colWidth / 2) + pos1 + PI * 0.5 - centreOffset,
          -PI * (colWidth * -2 + colWidth / 2) + pos1 + PI * 0.5 - centreOffset,
        ],
        [
          -PI * (colWidth * 1 + colWidth / 2) + pos1 + PI * 0.5 - centreOffset,
          -PI * (colWidth * 2 + colWidth / 2) + pos1 + PI * 0.5 - centreOffset,
        ],
      ];
      // eslint-disable-next-line no-unused-vars
      let threePointerAngles = [
        [
          -PI * (colWidth * -2 + colWidth / 2) + pos1 + PI * 0.5 - centreOffset,
          -PI * (colWidth * -1 + colWidth / 2) + pos1 + PI * 0.5 - centreOffset,
        ],
        [
          -PI * (colWidth * 0 + colWidth / 2) + pos1 + PI * 0.5 - centreOffset,
          -PI * (colWidth * 1 + colWidth / 2) + pos1 + PI * 0.5 - centreOffset,
        ],
      ];
      // eslint-disable-next-line no-unused-vars
      let fourPointerAngles = [
        [
          -PI * (colWidth * -1 + colWidth / 2) + pos1 + PI * 0.5 - centreOffset,
          -PI * (colWidth * 0 + colWidth / 2) + pos1 + PI * 0.5 - centreOffset,
        ],
      ];

      //   const minMouseX = windowWidth * (1 - arcSize);
      //   const maxMouseX = windowWidth * arcSize;
      // eslint-disable-next-line no-unused-vars

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

        if (show) {
          p5.arc_range(pos1, colWidth);
        }
        p5.untilClick();

        twoPointerAngles[0].forEach((x) => {
          p5.circleLine(x);
        });
        twoPointerAngles[1].forEach((x) => {
          p5.circleLine(x);
        });
        threePointerAngles[0].forEach((x) => {
          p5.circleLine(x);
        });
        threePointerAngles[1].forEach((x) => {
          p5.circleLine(x);
        });
        fourPointerAngles[0].forEach((x) => {
          p5.circleLine(x);
        });

        // console.log(
        //   p5.determinePoints(
        //     a1,
        //     twoPointerAngles,
        //     threePointerAngles,
        //     fourPointerAngles
        //   )
        // );
      };

      p5.untilClick = () => {
        if (clicked == false && locked == false) {
          p5.drawMouse();
        } else {
          p5.circleLine(a1);
        }
      };

      p5.mouseClicked = () => {
        clicked = true;
        // console.log(twoPointerAngles[0]);
        // console.log(a1);
      };

      p5.keyPressed = () => {
        // console.log(p5.keyCode);
        // r key
        if (p5.keyCode == 82) {
          clicked = false;
        }
        // h key
        if (p5.keyCode == 72) {
          show = !show;
        }
        // Enter key
        if (p5.keyCode == 13) {
          score = p5.determinePoints(
            a1,
            twoPointerAngles,
            threePointerAngles,
            fourPointerAngles
          );
          locked = true;
          show = true;
          this.score = score;
          this.showScore = true;
        }
        // Right arrow
        if (p5.keyCode == 39) {
          show = false;
          score = 0;
          locked = false;
          clicked = false;
          this.showScore = false;
          this.score = 0;
          pos1 = p5.random(maxRange[0], maxRange[1]);
          p5.updateAngleArrays();
        }
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
        a1 = p5.calculateAngle();
        p5.circleLine(a1);
      };

      // The Range is between PI * [-0.5, 0.5]
      p5.circleLine = (angle) => {
        let x = -radius * Math.sin(angle) + windowWidth / 2;
        let y = -radius * Math.cos(angle) + windowHeight / 2;
        // console.log(angle);

        // console.log(x, y);
        // console.log(p5.mouseX, p5.mouseY)

        p5.line(x, y, windowWidth / 2, windowHeight / 2);
      };

      p5.calculateAngle = () => {
        let angle = p5.mouseX / windowWidth - 0.5;
        if (angle > 0.5) {
          return -PI * 0.5;
        } else if (angle < -0.5) {
          return -PI * -0.5;
        }
        return -PI * angle;
      };

      // eslint-disable-next-line no-unused-vars
      p5.determinePoints = (
        angle,
        twoPointerAngles,
        threePointerAngles,
        fourPointerAngles
      ) => {
        if (p5.determine4Points(angle, fourPointerAngles)) {
          return 4;
        }
        if (p5.determine3Points(angle, threePointerAngles)) {
          return 3;
        }
        if (p5.determine2Points(angle, twoPointerAngles)) {
          return 2;
        }
        return 0;
      };

      p5.determine4Points = (angle, fourPointerAngles) => {
        let minval = Math.min.apply(null, fourPointerAngles[0]);
        let maxval = Math.max.apply(null, fourPointerAngles[0]);
        return angle > minval && angle < maxval;
      };

      p5.determine3Points = (angle, threePointerAngles) => {
        let minval1 = Math.min.apply(null, threePointerAngles[0]);
        let maxval1 = Math.max.apply(null, threePointerAngles[0]);
        let minval2 = Math.min.apply(null, threePointerAngles[1]);
        let maxval2 = Math.max.apply(null, threePointerAngles[1]);
        return (
          (angle > minval1 && angle < maxval1) ||
          (angle > minval2 && angle < maxval2)
        );
      };
      p5.determine2Points = (angle, twoPointerAngles) => {
        let minval1 = Math.min.apply(null, twoPointerAngles[0]);
        let maxval1 = Math.max.apply(null, twoPointerAngles[0]);
        let minval2 = Math.min.apply(null, twoPointerAngles[1]);
        let maxval2 = Math.max.apply(null, twoPointerAngles[1]);
        return (
          (angle > minval1 && angle < maxval1) ||
          (angle > minval2 && angle < maxval2)
        );
      };

      p5.updateAngleArrays = () => {
        // max = -1.335176877775662
        // let c = -0.5 * PI - centreOffset;
        // min = 1.335176877775662
        // let c = 0.5 * PI + centreOffset;
        let c = -pos1 - PI * 0.5 - (5 * colWidth * PI) / 2 + 2 * PI;

        twoPointerAngles = [
          [
            -PI * (colWidth * -3 + colWidth / 2) + c,
            -PI * (colWidth * -2 + colWidth / 2) + c,
          ],
          [
            -PI * (colWidth * 1 + colWidth / 2) + c,
            -PI * (colWidth * 2 + colWidth / 2) + c,
          ],
        ];
        // eslint-disable-next-line no-unused-vars
        threePointerAngles = [
          [
            -PI * (colWidth * -2 + colWidth / 2) + c,
            -PI * (colWidth * -1 + colWidth / 2) + c,
          ],
          [
            -PI * (colWidth * 0 + colWidth / 2) + c,
            -PI * (colWidth * 1 + colWidth / 2) + c,
          ],
        ];
        // eslint-disable-next-line no-unused-vars
        fourPointerAngles = [
          [
            -PI * (colWidth * -1 + colWidth / 2) + c,
            -PI * (colWidth * 0 + colWidth / 2) + c,
          ],
        ];
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
  align-self: center;
}

.info {
  text-align: center;
}

.p5Canvas {
  align-self: center;
}
</style>