

function goBack() {
  window.history.back();
}

function SideBarOpen() {
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

function SideBarClose() {
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
  var chevronId = accID + "_c";
  var x = document.getElementById(accID);
  var chevron = document.getElementById(chevronId);

  if (x.style.display == "block") {
    chevron.innerHTML = ARROWDOWN;
    // chevron.className = ARROWDOWN;
    x.style.display = "none";
    sessionStorage.setItem(accID, 'none')
  }
  else {
    chevron.innerHTML = ARROWUP;
    // chevron.className = ARROWUP;
    x.style.display = "block";
    sessionStorage.setItem(accID, 'block')
  }
  var data = sessionStorage.getItem(accID);
}

const BACKBUTTON ='&#8592;';
// const TITLEHTML = "Ob/Gyn Pocket<sup>r</sup>";
const TITLEHTML = "Ob/Gyn Pocket";
const HAMBURGER = '&#9776;';
const ARROWRIGHT = '&#10148;';
const ARROWDOWN = "+"
const ARROWUP = '&#8722;';

//Sets divs for accordian and algorithms on page
function SetUpPage() {

  // var bbarray = document.getElementsByClassName("hg-BackButton");
  // var bbarrayi = bbarray[0].getElementsByTagName("i");
  // bbarrayi[0].className = BACKARROW;
  var bk = document.getElementById("bkbtn");
  bk.innerHTML = BACKBUTTON;

  // var titlecarray = document.getElementsByClassName("hg-NavBarTitle");
  // var titlespan = titlecarray[0];
  // titlespan.innerHTML = TITLEHTML;

  var tb = document.getElementById("titbar");
  tb.innerHTML = TITLEHTML;

  var hmbg = document.getElementById("hmbrgbtn");
  hmbg.innerHTML = HAMBURGER;

  var accArray = document.getElementsByClassName("hg-accDivMain");
  for (i = 0; i < accArray.length; i++) {
    var accdiv = accArray[i];
    var data = sessionStorage.getItem(accdiv.id);
    // var chevronId = accdiv.id+1;
    var chevronId = accdiv.id + "_c";
    var chevron = document.getElementById(chevronId);
    if (data == 'block') {
      chevron.innerHTML = ARROWUP;

      // chevron.className = ARROWUP;
      accdiv.style.display = "block";
    }
    else {
      chevron.innerHTML = ARROWDOWN;
      accdiv.style.display = "none";
    }
  }
  var algoArray = document.getElementsByClassName("hg-algoDivMain");
  for (i = 0; i < algoArray.length; i++) {
    var algodiv = algoArray[i];
    var data = sessionStorage.getItem(algodiv.id);
    if (data == 'block') {
      algodiv.style.display = "block";
    }
    else if (data == 'none') {
      algodiv.style.display = "none";
    }
    else if (i == 0) {
      algodiv.style.display = "block";
    }
  }

  var NavLinkArray = document.getElementsByClassName("hg-NavLink");
  for (i = 0; i < NavLinkArray.length; i++) {
    var nla = NavLinkArray[i];
    // var iArray = nla.getElementsByTagName("i");
    // iArray[0].className = ARROWRIGHT;
    var iArray = nla.getElementsByTagName("p");
    iArray[0].innerHTML = ARROWRIGHT;
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

/* function SetAlgoDivs() {
  var algoArray = document.getElementsByClassName("hg-algoDivMain");
  for (i = 0; i < algoArray.length; i++) {
    var algodiv = algoArray[i];
    var data = sessionStorage.getItem(algodiv.id);
    if (data == 'block') {
      algodiv.style.display = "block";
    }
    else if (data == 'none') {
      algodiv.style.display = "none";
    }
    else if (i == 0) {
      algodiv.style.display = "block";
    }

  }
} */



