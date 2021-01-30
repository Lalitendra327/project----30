class block{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){
      if(this.body.speed < 3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rect(0, 0, this.width, this.height);
        pop(); 
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         //tint(255,this.Visiblity);
         //rect(this.body.position.x, this.body.position.y,this.width,this.height);
         pop();
       }
      }
      
      
      /*display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rect(0, 0, this.width, this.height);
        pop();
      }*/
}


/*if(this.body.speed < 3){
  push();
  translate(this.body.position.x, this.body.position.y);
  rect(0, 0, this.width, this.height);
  pop();
 }
 else{
   World.remove(world, this.body);
   push();
   this.Visiblity = this.Visiblity - 5;
   tint(255,this.Visiblity);
   rect(this.body.position.x, this.body.position.y,this.body.width,this.body.height);
   pop();
 }*/
 
