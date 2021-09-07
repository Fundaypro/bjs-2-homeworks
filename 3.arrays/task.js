function compareArrays(arr1, arr2) {
  return  arr1.join()===arr2.join();
}

function advancedFilter(arr) {
  return arr.filter(e =>e > 0 && e%3 === 0).map(e=> e*=10);
}
