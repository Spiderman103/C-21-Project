class Ground
{
     constructor(x,y,w,h){
         this.x = x;
         this.y = y;
         this.w = w;
         this.h = h;

         this.body = Bodies.rectangle(x,y,w,h,ball_options);
         World.add(world,this.body);
     }
     display(){
       this.body.display();

     }
}