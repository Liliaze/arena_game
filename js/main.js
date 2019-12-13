//import createWeapons from './weapons.js';

var boardGame = [];
var boardGameElement = null;
var weapons = [];
var players = [];

$(document).ready(function () {

 initTitleContent();
 initWeapons();
 initPlayers();
 newBoardGame();
});


function initTitleContent() {
 $('#firstTitle').html('ARENA GAME');
 $('#secondTitle').html('Fight for your life');
 $('#scoreP1').html('Player 1 : Arya');
 $('#scoreP2').html('Player 2 : John');
 $('#lifeP1').html('100 / 100');
 $('#lifeP2').html('100 / 100');
}

function initWeapons() {
 weapons.push(createWeapon(10, 1, 10, 0, "sword", "image/sword.jpg"));
 weapons.push(createWeapon(50, 4, 1, 2, "bomb", "image/bomb.jpg"));
 weapons.push(createWeapon(20, 10, 5, 0, "shuriken", "image/shuriken.jpg"));
 weapons.push(createWeapon(25, 1, 8, 0, "hammer", "image/hammer.jpg"));
};

function initPlayers() {
 players.push(createPlayer(100, 'John', "image/blackPlayer.jpg"));
 players.push(createPlayer(100, 'Arya', "image/bluePlayer.jpg"));
}

function createWeapon(damage, distance, durability, delay, name, imageSrc) {
 return {
  damage, durability, delay, name, imageSrc
 }
}

function createPlayer(life, name, imageSrc) {
 return {
  life, name, imageSrc
 }
}

function newBoardGame() {

 const maxNumber = 20;
 const minNumber = 10;
 boardGame = [];
 boardGameSize = 12; //Math.floor(Math.random() * (maxNumber + 1) + minNumber);
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

 for (let i = 0; i < weapons.length; i++) {
  const randomPositionRow = Math.floor(Math.random() * boardGameSize).toString();
  const randomPositionColumn = Math.floor(Math.random() * boardGameSize).toString();
  console.log('random =' + randomPositionRow + "," + randomPositionColumn + "," + i + ":" + weapons[i].name);
  $('img').each(function () {
   if ($(this).attr('row') == randomPositionRow && $(this).attr('column') == randomPositionColumn) {
    if ($(this).hasClass('ground')) {
     $(this).replaceWith($('<img>').attr('row', $(this).attr('row')).attr('column', $(this).attr('column')).attr('src', weapons[i].imageSrc).addClass(weapons[i].name));
    } else {
     i--;
     return;
    }
   }
  });
 }

 for (let i = 0; i < players.length; i++) {
  const randomPositionRow = Math.floor(Math.random() * boardGameSize).toString();
  const randomPositionColumn = Math.floor(Math.random() * boardGameSize).toString();
  console.log('random =' + randomPositionRow + "," + randomPositionColumn + "," + i + "," + players[i].name);
  $('img').each(function () {
   if ($(this).attr('row') == randomPositionRow && $(this).attr('column') == randomPositionColumn) {
    if ($(this).hasClass('ground')) {
     $(this).replaceWith($('<img>').attr('row', $(this).attr('row')).attr('column', $(this).attr('column')).attr('src', players[i].imageSrc).attr('playerNumber', i).addClass('player'));
    } else {
     i--;
     return;
    }
   }
  });
 };
}
