// Задание 1
function getArrayParams(arr) {
  return { min:arr.sort((x,y)=> x-y)[0], 
           max:arr.sort((x,y)=> x-y)[arr.length-1], 
           avg:Math.floor(arr.reduce((ac,val)=>ac+=val,0)/arr.length*100)/100 
  };
}

// Задание 2
function worker(arr) {
  return arr.reduce((ac,val)=>ac+=val,0);
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0;i<arrOfArr.length ;i++) {
    max = Math.max(max,func(arrOfArr[i]))
  }
  
  return max
}

// Задание 3
function worker2(arr) {
  arr = arr.sort((x,y)=> x-y)

  return arr[arr.length-1]-arr[0];
}
