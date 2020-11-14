class papper class {
    constructor(x,y,width,height)
   var options {
       isStactic:false
       restitution:0.3
       friction:0.5
       density:1.5,
   }
   this.body-Bodies.rectangle(x,y,width,height,options )
   this.width=width
   this.height=height
   World.add(world.this.body);
}
display(){
    var pos-this.body .position;
    rectMode(CENTER)
    rotate(angle)
    strokeWeight(4);
    stroke("red")

}
function keyPressed()
if (keyCode===UP_ARROW){
Matter.body.applyForce(papperObject.body,papperObject.body.position,{x:85;y:-85})


}

