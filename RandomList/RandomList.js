function CreateList(min, max, length) {
  //0 < min < maxかつ整数であること
  //length 整数であること
  let rList = new Array();

  for(let i = 0; i < length; i++){
    rList.push(Math.floor(Math.random() * ((max + 1) - min)) + min); 
  }
  
  return rList;

}

export default CreateList;

