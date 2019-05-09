function setMessage() {
  let navigationJSON = JSON.stringify(navigation);
  radio.message = navigationJSON;
}

setMessage();
