//1
function getDayWeek(date) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(date);
  let day = weekday[d.getDay()];
  return day;
}

//2
function getSquareRootSum(params) {
  const squareAndRootSum = (params = []) => {
    const res = params.map((el) => {
      return Math.sqrt(el);
    });
    const sum = res.reduce((acc, val) => acc + val);
    return sum;
  };
  return squareAndRootSum(params);
}

//3
function getPrimeNumber(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
//4
function getNewWindow(url, width, height) {
  var myWindow = window.open(url, "", "width=" + width + ",height=" + height);
}

//5
function getNavigator() {
  let browserName = navigator.appName;
  let browserVersion = navigator.appVersion;
  return "Browser name is " + browserName + " and version is " + browserVersion;
}
//6
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

//7

//8

//9

//10
function addCSSClass() {
    var element = document.getElementById("pid1");
    element.classList.add("highlight");
    element.style.backgroundColor = "yellow";
 }

//11
function addelement() {
  let counter = 5;
  var completelist = document.getElementById("list");
  for (let i = 1; i <= counter; i++) {
    completelist.innerHTML += "<li>Item " + i + "</li>";
  }
}

//12
function getImageChange() {
  document.getElementById("myImg").src = "img/imgalt.png";
}
//13
function getQuerySelector() {
  const nodeList = document.querySelectorAll(".textColor");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = "red";
  }
}

//14

//15
