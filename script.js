

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

var a ;
var b ;
var c ;
var d ;
var e ;
var f ;



class Game {
    constructor() {
    
    this.players = [];
    
    }
    
    sort() {
        
      let flush = new Dealer;
      flush.deal();
      let poker = new Player;
      poker.assign(flush.sixPlayingCards);
      console.log([poker.player1Card1, poker.player1Card2, poker.player2Card1, poker.player2Card2, poker.river1, poker.river2])

      a = poker.player1Card1.toString();
      b = poker.player1Card2.toString();
      c = poker.player2Card1.toString();
      d = poker.player2Card2.toString();
      e =       poker.river1.toString();
      f =       poker.river2.toString();


    if (a === 'Red' ) {document.getElementById("cardE").src = "img/Red_back.jpg"}

    else if (a === 'Green' ) {document.getElementById("cardE").src = "img/Green_back.jpg"}

    else if (a === 'Purple' ) {document.getElementById("cardE").src = "img/purple_back.jpg"}

    else {document.getElementById("cardE").src = "img/Yellow_back.jpg"}


    if (b === 'Red' ) {document.getElementById("cardF").src = "img/Red_back.jpg"}

    else if (b === 'Green' ) {document.getElementById("cardF").src = "img/Green_back.jpg"}

    else if (b === 'Purple' ) {document.getElementById("cardF").src = "img/purple_back.jpg"}

    else {document.getElementById("cardF").src = "img/Yellow_back.jpg"}


    if (e === 'Red' ) {document.getElementById("cardC").src = "img/Red_back.jpg"}

    else if (e === 'Green' ) {document.getElementById("cardC").src = "img/Green_back.jpg"}

    else if (e === 'Purple' ) {document.getElementById("cardC").src = "img/purple_back.jpg"}

    else {document.getElementById("cardC").src = "img/Yellow_back.jpg"}


    if (f === 'Red' ) {document.getElementById("cardD").src = "img/Red_back.jpg"}

    else if (f === 'Green' ) {document.getElementById("cardD").src = "img/Green_back.jpg"}

    else if (f === 'Purple' ) {document.getElementById("cardD").src = "img/purple_back.jpg"}

    else {document.getElementById("cardD").src = "img/Yellow_back.jpg" }
 
}


}

;

function deal(){
let texas = new Game;
texas.sort();


    };

    

function play () { 

    if (c === 'Red' ) {document.getElementById("cardA").src = "img/Red_back.jpg"}

    else if (c === 'Green' ) {document.getElementById("cardA").src = "img/Green_back.jpg"}

    else if (c === 'Purple' ) {document.getElementById("cardA").src = "img/purple_back.jpg"}

    else {document.getElementById("cardA").src = "img/Yellow_back.jpg"}


    if (d === 'Red' ) {document.getElementById("cardB").src = "img/Red_back.jpg"}

    else if (d === 'Green' ) {document.getElementById("cardB").src = "img/Green_back.jpg"}

    else if (d === 'Purple' ) {document.getElementById("cardB").src = "img/purple_back.jpg"}

    else {document.getElementById("cardB").src = "img/Yellow_back.jpg"}

    
    



    function checkQuads (card1, card2, card3, card4, matchValue)
    { 
      if (card1 === card2 && card2 === card3 && card3 === card4){
      return true;
    }  else {
        return false;
      }
    
    };


    function checkTriple (card1, card2, card3, matchValue) { 
      if (card1 === card2 && card2 === card3){
      
      return true;
        }  else {
        return false;
      }
    
    }
  
    function check (card1, card2, matchValue) { 
      if (card1 === card2) { 
      return true;
    }  
      else {
        return false;
      }
    
    }
        

    function checkAll () 
    {
                if(checkQuads(a,b,e,f) == true) {
          
                             alert("player 1 won");
                     playerCount++;
                      return;
          }

                    else if(checkQuads(c,d,e,f) == true) {
          
                             alert("player 2 won");
                        computerCount++;
                      return;
          }
                
      
      else if ((checkTriple(a,b,e) == true) || checkTriple(a,b,f) == true || checkTriple(a,e,f) == true) {
             alert("player 1 won");
                     playerCount++;
                      return;
            }

        else if ((checkTriple(c,d,e) == true) || checkTriple(c,d,f) == true || checkTriple(f,d,e) == true) {
             alert("player 2 won");
                     computerCount ++;
                      return;
            }


        


        else if ((check(a,b) == true) || check(a,e) == true || check(a,f) == true || check(b,e) == true || check(b,f) == true ) {
             alert("player 1 won");
                     playerCount ++
                      return;
            }


                
        else if ((check(c,d) == true) || check(c,e) == true || check(c,f) == true || check(d,e) == true || check(d,f) == true ) {
             alert("player 2 won");
                     computerCounter ++;
                      return;
            }

             
            
                
            else { alert("It's a draw!")}
} 

function p1Increment() {document.getElementById("p1count").innerHTML = playerCount;}
function p2Increment() {document.getElementById("p2count").innerHTML = computerCount;}
checkAll();
p1Increment();
p2Increment();

console.log(playerCount);
console.log(computerCount);

}

function fold() {
    location.reload();
}




let playerCount = 0;
let computerCount = 0;

