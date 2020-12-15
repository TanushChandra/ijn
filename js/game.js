class Game {
  constructor(){}
   
 //getState() will simply read the gamestate from the database
  getState(){
    var gameStateRef  = database.ref('gameState');
    
    //databaseReference.on() creates a listener which keeps listening to the gameState from the database.
      gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
   // update(state) will update the gameState in the database to a value passed to it inside the parentheses.
  update(state){

    //> databaseReference.update() will update the database reference. Here "/" refers to the main database inside which gameState is created.
      database.ref('/').update({
      gameState: state
    });
  }
 // When game will start this will happen 
  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
