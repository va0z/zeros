module.exports = function zeros(expression) {
  var fac = expression.split('*');

  var result= 1n;
  var res= 1n;
  for (i = 0; i < fac.length; i++) {
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
      var num = Number.parseInt(fac[i]);
      for (j = num; j > 0; j--) {
        res = res * BigInt(j);
      }
    }
    result = result * res; 
  }
  let str = String(result);

  var numNul = 0;
  var search = 1;
  var pos = 0;
  var posMax = str.length;

  while ( search > 0) {
    pos = str.lastIndexOf('0');
    if ( (posMax - pos) == 1 ) {
      str = str.substr(0,pos);
      posMax = str.length;
      numNul++;
    }
    else {
      search = 0;
    }
  }

  return numNul;
}
