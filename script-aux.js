

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

const BACKBUTTON = '&#8592;';
// const TITLEHTML = "Ob/Gyn Pocket<sup>r</sup>";
const TITLEHTML = "Pocket Ob/Gyn";
const HAMBURGER = '&#9776;';
const ARROWRIGHT = '&#10148;';
const ARROWDOWN = "+"
const ARROWUP = '&#8722;';

//Sets divs for accordian and algorithms on page
function SetUpPage() {


  var bk = document.getElementById("bkbtn");
  bk.innerHTML = BACKBUTTON;

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

  CreateSideBar();
}


function CreateSideBar() {
  var sideBar = document.getElementById("mySidebar");

  var menu = document.createElement("h4");
  var menuText = document.createTextNode("Menu");
  menu.appendChild(menuText);
  sideBar.appendChild(menu);

  var start = document.createElement("a");
  var startText = document.createTextNode("Start");
  start.appendChild(startText);
  start.setAttribute("class", "hg-SideBarItem")
  start.setAttribute("href", "index.html")
  sideBar.appendChild(start);
  start.appendChild(startText);
  start.setAttribute("class", "hg-SideBarItem")
  start.setAttribute("href", "index.html")
  sideBar.appendChild(start);

  var glossaryHeader = document.createElement("p");
  var glossaryHeaderText = document.createTextNode("Glossaries");
  glossaryHeader.appendChild(glossaryHeaderText);
  glossaryHeader.setAttribute("class", "hg-SideBarSubHeader")
  sideBar.appendChild(glossaryHeader);

  var obGlossary = document.createElement("a");
  var obGlossaryText = document.createTextNode("Obstetrics");
  obGlossary.appendChild(obGlossaryText);
  obGlossary.setAttribute("class", "hg-SideBarItem2")
  obGlossary.setAttribute("href", "ob_glossary.html")
  sideBar.appendChild(obGlossary);

  var gynGlossary = document.createElement("a");
  var gynGlossaryText = document.createTextNode("Gynecology");
  gynGlossary.appendChild(gynGlossaryText);
  gynGlossary.setAttribute("class", "hg-SideBarItem2")
  gynGlossary.setAttribute("href", "#")
  sideBar.appendChild(gynGlossary);

  var about = document.createElement("a");
  var aboutText = document.createTextNode("About");
  about.appendChild(aboutText);
  about.setAttribute("class", "hg-SideBarItem")
  about.setAttribute("href", "about.html")
  sideBar.appendChild(about);

  var back = document.createElement("a");
  var backText = document.createTextNode("Back");
  back.appendChild(backText);
  back.setAttribute("class", "hg-SideBarItem")
  back.setAttribute("href", "javascript:void(0)")
  back.setAttribute("onclick", "goBack()")
  sideBar.appendChild(back);


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



