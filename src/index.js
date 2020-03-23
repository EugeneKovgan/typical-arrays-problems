
exports.min = function min (array) {
    if (array == undefined || array.length == 0) {
        return 0 ;
    } else {
    let min = 0; 
    min = Math.min.apply(null, array);   
    return min;
}}

exports.max = function max (array) {
    if (array == undefined || array.length == 0) {
        return 0 ;
    } else {
    let max = 0; 
    max = Math.max.apply(null, array);
    return max;
}}

exports.avg = function avg (array) {  
    if (array == undefined || array.length == 0) {
        return 0 ;
    } else {
  let avg=0;
  let avg1=0;
  for (i=0; i < array.length; i++ ) {
    avg1 +=array[i];
    avg = avg1 / array.length;

  }
    return avg;
}}
