function decodeMessage(message) {
  let currentMessage = message
  .replace(/1/g, 'i')
  .replace(/3/g, 'e')
  .replace(/0/g, 'o')
  .replace(/5/g, 'y')
  .replace(/4/g, 'a')
  .replace(/2/g, 'u')
  .replace(/id/g, 'ld');

  return currentMessage;
}
