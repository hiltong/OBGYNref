

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

function AccToggleTOC(accID) {
  var chevronId = accID + "_c";
  var x = document.getElementById(accID);
  var chevron = document.getElementById(chevronId);


  if (x.style.display != "block") {
    chevron.innerHTML = ARROWUP;
    x.style.display = "block";
    sessionStorage.setItem(accID, 'block')
  }
  var data = sessionStorage.getItem(accID);
}




const BACKBUTTON = '&#8592;';
// const TITLEHTML = "OB/GYN Referenced<sup>r</sup>";
const TITLEHTML = "";
// const HAMBURGER = '&#9776';
const HAMBURGER = 'Menu';
const ARROWRIGHT = '&#10148;';
const ARROWDOWN = "+";
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

  // FormatPage();
  CreateSideBar();
}

// function FormatPage() {
/*  var reltopicssection = document.getElementsByClassName('accordian hg-accSectionRelTopics')[0];
 if (reltopicssection != null) {
   var hrabovereltop = document.createElement("hr");
   hrabovereltop.setAttribute("class", "hg-hrAboveSectionRelatedTopics")
   reltopicssection.prepend(hrabovereltop);
 }  */
/*  var refsection = document.getElementsByClassName('accordian hg-accSectionRef')[0];
 if (refsection != null) {
   var hraboverefs = document.createElement("hr");
   hraboverefs.setAttribute("class", "hg-hrAboveSectionRefereces")
   refsection.prepend(hraboverefs);
 }  */
// }



function CreateSideBar() {
  var sideBar = document.getElementById("mySidebar");

  var menu = document.createElement("h4");
  var menuText = document.createTextNode("Menu");
  menu.appendChild(menuText);
  sideBar.appendChild(menu);

  // var obstetrics = document.createElement("h5");
  // var obstetricsText = document.createTextNode("Obstetrics");
  // obstetrics.appendChild(obstetricsText);
  // sideBar.appendChild(obstetrics);

  // var ob = document.createElement("a");
  // var obText = document.createTextNode("Obstetrics");
  // ob.appendChild(obText);
  // ob.setAttribute("class", "hg-SideBarItem")
  // ob.setAttribute("href", "ob_index.html")
  // sideBar.appendChild(ob);

  // var start = document.createElement("a");
  // var startText = document.createTextNode("Index");
  // start.appendChild(startText);
  // start.setAttribute("class", "hg-SideBarItem2")
  // start.setAttribute("href", "ob_index.html")
  // sideBar.appendChild(start);


  // var glossaryHeader = document.createElement("p");
  // var glossaryHeaderText = document.createTextNode("Glossaries");
  // glossaryHeader.appendChild(glossaryHeaderText);
  // glossaryHeader.setAttribute("class", "hg-SideBarSubHeader")
  // sideBar.appendChild(glossaryHeader);

  var obGlossary = document.createElement("a");
  var obGlossaryText = document.createTextNode("Obstetric Index");
  obGlossary.appendChild(obGlossaryText);
  obGlossary.setAttribute("class", "hg-SideBarItem")
  obGlossary.setAttribute("href", "ob_glossary.html")
  sideBar.appendChild(obGlossary);

  // var gynGlossary = document.createElement("a");
  // var gynGlossaryText = document.createTextNode("Gynecology");
  // gynGlossary.appendChild(gynGlossaryText);
  // gynGlossary.setAttribute("class", "hg-SideBarItem")
  // gynGlossary.setAttribute("href", "gyn_index.html")
  // sideBar.appendChild(gynGlossary);

  var gynGlossary = document.createElement("a");
  var gynGlossaryText = document.createTextNode("Gynecology Index");
  gynGlossary.appendChild(gynGlossaryText);
  gynGlossary.setAttribute("class", "hg-SideBarItem")
  gynGlossary.setAttribute("href", "gyn_glossary.html")
  sideBar.appendChild(gynGlossary);

  // var obGlossary = document.createElement("a");
  // var obGlossaryText = document.createTextNode("Site Map");
  // obGlossary.appendChild(obGlossaryText);
  // obGlossary.setAttribute("class", "hg-SideBarItem")
  // obGlossary.setAttribute("href", "sitemap.html")
  // sideBar.appendChild(obGlossary);

  var globalRefernces = document.createElement("a");
  var globalReferncesText = document.createTextNode("References");
  globalRefernces.appendChild(globalReferncesText);
  globalRefernces.setAttribute("class", "hg-SideBarItem")
  globalRefernces.setAttribute("href", "references.html")
  sideBar.appendChild(globalRefernces);

  var about = document.createElement("a");
  var aboutText = document.createTextNode("About");
  about.appendChild(aboutText);
  about.setAttribute("class", "hg-SideBarItem")
  about.setAttribute("href", "index.html")
  sideBar.appendChild(about);

  // Go to Top button
  var upBtn = document.createElement("button");
  // var upBtnText = document.createTextNode( "Top");
  // upBtn.appendChild(upBtnText);
  upBtn.innerHTML = "&uarr;";
  upBtn.setAttribute("id", "upBtn")
  // upBtn.setAttribute("class", "hg-upBtn")
  upBtn.classList.add("hg-upBtn");
  // upBtn.classList.add("hidden");
  upBtn.setAttribute("onclick", "topFunction()");
  document.body.appendChild(upBtn);

}

