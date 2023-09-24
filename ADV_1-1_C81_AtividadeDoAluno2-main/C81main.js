
var mouseEvent ="empty"
var lastPositionX, lastPositionY 

canvas =document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

color = "black"

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e)
{


mouseEvent = "mouseDown"
}

canvas.addEventListener("mousemove", myMouseMove)
function myMouseMove(e)
{
    PositionMouseX = e.clientX - canvas.offsetleft;
    PositionMouseY = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mouseDow"){
ctx.beginPath()
ctx.strokeStyle  =color

ctx.moveTo(lastPositionX, lastPositionY)


ctx.lineto(PositionMouseX, PositionMouseY)
ctx.stroke()

  }
  lastPositionX=PositionMouseX  
  lastPositionY=PositionMouseY

}

canvas.addEventListener("mouseup", myMouseUp)
function myMouseUp(e)
{

mouseEvent= "mouseup"
}
canvas.addEventListener("mouseleave", myMouseLeave)
function myMouseLeave(e)
{

mouseEvent= "mouseleave"
}