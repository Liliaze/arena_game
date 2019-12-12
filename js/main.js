var boardGame = [];
var boardGameElement = null;

$(document).ready(function () {

 addTitleContent();
 newBoardGame();
});

function addTitleContent() {
 $('#firstTitle').html('ARENA GAME');
 $('#secondTitle').html('Fight for your life');
 $('#scoreP1').html('Player 1 : Arya');
 $('#scoreP2').html('Player 2 : John');
 $('#lifeP1').html('100 / 100');
 $('#lifeP2').html('100 / 100');
}

function newBoardGame() {

 const maxNumber = 20;
 const minNumber = 10;
 boardGame = [];
 boardGameSize = 15; //Math.floor(Math.random() * (maxNumber + 1) + minNumber);
 console.log('boardGameSize = ' + boardGameSize);
 numberOfBlock = boardGameSize * boardGameSize * 0.1 * 2;
 $('<table>').appendTo('#boardGame');
 for (let i = 0; i < boardGameSize; i++) {
  $('<tr>').attr('id', i.toString()).appendTo('table');
  console.log('i = ' + i);

  for (let j = 0; j < boardGameSize; j++) {
   console.log('j = ' + j);

   let trId = i + '_' + j;
   $('<td>').attr('id', trId.toString()).appendTo('#' + i.toString());
   let block = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
   if (block % 3 == 0 && block % 2 == 0 && numberOfBlock-- >= 0) {
    $('<img>').attr('src', 'image/bloc.jpg').addClass('block').appendTo('#' + trId);
   }
   else {
    $('<img>').attr('src', 'image/ground.jpg').addClass('ground').appendTo('#' + trId);
   }
  }
 }
 $('img').each(function () {
  if ($(this).hasClass("ground")) {
   $(this).replaceWith($('<img>').attr('src', 'image/sword.jpg').addClass('sword'));
  }
 });

}
