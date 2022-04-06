window.onload = function () {
  const fondo = new Background(canvas.clientWidth, canvas.height);
  const character = new Character(50, 50, 100, 100);
  document.getElementById("start-button").onclick = function () {
    if (!requestId) {
      startGame();
    }
  };

  function startGame() {
    audio.play()
    requestId = requestAnimationFrame(updateGame);
  }

  function gameOver() {
    audio.pause()
    fondo.gameOver();
    requestId = undefined;
  }

  //generar abejas
  function generateBees() {
    if (frames % 160 === 0) {
      //limitar el tiempo de los enemigos
      let y = Math.floor(Math.random() * (800 - 10)) + 50;

      const bee = new Bees(y, 50, 50);

      bees.push(bee);
    }
  }

  function drawBees() {
    bees.forEach((bee, index_bee) => {
      if (character.collision(bee)) {
        gameOver();
      }
      bee.draw();
    });
  }

  //generar mariposas
  function generateButterflies() {
    if (frames % 170 === 0) {
      let y = Math.floor(Math.random() * (800 - 10)) + 50;
      const butterfly = new Butterfly(y + 10, 50, 50);
      butterflies.push(butterfly);
    }
  }

  function drawButterflies() {
    butterflies.forEach((butterfly, index_butterfly) => {
      //metodo
      butterfly.draw();

      //collision
      if (character.collision(butterfly)) {
        butterflies.splice(index_butterfly, 1);
        points += 1;
      }
    });
  }
  //motor del juego (updateGame)
  function updateGame() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fondo.draw();
    ctx.font = "70px Arial";
    ctx.fillText(`Score: ${points}`, 600, 80);

    character.draw();
    generateBees();
    drawBees();
    generateButterflies();
    drawButterflies();

    if (points >= 5) {
      requestId = undefined;
      console.log("winner");
      ctx.font = "70px Arial";
      ctx.fillText("Winner!",500,500);
    }
    if (requestId) {
      requestAnimationFrame(updateGame);
    }
  }

  //evento para manejar al personaje
  addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.keyCode === 38) {
      //up arrow
      character.top();
    }
    if (event.keyCode === 40) {
      //down arrow
      character.bottom();
    }
    if (event.keyCode === 37) {
      //left arrow
      character.left();
    }
    if (event.keyCode === 39) {
      character.right(); //right arrow
    }
  });
}; //end windown.onload
