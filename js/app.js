var boardPieces = ["arrow-heart.svg", "bear.svg", "bouquet.svg", "butterfly.svg", "calendar.svg", "candle.svg", "card.svg", "champagne.svg", "cherries.svg", "chocolate.svg", "conversation-hearts.svg", "cupcake.svg", "daisy.svg", "double-heart.svg", "envelope.svg", "flower-pot.svg", "happy-v-day.svg", "heart-with-bow.svg", "heart.svg", "i-love-you.svg", "lips.svg", "love.svg", "rose.svg", "strawberry.svg"];

var freeSpace = "free-space.svg";

var bingo = ["B", "I", "N", "G", "O"];

var calls = [];

//BINGO Board

function shuffleBoard() {
  boardPieces.sort(function(a, b){return 0.5 - Math.random()});
  for(let i = 0; i <= boardPieces.length; i++) {
    if(i<=4) {
      $("#board-row-1").append(`<div class="card"><img class="board-img" src="img/${boardPieces[i]}"></div>`);
    } else if(i > 4 && i <= 9) {
      $("#board-row-2").append(`<div class="card"><img class="board-img" src="img/${boardPieces[i]}"></div>`);
    } else if(i > 9 && i <= 11) {
      $("#board-row-3").append(`<div class="card"><img class="board-img" src="img/${boardPieces[i]}"></div>`);
    } else if(i == 12) {
      $("#board-row-3").append(`<div class="card"><img class="board-img" id="free-space" src="img/${freeSpace}"></div>`);
    } else if(i > 12 && i <= 14) {
      $("#board-row-3").append(`<div class="card"><img class="board-img" src="img/${boardPieces[i-1]}"></div>`);
    } else if(i > 14 && i <= 19) {
      $("#board-row-4").append(`<div class="card"><img class="board-img" src="img/${boardPieces[i-1]}"></div>`);
    } else {
      $("#board-row-5").append(`<div class="card"><img class="board-img" src="img/${boardPieces[i-1]}"></div>`);
    }

  }
}

shuffleBoard();

$(".board-img").click(function() {
  $(this).toggleClass("selected");
});

//Host

function randomizeNumber(num) {
  return Math.floor(Math.random() * num);
}

function randomizeLetters() {
  let i = randomizeNumber(5);
  return bingo[i];
}

function randomizeImages() {
  let i = randomizeNumber(24);
  return boardPieces[i];
}

$(".randomize-button").click(function() {
  let letter = randomizeLetters();
  let image = randomizeImages();
  if(calls.length > 0) {
    for(let i = 0; i < calls.length; i++) {
      if(calls[i].letter == letter && calls[i].image == image) {
        console.log("matching pair called");
        letter = randomizeLetters();
        image = randomizeImages();
      }
    }
  }
  calls.push({letter: letter, image: image});
  $(".random-letter").html(letter);
  $(".random-img-div").html(`<img class="random-img" src="img/${image}">`);
});

$(".called-link").click(function() {
  for(let i = 0; i < calls.length; i++) {
    $(".called-pairs").append(`<div class="pair"><p class="called-letter">${calls[i].letter}</p><img class="called-img" src="img/${calls[i].image}"></div>`);
  }
});
