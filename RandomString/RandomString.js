'use strict';

const MaterialString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";

let len = 8; //Password文字列の長さ
let checkStringCount = new Array(MaterialString.length).fill(0); //fill便利じゃん！0埋め

document.getElementById("createButton").onclick = function() {
  document.getElementById("outputPassword").value = CreatePassword();
};

function CreatePassword() {
  let pass = "";
  for(let i = 0; i < len; i++){
    let rnd = Math.floor(Math.random() * MaterialString.length)
    checkStringCount[rnd]++;
    pass = pass + MaterialString[rnd];
  }
  console.log('checkStringCount:' + checkStringCount);

  return pass;
}
