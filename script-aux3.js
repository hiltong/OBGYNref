function MyFunction() {
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

function AccToggle(accID) {
  alert('here');
  var chevronId = accID+1;
  var x = document.getElementById(accID);
  var chevron = document.getElementById(chevronId);

  if (x.style.display == "block") {
    chevron.innerHTML='&#9660';
    x.style.display = "none";
    sessionStorage.setItem(accID, 'none')
  }
  else {  
    chevron.innerHTML='&#9650';
    // chevron.className=ARROWUP;
    x.style.display = "block";
    sessionStorage.setItem(accID, 'block')
  }
  var data = sessionStorage.getItem(accID);
}


const ARROWRIGHT='fa fa-chevron-right';
const ARROWDOWN='fa fa-chevron-down';
const ARROWUP='fa fa-chevron-up';