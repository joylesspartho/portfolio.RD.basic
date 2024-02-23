function menuopen() {
    document.querySelector('.menuitemdiv').style.width = '250px';
    document.querySelector('body').style.overflow = "hidden";
}
function menuclose() {
    document.querySelector('.menuitemdiv').style.width = '0px';
    document.querySelector('body').style.overflow = "auto";
}

function iconred(){
    document.querySelector('#red').style.color = 'red';
}


 






var imgcounter = 0;
var imgarry = ['webdevelopment.JPG', 'appdevelopment.JPG', 'uiux.JPG']; // Add more image URLs as needed

function changeimg() {
    
     document.querySelector('.imgdiv').style.backgroundImage = 'url("' + imgarry[imgcounter] + '")';

   
    imgcounter = (imgcounter + 1) % imgarry.length;
}

function changeBack() {
   
    imgcounter = (imgcounter - 1 + imgarry.length) % imgarry.length;
    document.querySelector('.imgdiv').style.backgroundImage = 'url("' + imgarry[imgcounter] + '")';
}

function autotype() {
    var txt = 'Hello! I AM Partho Web & Apps Developer :)';
    var c = 0;

    return function () {
      if (c < txt.length) {
        document.getElementById('output').innerHTML += txt.charAt(c);
        c++;

        
        setTimeout(arguments.callee, 200);
      }
    };
  }
   

  document.addEventListener('DOMContentLoaded', function() {
    autotype()();
 });




setTimeout(function() {
    changeimg();
   
    setInterval(changeimg, 6000);
}, 100);












