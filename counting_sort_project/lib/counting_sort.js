function countingSort(arr, max) {
   let results = [];
   let counter = new Array(max + 1).fill(0);
   
   for (let i = 0; i < arr.length; i++) {
       let num = arr[i];
       counter[num]++
   }

   for (let i = 0; i < counter.length; i++) {
        while (counter[i] > 0) {
           results.push(i);
           counter[i]--
       }
   }
   return results 
}


module.exports = {
    countingSort
};