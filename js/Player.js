class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.rank = 0;
    this.fuel = 185;
    this.life = 185;
    this.score = 0;
  }

  getCount(){
   database.ref("playerCount").on("value", (data)=>{
     playerCount = data.val();
     console.log(playerCount);
   }) 
  }

  updateCount(count){
    database.ref("/").update({
      playerCount : count
    })
  }
 
  addPlayer(){
    var plrIndex = "players/player"+this.index
    if(this.index === 1){
      this.positionX = width/2 - 100 ;
    }
    else {
      this.positionX = width/2 + 100 ;
    }
    database.ref(plrIndex).update({
      name : this.name,
      positionX : this.positionX,
      positionY : this.positionY,
      rank : this.rank,
      score:this.score,
      life : this.life
    });
  }

  //Bp
  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    });
  }


  getDistance(){
    var playerDistanceRef = database.ref("players/player" + this.index).on("value", data=>{
      var data = data.val()
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    })
    }

    update(){
      var playerIndex = "players/player"+ this.index;
      database.ref(playerIndex).update({
      positionX : this.positionX,
      positionY : this.positionY,
      rank : this.rank,
      score : this.score,
      life : this.life,
      fuel : this.fuel
      })
    }

    getCarsAtEnd(){
      database.ref("carsAtEnd").on("value",data => {
        this.rank = data.val();
      })
    }
    //calling a function using a class name that function needs to be static 
    static updateCarsAtEnd(rank){
      database.ref("/").update({
        carsAtEnd : rank
      })
    }
}
