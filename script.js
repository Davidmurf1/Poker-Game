

const numbers =['Ace','2', '3', '4', '5', '6', '7', '8','9','10','Jack','Queen','King'];
const suits = [' of Hearts', ' of Clubs', ' of Diamonds', ' of Spades' ];
deck = [];

function gather () {
for (let i = 0; i < numbers.length; i++) {
for (let j=0 ; j < suits.length; j++){

 deck.push(numbers[i] + suits[j])  }}
}
gather()

console.log(deck)







 /* Fisher-Yates Shuffle
 Note::
 X begins at index position 1, then loops in reverse through deck
 Y is a random number, the original lenght of X
 generate number between 0-52,then 52 etc
 assigns temp the value of x
 then assigns x the position of y
 the temp the position of y;


	function shuffle (deck) {
 	 var x = 0
    , y = 0
    , temp = null

     

  for (x = array.length - 1; x > 0; x -= 1) {
    y = Math.floor(Math.random() * (x + 1))
    temp = deck[x]
    deck[x] = deck[y]
    deck[y] = temp
  }
}

document.write(array);

*/

deck.shuffle = function() {

var i = this.length, j, temp;
while ( --i > 0) 
{
j = Math.floor(Math.random() * (i + 1));
temp = this[j];
this[j] = this[i];
this[i] = temp;
}
return this;
}

var result = deck.shuffle();
console.log(result)


/*Include 0 in selection as it is a card */
let empty = [];

for (i=0; i < 7; i++) {
function randomSelect(minimum, maximum) {
return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}
let choice = randomSelect(0,53)
let pick = empty.push(choice);
}
console.log(empty)


let cardA = result[empty[0]];
let cardB = result[empty[1]];
let cardC = result[empty[2]];
let cardD = result[empty[3]];
let cardE = result[empty[4]];
let cardF = result[empty[5]];
let cardG = result[empty[6]];

console.log(cardA);
console.log(cardB);
console.log(cardC);
console.log(cardD);
console.log(cardE);
console.log(cardF);
console.log(cardG);