function solveEquation(a, b, c) {
  let arr = [], 
      D = b**2-4*a*c;

  if(D > 0) {

    arr.push((-b + Math.sqrt(D) )/(2*a))
    arr.push((-b - Math.sqrt(D) )/(2*a))
    return arr;

  } else if (D === 0) {

    arr.push((b * -1) / (2*a));
    return arr;

  } else return arr;
}

//function calculateTotalMortgage(percent, contribution, amount, date) {
  // if(typeof moth)
  // let moth = (date.getFullYear() - new Date().getFullYear()) *12
  // console.log(moth)
  // let S = amount-contribution;
  // let P = percent/12/10;
  // let n = moth;
  // let pay = S * (P + P / (((1 + P)^n) - 1));
  //     pay = Math.floor(pay*100)/100
  // return pay*moth
//}
//calculateTotalMortgage(10,1000,50000,12)
