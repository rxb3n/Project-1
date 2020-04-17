export default class Input {
  constructor(player) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 38:
          player.goUp();
          break;

        case 40:
          player.goDown();
          break;

        case 37:
          player.goLeft();
          break;

        case 39:
          player.goRight();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (player.speed < 0) player.stop();
          break;

          case 38:
            break;

            case 40:

        case 39:
          if (player.speed > 0) player.stop();
          break;
      }
    });
  }
}
