module.exports = function check(str, bracketsConfig) {
  
  let arr = [];
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] ===')' && arr.length === 0 ||
        str[i] ===']' && arr.length === 0 ||
        str[i] ==='}' && arr.length === 0 ||
        str[i] ==='2' && arr.length === 0 ||
        str[i] ==='4' && arr.length === 0 ||
        str[i] ==='6' && arr.length === 0) { 
      counter +=1;
    }
    if (str[i] === '(' ||
        str[i] === '[' ||
        str[i] === '{' ||
        str[i] === '|' ||
        str[i] === '1' ||
        str[i] === '3' ||
        str[i] === '5' ||
        str[i] === '7' ||
        str[i] === '8')  {
      arr.push(str[i]);
      }  
    if (str[i] === ')' && arr[arr.length - 1] === '(' ||
        str[i] === ']' && arr[arr.length - 1] === '[' ||
        str[i] === '}' && arr[arr.length - 1] === '{' ||
        str[i] === '2' && arr[arr.length - 1] === '1' ||
        str[i] === '4' && arr[arr.length - 1] === '3' ||
        str[i] === '6' && arr[arr.length - 1] === '5') {
      arr.pop();
      }
    if (arr[arr.length - 1] === '|' && arr[arr.length - 2] === '|' ||
        arr[arr.length - 1] === '7' && arr[arr.length - 2] === '7' ||
        arr[arr.length - 1] === '8' && arr[arr.length - 2] === '8'){
      arr.pop();
      arr.pop();
    }     
  }
  if (arr.length === 0 && counter === 0) {
    return true;
  } else {
    return false;
  }       
}