//background
class Background{
    //constructor
    constructor(w,h,points){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height= h;
        this.image = new Image();
        this.image.src = "images/fondo.png" 
        this.gamerOverImg = new Image();
        this.gamerOverImg.src = "images/GameOver.png"
    }
    //metodos lo que hace
    draw(){
        if(this.x < -canvas.width){
            this.x = 0
        }
        this.x --;

        //drawImage(Imagen,x,y,w,h)
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(
        this.image,
        this.x + this.width,
        this.y,
        this.width,
        this.height
        )
    }

    gameOver(){
        ctx.drawImage(
            this.gamerOverImg,
            300,
            140,
            400,
            400
        )
    }
}
//personaje
class Character{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height= h;
        this.image = new Image();
        this.image.src = "images/girl.png" 

    }

   draw() {
        
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)

    }

    left() {
         this.x -= 5
    }

    right(){
        this.x += 5
    }

    top(){
        this.y -= 5
    }

    bottom(){
        this.y += 5
    }

//collision
    collision(item){

        return (
            this.x < item.x + item.width &&
            this.x+ this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }

}
//abejas

class Bees{
    constructor(y,w,h){
        this.x = canvas.width;
        this.y = y;
        this.width = w;
        this.height= h;
        this.image = new Image();
        this.image.src = "images/abeja.png"
    }

    draw(){
        if(frames % 10 === 0){
            this.x -= 7;
        }
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}

class Butterfly extends Bees{

constructor(y,w,h){
    super(y,w,h)
    this.image.src = "images/mariposa2.png"

  }
}