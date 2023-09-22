
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}





// The play functions are "async" functions and give a true "sleep" action when 
// coupled with sleepNow definiiton and then call to sleepNow from within
// the loop

function leftPrev() {
  var x = document.getElementById("imageNumberL").value
  x = Number(x)
  x = x - 1
  x = x.toString()
  xPadded = x.padStart(3,0)
  var s = 'document.getElementById("leftNext").src="../golfers/gaito/images/gaito-001.jpg";'
  var sNew = s.replace("-001", "-"+xPadded)
  if (x > 0){
       //eval(sNew)
       const F = new Function(sNew) 
       F();      
       document.getElementById("imageNumberL").value = x
  }          
}


function leftNext() {
  startImageNumber = document.getElementById("imageNumberL").value
  // if user just finished playing their image, the frame
  // counter box will be the same as the total image
  // counter.  In this case, reset the image counter to 1
  lastImageNumber = document.getElementById("totalImagesL").value
  if (startImageNumber == lastImageNumber){
    startImageNumber = 1
    document.getElementById("imageNumberL").value = "1"
  }
  var x = document.getElementById("imageNumberL").value
  x = Number(x)
  x = x + 1
  x = x.toString()
  xPadded = x.padStart(3,0)
  var s = 'document.getElementById("leftNext").src="../golfers/gaito/images/gaito-001.jpg";'
  var sNew = s.replace("gaito-001", "gaito-"+xPadded)

 // x = Number(x)
 // x = x + 1
  var xTotal = document.getElementById("totalImagesL").value

  xTotal = Number(xTotal)
  if (x <= xTotal){
       //eval(sNew)
       const F = new Function(sNew) 
       F();    
       document.getElementById("imageNumberL").value = x 
  }          
}

async function leftPlay(){
  //This JavaScript sleep() function works exactly as you might expect, because await causes the synchronous execution of the code to pause until the Promise is resolved.
  // disable the Play button so that it can't be reclicked for now
  document.getElementById("lp").disabled = true
  const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
  startImageNumber = document.getElementById("imageNumberL").value
  // if user just finished playing their image, the frame
  // counter box will be the same as the total image
  // counter.  In this case, reset the image counter to 1
  lastImageNumber = document.getElementById("totalImagesL").value
  if (startImageNumber == lastImageNumber){
    startImageNumber = 1
    document.getElementById("imageNumberL").value = "1"
  }
    for (var i = startImageNumber ; i <= 90; i++) {
      document.getElementById("imageNumberL").value = i
      var p = document.getElementById("pauseFlagL").value
      if (p==1){
        document.getElementById("pauseFlagL").value = "0"
        //document.getElementById("imageNumberL").value = i
       break
       }
      await sleepNow(200)

      lp(i)
    }
    // reset the image count text bos when done with the loop
    document.getElementById("imageNumberL").value = i - 1
    document.getElementById("lp").disabled = false  // reset play button
}


function lp(i)
{
    var x = i.toString();
    xPadded = x.padStart(3,0)
    var s = 'document.getElementById("leftNext").src="../golfers/gaito/images/gaito-001.jpg";'
    var sNew = s.replace("gaito-001", "gaito-"+xPadded)
    //eval(sNew)
    const F = new Function(sNew) 
    F(); 
    //alert(sNew)
}

function leftPause(){
  // we use an html text box as a switch to exit the play loop.
  // the text box is set to true by the pause button and the
  // loop break when the switch is true  
  document.getElementById("pauseFlagL").value = 1
}

////////////////////// Right side functions ///////////////////////

function rightPrev() {
  var x = document.getElementById("imageNumberR").value
  x = Number(x)
  x = x - 1
  x = x.toString()
  xPadded = x.padStart(3,0)
  var s = 'document.getElementById("rightNext").src="../golfers/revak/images/ezgif-frame-001.jpg";'
  var sNew = s.replace("ezgif-frame-001", "ezgif-frame-"+xPadded)

  if (x > 0){
       //eval(sNew)
       const F = new Function(sNew) 
       F();      
       document.getElementById("imageNumberR").value = x
  }          
}


function rightNext() {
  startImageNumber = document.getElementById("imageNumberR").value
  // if user just finished playing their image, the frame
  // counter box will be the same as the total image
  // counter.  In this case, reset the image counter to 1
  lastImageNumber = document.getElementById("totalImagesR").value
  if (startImageNumber == lastImageNumber){
    startImageNumber = 1
    document.getElementById("imageNumberR").value = "1"
  }
  var x = document.getElementById("imageNumberR").value
  x = Number(x)
  x = x + 1
  x = x.toString()
  xPadded = x.padStart(3,0)
  var s = 'document.getElementById("rightNext").src="../golfers/revak/images/ezgif-frame-001.jpg";'
  var sNew = s.replace("ezgif-frame-001", "ezgif-frame-"+xPadded)
  
  var xTotal = document.getElementById("totalImagesR").value

  xTotal = Number(xTotal)
  if (x <= xTotal){
       //eval(sNew)
       const F = new Function(sNew) 
       F();      
       document.getElementById("imageNumberR").value = x
  }          
}

async function rightPlay(){
  //This JavaScript sleep() function works exactly as you might expect, because await causes the synchronous execution of the code to pause until the Promise is resolved.
  // set play button to false to prevent reclicking while playing 
  document.getElementById("rp").disabled = true 
  const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
  startImageNumber = document.getElementById("imageNumberR").value
  // if user just finished playing their image, the frame
  // counter box will be the same as the total imag
  // counter.  In this case, reset the image counter to 1
  lastImageNumber = document.getElementById("totalImagesR").value
  if (startImageNumber == lastImageNumber){
    startImageNumber = 1
    document.getElementById("imageNumberR").value = "1"
  }
    for (var i = startImageNumber ; i <= 48; i++) {
      //setInterval(lp,1000,i)
      var p = document.getElementById("pauseFlagR").value
       document.getElementById("imageNumberR").value = i -1
      if (p==1){
        document.getElementById("pauseFlagR").value = "0"
       // document.getElementById("imageNumberR").value = i
       break
       }
      await sleepNow(200)

      rp(i)
    }
    // reset the image count text bos when done with the loop
    document.getElementById("imageNumberR").value = i -1
    document.getElementById("rp").disabled = false  // reset play button
}


function rp(i)
{
    var x = i.toString();
    xPadded = x.padStart(3,0)
    var s = 'document.getElementById("rightNext").src="../golfers/revak/images/ezgif-frame-001.jpg";'
    var sNew = s.replace("ezgif-frame-001", "ezgif-frame-"+xPadded)
    //eval(sNew)
    const F = new Function(sNew) 
    F(); 
    //alert(sNew)
}

function rightPause(){
  // we use an html text box as a switch to exit the play loop.
  // the text box is set to true by the pause button and the
  // loop break when the switch is true  
  document.getElementById("pauseFlagR").value = 1
}









