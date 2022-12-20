let unorderedArray = [999, -1, -1, 234, 5, 6, 4];

const bubbleSort = (array) => {
  if (array.length == 1) {
    console.log(array);
    return array;
  }
  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length; ++j) {
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  console.log(array);
  return array;
};
const someArr = [1]
bubbleSort(someArr)
bubbleSort(unorderedArray)