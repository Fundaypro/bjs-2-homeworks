function compareArrays(arr1, arr2) {
  return  arr1.length === arr2.length && arr1.every((el,i)=>el==arr2[i]);
}

function advancedFilter(arr) {
  return arr.filter(e =>e > 0 && e%3 === 0).map(e=> e*=10);
}
