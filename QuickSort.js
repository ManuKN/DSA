function pivot(arr, startindex = 0, endindex = arr.length - 1) {
  if (!arr.length) return 0;
  
  let pivotElement = arr[startindex];
  let pivotIndex = startindex;

  for (let i = startindex + 1; i <= endindex; i++) {
    if (arr[i] < pivotElement) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }

  swap(arr, startindex, pivotIndex); 
  return pivotIndex; 
}
   //Helper function1
   function swap(arr , i  , j) {
       [arr[i], arr[j]] = [arr[j],arr[i]]
   }
   
   //Helper function2
   function QuickSort(arr , low = 0 , high = arr.length - 1){
    if(low < high){
     let pivotindex = pivot(arr ,low , high)
     //left
     QuickSort(arr , low , pivotindex - 1);
     //right
     QuickSort(arr , pivotindex + 1 , high)
    }
    return arr 
 }
 const arr1 = [100,4,8,2,1,5,7,6,3]
 console.log(QuickSort(arr1))

