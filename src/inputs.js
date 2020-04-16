export default class Input {
  constructor(player) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 90:
          player.goUp();
          break;

        case 83:
          player.goDown();
          break;

        case 81:
          player.goLeft();
          break;

        case 68:
          player.goRight();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 81:
          if (player.speed < 0) player.stop();
          break;

        case 68:
          if (player.speed > 0) player.stop();
          break;
      }
    });
  }
}
