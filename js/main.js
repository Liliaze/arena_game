//import createWeapons from './weapons.js';

var boardGame = [];
var boardGameElement = null;
var weapons = [];

$(document).ready(function () {

 addTitleContent();
 initWeapons();
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

function initWeapons() {
 weapons[0] = createWeapon(10, 1, 10, 0, "sword", "image/sword.jpg");
 weapons[1] = createWeapon(50, 4, 1, 2, "bomb", "image/bomb.jpg");
 weapons[3] = createWeapon(20, 10, 5, 0, "shuriken", "image/shuriken.jpg");
 weapons[4] = createWeapon(25, 1, 8, 0, "hammer", "image/hammer.jpg");
};

function createWeapon(damage, distance, durability, delay, name, imageSrc) {
 return {
  damage, durability, delay, name, imageSrc
 }
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
    $('<img>').attr('src', 'image/bloc.jpg').attr('row', i).attr('column', j).addClass('block').appendTo('#' + trId);
   }
   else {
    $('<img>').attr('src', 'image/ground.jpg').attr('row', i).attr('column', j).addClass('ground').appendTo('#' + trId);
   }
  }
 }

 weapons.forEach(
  function (weapon) {
   const randomPositionRow = Math.floor(Math.random() * (boardGameSize + 1)).toString();
   const randomPositionColumn = Math.floor(Math.random() * (boardGameSize + 1)).toString();
   console.log('random =' + randomPositionRow + "," + randomPositionColumn);
   $('img').each(function () {
    if ($(this).attr('row') == randomPositionRow && $(this).attr('column') == randomPositionColumn) {
     //$(this).click(function () {
     $(this).replaceWith($('<img>').attr('src', weapon.imageSrc).addClass(weapon.name));
     //});
    }
   });
  });

}
