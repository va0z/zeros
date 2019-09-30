module.exports = function zeros(expression) {
  // your solution 9!!*10!!*7!!
  var fac = expression.split('*');

  // var res= BigInt(1);
  var result= 1n;
  for (i = 0; i < fac.length; i++) {
    //
    // console.log(fac[i] + fac[i].indexOf('!!'));
    var res= 1n;
    if (fac[i].indexOf('!!') > 0 ) {
      // console.log('!');
      // console.log(fac[i]);
      fac[i]=fac[i].replace('!!','');
      var num = Number.parseInt(fac[i]);
      for (j = num; j > 0; j--) {
        res = res * j;
        // console.log(res);
      }
    } 
    else {
      // console.log('\!\!');
      fac[i]=fac[i].replace('!','');
      var num = Number.parseInt(fac[i]);
      // console.log(fac[i] + ' : ' + num + ' -> ' + typeof(num));
      // console.log(fac[i]);
      for (j = num; j > 0; j--) {
        res = res * j;
        // console.log(res);
      }
    }
    result = result * res; 
    console.log(result);
    console.log(expression);
  }
}
