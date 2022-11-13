// Get The URL
const site = window.location.hostname;

// alert("Injector - The JavaScript has been injected to: " + site + " 🤖")

// Add Custom CSS - Function
const Add_Custom_Style = (css) =>
  (document.head.appendChild(document.createElement("style")).innerHTML = css);

const Add_Custom_Style_OneElement = (element, style) =>
  element.setAttribute("style", style);

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
  const custom_element = document.createElement(tag);
  custom_element.setAttribute(attr_tag, attr_name);
  custom_element.innerHTML = value;
  document.body.append(custom_element);
}

const newShade = (hexColor, magnitude) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};

function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

function replaceImageElement(linkTag, style) {
  console.dir(linkTag.firstChild.getAttribute("alt"));
  var altText = linkTag.firstChild.getAttribute("alt");

  if (altText === "Student Link") {
  } else if (altText === "Academics") {
    altText = "Academics";
    linkTag.innerHTML = altText;
    linkTag.setAttribute("class", "navButton");
    Add_Custom_Style_OneElement(linkTag, style);
  } else if (altText === "Work") {
    altText = "Work";
    linkTag.innerHTML = altText;
    linkTag.setAttribute("class", "navButton");
  } else if (altText === "DegreeAdvice") {
    altText = "Degree Advice";
    linkTag.innerHTML = altText;
    linkTag.setAttribute("class", "navButton");
  } else if (altText === "Personal") {
    altText = "Personal";
    linkTag.innerHTML = altText;
    linkTag.setAttribute("class", "navButton");
  } else if (altText === "Money") {
    altText = "Money Matters";
    linkTag.innerHTML = altText;
    linkTag.setAttribute("class", "navButton");
  } else if (altText === "Food") {
    altText = "Food & Shelter";
    linkTag.innerHTML = altText;
    linkTag.setAttribute("class", "navButton");
  } else if (altText === "Basics") {
    altText = "Basics";
    linkTag.innerHTML = altText;
    linkTag.setAttribute("class", "navButton");
  } else if (altText === "Index") {
    altText = "Index";
    linkTag.innerHTML = altText;
    linkTag.setAttribute("class", "navButton");
  }
}

function replaceAllButtons() {
  const linkList = document.querySelectorAll(
    "table>tbody>tr>td>table>tbody>tr>td>a"
  );
  console.log(linkList);
  for (let i = 0; i < 16; i++) {
    if (i % 2 == 0) {
      replaceButton(linkList[i]);
    }
  }
  for (let i = 0; i < 16; i++) {
    // if (i % 2 != 0) {
    //   let bgColor = linkList[i].parentElement.bgColor;
    //   bgColor = ColorLuminance(bgColor, -1);
    //   console.log(bgColor);
    //   linkList[i - 1].setAttribute("style", `background-color:${bgColor}`);
    //   //  linkList[i - 1].setAttribute("onMouseOver", `background-color:#FF0000`);
    // }
  }

  linkList[0].setAttribute("style", `background-color:##FF0000`);
  linkList[2].setAttribute("style", `background-color:#FF0000`);
  linkList[4].setAttribute("style", `background-color:#FF0000`);
  linkList[6].setAttribute("style", `background-color:#FF0000`);
  linkList[8].setAttribute("style", `background-color:#FF0000`);
  linkList[10].setAttribute("style", `background-color:#FF0000`);
  linkList[12].setAttribute("style", `background-color:#FF0000`);
  linkList[14].setAttribute("style", `background-color:#FF0000`);
}
function hideExpressLink() {
  const expressLink = document.querySelectorAll("table>tbody>tr>td");
  expressLink[3].setAttribute("style", "display:none");
}
function replaceButton(linkTag) {
  const textInsideLinkTag = linkTag.firstElementChild.getAttribute("alt");

  linkTag.innerHTML = textInsideLinkTag;
  linkTag.setAttribute("class", "navButton");
}

function AddBackgroundtoTable() {
  const tables = document.querySelectorAll("table");
  tables[4].setAttribute(
    "style",
    "background-color: #85737347; padding: 20px; border-radius: 10px; font-size:10px;"
  );
  tables[5].setAttribute(
    "style",
    "background-color: #85737347; padding: 20px; border-radius: 10px; font-size:10px;"
  );
}

function queryImageElements() {
  const linkTags = document.querySelectorAll("tbody > tr > td> a");
  //console.log(linkTags);
  style = "";
  for (const linkTag of linkTags) {
    replaceImageElement(linkTag, style);
  }
}
function formattSelectedTabText(altText) {
  if (altText === "Student Link") {
  } else if (altText === "Academics") {
    altText = "Academics";
  } else if (altText === "Work") {
    altText = "Work";
  } else if (altText === "DegreeAdvice") {
    altText = "Degree Advice";
  } else if (altText === "Personal") {
    altText = "Personal";
  } else if (altText === "Money") {
    altText = "Money Matters";
  } else if (altText === "Food") {
    altText = "Food & Shelter";
  } else if (altText === "Basics") {
    altText = "Basics";
  } else if (altText === "Index") {
    altText = "Index";
  }

  return altText;
}

function handleSelectedTab() {
  try {
    const selectedTab = document.querySelectorAll("table>tbody >tr>td>img");
    console.dir(selectedTab[3]);
    const selectedTabText = selectedTab[3].getAttribute("alt");
    selectedTab[3].parentElement.innerHTML = "";
    const formattedSelectedTabText = formattSelectedTabText(selectedTabText);
    console.log(selectedTabText);
    const selectedTabInNavImgTab = document.querySelectorAll(
      "table>tbody>tr>td>table>tbody tr> td>img"
    );

    selectedTabInNavImgTab[0].parentElement.innerHTML = `<a class="navButton" heref="">${formattedSelectedTabText}<a/>`;
  } catch (e) {
    //do nothing
  }
}

function moveContentToCenter() {
  const content = document.querySelectorAll("table");
  console.dir(content);
  content[3].setAttribute(
    "style",
    "text-align:center; margin:auto; width:50%;"
  );
}

function changeWidthOfTable() {
  const tables = document.querySelectorAll("table");
  console.log(tables);
  tables[4].setAttribute("width", "400");
  tables[5].setAttribute("width", "400");
}

if (site.includes("bu.edu")) {
  //alert("You are on BU page");
  const currentURL = location.href;
  if (currentURL.includes("NewMenu=Home")) {
    replaceAllButtons();
    hideExpressLink();
    AddBackgroundtoTable();
    changeWidthOfTable();
    Add_Custom_Style(`
    table{
        
    }

     br{
        display:none;
    }

    td{
        width: 200px;
        font-size: px;
    }
    table td {
        background: none;
    }
    font{
        font-weight :bold;
    }
    `);
  } else {
    queryImageElements();
    handleSelectedTab();
    moveContentToCenter();
  }
  Add_Custom_Style(`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');
 

 
*{
    padding: 1px;
    padding-left:5px;
    
}


  .navButton{
 
    font-family: 'Open Sans';
    color: #ffffff;
    text-transform: Capitalize;
    text-decoration: none;
    background: #f03a42;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    margin: -1px;
    transition: all 0.1s ease 0s;
   
      
  }

  .navButton:hover{
    background-color: #f2111c;
  }

  .navButton:focus{
    background-color: #f2111c;
    visibility = "visible";

  }
  table{
    padding: 0.3%;
  }

  table td{
   
   
  }
  *{
    font-family: 'Open Sans', sans-serif;
    
}
  `);
}