/*Algorhithm-------------------------------------------------------------------------------*/
function AlgoNext(idhide, idshow) {
  //  alert('Here');
  //  alert(idhide);
  document.getElementById(idhide).style.display = "none";
  sessionStorage.setItem(idhide, 'none')
  document.getElementById(idshow).style.display = "block";
  sessionStorage.setItem(idshow, 'block')
  // alert('Here');
}

// function AlgoNext(idhide, idshow, algobackstep) {
//   // alert('Here');
//   // alert(idhide);
//  document.getElementById(idhide).style.display = "none";
//  sessionStorage.setItem(idhide, 'none')
//  document.getElementById(idshow).style.display = "block";
//   sessionStorage.setItem(idshow, 'block')
//   sessionStorage.setItem(algobackstep, idhide)
//   // alert(algobackstep);
//   // alert(idhide);
// //  var idshow = sessionStorage.getItem('BackStep');
//  document.getElementById(idshow).style.display = "block";
//  sessionStorage.setItem(idshow, 'block')
// //  alert(idshow);
// }

function AlgoBack(idhide, algobackstep) {
  document.getElementById(idhide).style.display = "none";
  sessionStorage.setItem(idhide, 'none')
  var idshow = sessionStorage.getItem(algobackstep);
  document.getElementById(idshow).style.display = "block";
  sessionStorage.setItem(idshow, 'block')
  //  alert(idshow);
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

/*Glossary-----------------------------------------------------------------------------------------------*/
function ScrollToSection(section) {
  document.getElementById(section).scrollIntoView({ block: "start", behavior: "smooth" });
}


/* Scroll from TOC------------------------------------------------------------------------------ */
function ScrollToAccSection(section) {
  var element = document.getElementById(section);
  //offset so can see top of section after scroll to it//
  var headerOffset = 50;
  var elementPosition = element.getBoundingClientRect().top;
  // alert(elementPosition);
  var offsetPosition = elementPosition - headerOffset;
  // alert(offsetPosition);
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

/* Go to "TOP" button -------------------------------------------------*/
// When the user scrolls down 20px from the top of the document, show the top button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  // alert('here');
  var mybutton = document.getElementById('upBtn');
  // alert(mybutton);
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    // mybutton.classList.remove("hg-upBtnHidden");
    // mybutton.classList.add("hg-upBtnShow");

  } else {
    mybutton.style.display = "none";
    // mybutton.classList.remove("hg-upBtnShow");
    // mybutton.classList.add("hg-upBtnHidden");

  }
}

// When the user clicks on the top button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE     and Opera

}
