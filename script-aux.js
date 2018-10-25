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
  var x = document.getElementById(accID);
  // alert(accID);
  // alert(x.style.display);
  // var data1 = sessionStorage.getItem('try');
  // alert(data1);
  if (x.style.display == "block") {
    x.style.display = "none";
    sessionStorage.setItem(accID, 'none')
    // alert('here1');
  }
  else {
    x.style.display = "block";
    sessionStorage.setItem(accID, 'block')
    // alert('here2');
  }
  // alert(accID);
  var data = sessionStorage.getItem(accID);
  // alert(data);
}

function SetAccDivs(){
  var accArray = document.getElementsByClassName("hg-accDivMain");
  for (i = 0; i < accArray.length; i++) {
    var accdiv = accArray[i];
    var data = sessionStorage.getItem(accdiv.id);
    if (data=='block'){
      accdiv.style.display="block";
    }
    else{
      accdiv.style.display="none";
    }
  }

  var algoArray = document.getElementsByClassName("hg-algoDivMain2");
  for (i = 0; i < algoArray.length; i++) {
    var algodiv = algoArray[i];
    var data = sessionStorage.getItem(algodiv.id);
    if (data=='block'){
      algodiv.style.display="block";
    }
    else if (data=='none'){
      algodiv.style.display="none";
    }
    else if (i==0){
      algodiv.style.display="block";
    }

  }
}



/*Algorhithm-------------------------------------------------------------------------------*/
function AlgoNext(idhide, idshow) {
  //  alert('Here');
  document.getElementById(idhide).style.display = "none";
  sessionStorage.setItem(idhide, 'none')
  document.getElementById(idshow).style.display = "block";
  sessionStorage.setItem(idshow, 'block')
}

function SetAlgoDivs(){
  var algoArray = document.getElementsByClassName("hg-algoDivMain");
  for (i = 0; i < algoArray.length; i++) {
    var algodiv = algoArray[i];
    var data = sessionStorage.getItem(algodiv.id);
    if (data=='block'){
      algodiv.style.display="block";
    }
    else if (data=='none'){
      algodiv.style.display="none";
    }
    else if (i==0){
      algodiv.style.display="block";
    }

  }
  // alert(algoArray.length);
}



