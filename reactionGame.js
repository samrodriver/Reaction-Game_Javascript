var start = new Date().getTime();

function randomColor()
{
  var letters = "0123456789ABCDEF".split('');
  var color = "#";

  for(i=0; i < 6; i++)
  {
    color+= letters[Math.floor(Math.random()*16)];
  }
  return color;
}

function appearShape()
{
  var top = Math.random()*400;
  var left = Math.random()*800;
  var width = (Math.random()*300)+100;

  if(Math.random() > 0.5)
  {
    document.getElementById('shape').style.borderRadius = "50%";
  }else {
    document.getElementById('shape').style.borderRadius = "0";
  }

  document.getElementById('shape').style.width = width + "px";
  document.getElementById('shape').style.height = width + "px";
  document.getElementById('shape').style.top = top + "px";
  document.getElementById('shape').style.left = left + "px";
  document.getElementById('shape').style.display = "block";
  document.getElementById('shape').style.backgroundColor = randomColor();

  start = new Date().getTime();

}

function timeRun()
{
  setTimeout(appearShape, Math.random()*2000);
}

timeRun();

document.getElementById('shape').onclick = function()
{
  document.getElementById('shape').style.display = "none";

  var end = new Date().getTime();
  var result = (end-start)/1000;

  document.getElementById('resultText').innerHTML = "Your time was " + result + " s";
  timeRun();
}
