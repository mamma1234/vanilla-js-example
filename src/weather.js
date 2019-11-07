const COORDS = "coords";

function handleGeoSuccess(position) {
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const looderCords = localStorage.getItem(COORDS);
  if (looderCords === null) {
    askForCoords();
  } else {
    //to do
  }
}

function init() {
  loadCoords();
}

init();
