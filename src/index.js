module.exports = function zeros(expression) {
  // your solution 9!!*10!!*7!!
  console.log(" str: " + expression);
  var fac = expression.split('*');

  // var res= BigInt(1);
  var result= 1n;
  var res= 1n;
  // console.log(fac.length);
  for (i = 0; i < fac.length; i++) {
    // console.log(fac[i] + fac[i].indexOf('!!'));
    res = 1n;
    if (fac[i].indexOf('!!') > 0 ) {
      fac[i]=fac[i].replace('!!','');
      var num = Number.parseInt(fac[i]);
      for (j = num; j > 0; j-=2) {
        res = res * BigInt(j);
      }
    } 
    else {
      fac[i]=fac[i].replace('!','');
      // console.log(fac[i]);
      var num = Number.parseInt(fac[i]);
      for (j = num; j > 0; j--) {
        res = res * BigInt(j);
      }
    }
    result = result * res; 
    // console.log(res);
  }
  let str = String(result);
  // console.log(str);
  var numNul = 0;
  var search = 1;
  // var etalon = 0;
  while ( search > 0) {
    
    let pos = str.lastIndexOf('0');
    if (pos != -1) {
      str = str.substr(0,str.lastIndexOf('0')-1);
      numNul++;
    }
    else {
      search = 0;
    }
     
  }
    
  // console.log (numNul);
  return numNul;
}
