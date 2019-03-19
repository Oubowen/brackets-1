module.exports = function check(str, bracketsConfig) {
  // your solution
  
  let tempStr = str.split('');
  let tempLength = str.length;
  
  while (tempLength > 0) {
  for (let x = 0; x < tempStr.length; x++) {
    for (let y = 0; y < bracketsConfig.length; y++) {
      if ((tempStr[x] == bracketsConfig[y][0]) && (tempStr[x+1] == bracketsConfig[y][1])) {
        tempStr.splice(x, 2);
      }
    }
  }
  
  tempLength = tempLength - 2;
  }
  
  if (tempStr.length == 0) 
    return true;
  
  return false;
}