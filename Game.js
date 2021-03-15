class Game{
    constructor(){
        
    }
    getstate(){
var gamestateref=database.ref('gamestate')
gamestateref.on("value",function(data){
    gamestate = data.val()
})

    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
     
    async start(){ 
        if(gamestate === 0){
            
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value"); 
            if(playerCountRef.exists()){ 
            playerCount = playerCountRef.val();
            player.getCount();
               } 
                 form = new Form() 
                 form.display();
                 }
                 car1 = createSprite(100,200)
                 car1.addImage(car1i);
                 car2 = createSprite(300,200);
                 car2.addImage(car2i);
                 car3 = createSprite(500,200);
                 car3.addImage(car3i);
                 car4 = createSprite(700,200);
                 car4.addImage(car4i);
                 cars =[car1,car2,car3,car4];

     }
     play(){
        form.hide()
        //textSize (30)
        //text("GAME START",120,100)
        Player.getPlayerInfo()
        player.getCarsAtEnd()
        if(allPlayers !== undefined){
            background("#c68767")
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            //var displayPosition =130
            var index = 0;
            var x = 175;
            var y ;
        for(var plr in allPlayers){ 
            index = index + 1;
            x = x + 200;
            y = displayHeight - allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;
            if(index === player.index){
                stroke(10)
                fill("red")
                ellipse(x,y,60,100)

                cars[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;

            }
        }
          //  displayPosition+=20
            //textSize(50)
            //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);

        }
        if(keyIsDown(UP_ARROW) && player.index!==null){ 
            player.distance +=10; 
            player.update()
        }
        if(player.distance>3860){
            
            gamestate = 2
            
            player.rank+=1
            Player.updateCarsAtEnd(player.rank)
        }
       drawSprites();
     }
     end(){
         
         console.log("game ended")
        console.log(player.rank)
        }
}
