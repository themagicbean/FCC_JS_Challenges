function rot13(str) { // LBH QVQ VG!

  function transform(num) {
    if (65 <= num && num <= 77) {
      //console.log("adding 13")
      num = num + 13;
      return num;
    } else if (78 <= num && num <= 90) {
      //console.log("subtracting 13")
      return num - 13;
    } else {
      //console.log("not transforming")
      return num;
    }
  }

  var code;
  var changedstring = "";
  for (var i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    //console.log("code before change is "+code);
    code = transform(code);
    //console.log("code after change is "+code)
    changedstring = changedstring + String.fromCharCode(code);
  }

  //console.log(changedstring);

  return changedstring;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
