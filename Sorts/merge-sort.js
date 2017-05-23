function mergeSort(arr){
   let len = arr.length;

   if(len < 2){
       return arr;
   }

   let middle = Math.floor(len/2),
       left = arr.slice(0,middle),
       right =arr.slice(middle);

   return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
  let result = [],
      leftLen = left.length,
      rightLen = right.length,
      l = 0,
      r = 0;
  while(l < leftLen && r < rightLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

mergeSort(randomArray(100, 50, 355));
