'use strict';

import rL from '../RandomList/RandomList.js'

//pythonで作ったものをそのまま移植

//10〜1000の値のランダムの数値100個作成してListに格納
let rList = rL(10,1000,100);
console.log('rList:' + rList)

let left = 0;
let right = rList.length - 1;
console.log('l:' + left + 'r:' + right)

quicksort(left,right);

function quicksort(l,r) {
  console.log('Start l:' + l + 'r:' + r);
  if(l < r){
    let i = l;
    let j = r;
    //1.ピボットとして一つ選びそれをpivotとする。適当に選出
    let p = Math.floor(Math.floor(Math.random() * (r - l)) + l);
    let pivot = rList[p];

    console.log('p:' + p);
    console.log('pivot:' + pivot);

    while(true){
      while(rList[i] < pivot){
        i++;
      }
      while(pivot < rList[j]){
        j--;
      }
      if(i >= j){
        break;
      }
      let tmp = rList[i];
      rList[i] = rList[j];
      rList[j] = tmp;
      console.log('rList:' + rList)
      i++;
      j--;
    }
    quicksort(l,i - 1);
    quicksort(j + 1,r);
  }
}
