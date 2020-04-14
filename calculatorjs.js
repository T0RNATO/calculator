var num1, num2, op, text, m1, m2;
function rty(n) {
  text = document.getElementById("display").value;
  if(text == "0") {
    document.getElementById("display").value = n;
  }
  else if (text != "0") {
    document.getElementById("display").value += n;
  }
}
function remove(a) {
  if(a == 0) {
    document.getElementById("display").value = "";
    num1 = 0;
    num2 = 0;
    op = 0;
  }
  else if (a == 1) {
    text = document.getElementById("display").value;
    document.getElementById("display").value = text.slice(0, -1);
  }
}
function operation(operator) {
  text = document.getElementById("display").value;
  if(text.includes("/") == true) {
    text = text.split("/");
    num1 = text[0] / text[1];
    text = document.getElementById("display").value;
  }
  if(text.includes("π") == true) {
    num1 = text.replace("π", Math.PI);
  }
  else if (text.includes("/") == false && text.includes("π") == false) {
    num1 = text;
  }
  document.getElementById("display").value = "";
  op = operator;
}
function go() {
  num2 = document.getElementById("display").value;
  num2 = num2.replace("π", Math.PI);
  if(op == "plus") {
    document.getElementById("display").value = Number(num1) + Number(num2);
  }
  else if (op == "minus") {
    document.getElementById("display").value = Number(num1) - Number(num2);
  }
  else if (op == "times") {
    document.getElementById("display").value = Number(num1) * Number(num2);
  }
  else if (op == "divide") {
    document.getElementById("display").value = Number(num1) / Number(num2);
  }
  else if (op == "root") {
    if(num1.includes("-") == true) {
      num1 = num1 * -1;
      document.getElementById("display").value = round(Number(num1) ** (1 / Number(num2)), 14) + " i";
    }
    else if(num1.includes("-") == false) {
      document.getElementById("display").value = round(Number(num1) ** (1 / Number(num2)), 14);
    }
  }
  else if (op == "power") {
    document.getElementById("display").value = Math.pow(Number(num1), Number(num2));
  }
  else if (op == "modulo") {
    document.getElementById("display").value = Number(num1) % Number(num2);
  }
  else if (num2.includes("/") == true && op == 0) {
    text = document.getElementById("display").value;
    text = text.split("/");
    document.getElementById("display").value = text[0] / text[1];
  }
  num2 = document.getElementById("display").value;
  if (num2.includes("π") == true) {
    document.getElementById("display").value = Math.PI;
  }
}
function round(num, places) {
  var multiplier = Math.pow(10, places);
  return Math.round(num * multiplier) / multiplier;
}
function decimal() {
  text = document.getElementById("display").value;
  if(text.includes(".") == false && text != 0) {
    document.getElementById("display").value += ".";
  }
  else if(text == 0) {
    document.getElementById("display").value = "0.";
  }
  else if(text.includes(".") == true && text.includes("/") == true) {
    if((text.match(/./g) || []).length < 6 && text != 0) {
      document.getElementById("display").value += ".";
    }
  }
}
function mp() {
  text = document.getElementById("display").value;
  if(text == 0) {
    document.getElementById("display").value = '-';
  }
  else if (text !== 0 && text.includes("-") == false) {
    document.getElementById("display").value = Number(text) * -1;
  }
  else if (text !== 0 && text.length != 1) {
    document.getElementById("display").value = Number(text) * -1;
  }
}
function percent() {
  document.getElementById("display").value = document.getElementById("display").value / 100;
}
function y(n) {
  return (n != 1) ? n * y(n - 1) : 1;
}
function factorial() {
  text = document.getElementById("display").value;
  document.getElementById("display").value = y(text);
}
function m(b) {
  text = document.getElementById("display").value;
  if(text == 0) {
    if(b == 1) {
      document.getElementById("display").value = m1;
    }
    else if (b == 2) {
      document.getElementById("display").value = m2;
    }
  }
  else if (text !== 0) {
    if(b == 1) {
      m1 = document.getElementById("display").value;
    }
    else if (b == 2) {
      m2 = document.getElementById("display").value;
    }
  }
}
function roundnum() {
  document.getElementById("display").value = Math.round(document.getElementById("display").value);
}
function appear(e) {
  if (e == 1) {
    var ele = document.getElementsByName("extra");
    for (var d = 0; d < ele.length; d++ ) {
      ele[d].style.visibility = "visible";
    }
  document.getElementById("expand").style.visibility = "hidden";
  document.getElementById("mini").style.visibility = "visible";
  }
  else if (e == 2) {
    var ele = document.getElementsByName("extra");
    for (var d = 0; d < ele.length; d++ ) {
      ele[d].style.visibility = "hidden";
    }
    document.getElementById("mini").style.visibility = "hidden";
    document.getElementById("expand").style.visibility = "visible";
  }
}
function extra(o) {
  text = Number(document.getElementById("display").value);
  text = text.replace("π", Math.PI);
  if(o == "cos") {
    document.getElementById("display").value = Math.cos(text * Math.PI / 180);
  }
  else if (o == "sin") {
    document.getElementById("display").value = Math.sin(text * Math.PI / 180);
  }
  else if (o == "tan") {
    document.getElementById("display").value = Math.tan(text * Math.PI / 180);
  }
  else if (o == "acos") {
    document.getElementById("display").value = round(Math.acos(text) * 180 / Math.PI, 12);
  }
  else if (o == "asin") {
    document.getElementById("display").value = round(Math.asin(text) * 180 / Math.PI, 12);
  }
  else if (o == "atan") {
    document.getElementById("display").value = round(Math.atan(text) * 180 / Math.PI, 12);
  }
  else if (o == "log") {
    document.getElementById("display").value = Math.log(text);
  }
}
function frac() {
  text = document.getElementById("display").value;
  if(text.includes("/") == false && text != 0) {
    document.getElementById("display").value += "/";
  }
}