function MyFunction(document) {
  alert('Hit! aux');
  /* var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  } */
}

function goBack() {
  //  alert('Back');
  window.history.back();
}

function SideBarOpen(document) {
  // alert('Open');
  // Get the Sidebar
  var mySidebar = document.getElementById("mySidebar");
  // Get the DIV with overlay effect
  var overlayBg = document.getElementById("myOverlay");
  // Toggle between showing and hiding the sidebar, and add overlay effect
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

function SideBarClose(document) {
  // alert('Open');
  // Get the Sidebar
  var mySidebar = document.getElementById("mySidebar");
  // Get the DIV with overlay effect
  var overlayBg = document.getElementById("myOverlay");
  // Close the sidebar with the close button
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

/* function AccWork(document, id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
} */

/*Accordian Open/Close*/
function AccToggle(accID) {
    //  alert('Here');
  var x = document.getElementById(accID);
    if (x.style.display === "block") {
      // alert('Here1');
        x.style.display = "none";
    } 
    else { /*For some reason CSS does not set display:None so this picks up if not set as it is on 1st call*/
      // alert('Here3');
        x.style.display = "block";
    }

}

/*Algorhithm-------------------------------------------------------------------------------*/
 function AlgoNext(idhide, idshow) {
  //  alert('Here');
  document.getElementById(idhide).style.display = "none";
  document.getElementById(idshow).style.display = "block";
}


/* function GetAccDivs(){
  // alert('Here');
  var accArray = document.getElementsByClassName("hg-accDivMain");
  var divArray=new Array;
  // var person(firstName, lastName);
  for (i = 0; i < accArray.length; i++) {
    // alert('Here2');
    // var nm = accArray[i].id;
    var nm = accArray[i];
    alert(nm.id);
    var st = nm.style.display;
    alert(st);
    var acc = {id:nm.id, display:"Doe"};
    divArray.push(acc);
  }
  alert(accArray.length);
  alert(divArray.length);
} */