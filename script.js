

class card {
    constructor() {
        this.card = card;
        this.img = img;
    }
}

class Deck {
    constructor(){
        this.cards = [];
    }
        assemble() {
        let colours = ['Red', 'Green', 'Purple', 'Yellow'];
        let img = [];
       for (let i = 0; i < 4; i++) {
        for (let i = 0; i < 4; i++){
            this.cards.push(colours[i])}
        }
       }
       shuffle(){
        let i = this.cards.length, j, temp;
        while ( --i > 0) 
        {
        j = Math.floor(Math.random() * (i + 1));
        temp = this.cards[j];
        this.cards[j] = this.cards[i];
        [j] = this.cards[i];
        this.cards[i] = temp;
        }
        return this.cards;
}
       }
   
    class Dealer {
    constructor() {
    this.sixPlayingCards = [];
    }
    deal(){
    let play = new Deck;
    play.assemble();
    play.shuffle();
    this.sixPlayingCards = play.cards.slice(0,6);
    
}

}

class Player {
    constructor(){
        this.player1Card1 = [];
        this.player1Card2 = [];
        this.player2Card1 = [];
        this.player2Card2 = [];
        this.river1 = [];
         this.river2 = [];
    }
    assign(cards) {
                this.player1Card1 = cards.slice(0,1);
                this.player1Card2 = cards.slice(1,2);
                this.player2Card1 = cards.slice(2,3);
                this.player2Card2 = cards.slice(3,4);
                this.river1 =        cards.slice(4,5);
                this.river2 =        cards.slice(5,6);
    }
}

class Game {
    constructor() {
    
    this.players = [];
    

    }
    play() {
        
      let go = new Dealer;
      go.deal();
      let poker = new Player;
      poker.assign(go.sixPlayingCards);
      console.log([poker.player1Card1, poker.player1Card2, poker.player2Card1, poker.player2Card2, poker.river1, poker.river2])

      var a = poker.player1Card1.toString();
      var b = poker.player1Card2.toString();
      var c = poker.player2Card1.toString();
      var d = poker.player2Card2.toString();
      var e =       poker.river1.toString();
      var f =       poker.river2.toString();

 /* 
 if (c === 'Red' ) {document.getElementById("cardA").src = "img/Red_back.jpg"}

    else if (c === 'Green' ) {document.getElementById("cardA").src = "img/Green_back.jpg"}

    else if (c === 'Purple' ) {document.getElementById("cardA").src = "img/purple_back.jpg"}

    else {document.getElementById("cardA").src = "img/Yellow_back.jpg"}


    if (d === 'Red' ) {document.getElementById("cardB").src = "img/Red_back.jpg"}

    else if (d === 'Green' ) {document.getElementById("cardB").src = "img/Green_back.jpg"}

    else if (d === 'Purple' ) {document.getElementById("cardB").src = "img/purple_back.jpg"}

    else {document.getElementById("cardB").src = "img/Yellow_back.jpg"}




   */




    if (a === 'Red' ) {document.getElementById("cardC").src = "img/Red_back.jpg"}

    else if (a === 'Green' ) {document.getElementById("cardC").src = "img/Green_back.jpg"}

    else if (a === 'Purple' ) {document.getElementById("cardC").src = "img/purple_back.jpg"}

    else {document.getElementById("cardC").src = "img/Yellow_back.jpg"}


    if (b === 'Red' ) {document.getElementById("cardD").src = "img/Red_back.jpg"}

    else if (b === 'Green' ) {document.getElementById("cardD").src = "img/Green_back.jpg"}

    else if (b === 'Purple' ) {document.getElementById("cardD").src = "img/purple_back.jpg"}

    else {document.getElementById("cardD").src = "img/Yellow_back.jpg"}


    if (e === 'Red' ) {document.getElementById("cardE").src = "img/Red_back.jpg"}

    else if (e === 'Green' ) {document.getElementById("cardE").src = "img/Green_back.jpg"}

    else if (e === 'Purple' ) {document.getElementById("cardE").src = "img/purple_back.jpg"}

    else {document.getElementById("cardE").src = "img/Yellow_back.jpg"}


    if (f === 'Red' ) {document.getElementById("cardF").src = "img/Red_back.jpg"}

    else if (f === 'Green' ) {document.getElementById("cardF").src = "img/Green_back.jpg"}

    else if (f === 'Purple' ) {document.getElementById("cardF").src = "img/purple_back.jpg"}

    else {document.getElementById("cardF").src = "img/Yellow_back.jpg"}
 
}
};

function deal(){
let goo = new Game;
goo.play();


    }



/*
function play ()
if 

*/




 



 
/*
 ***Card Rankings***
-- High card - player with highest value card in the event of no other combination
-- Pair - Any combination of two of the same value cards
-- Two pair - Any combination of two of the same value cards, held twice
-- Three of a kind - Any combination of three of the same value cards
-- Straight - Any combination of five cards in cronological incrementing order
-- Flush - Five cards of equal suit
-- Full house - A combination of three and two pairs of any combination
-- Four of a kind - Any combination of four of the same value cards
-- Straight Flush - A combination of five cards of the same suit in cronological order
-- Royal Flush - Highest combination, the Broadway of Diamonds (K,Q,J,10,A)

***LOGIC***
will use if statements 

if (cardA = 2 && cardB || cardC || cardD ||cardE || cardF || cardG ||  = 2 ) {return 'pair'}

  */
