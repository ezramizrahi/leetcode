const frequencySort = (arr = []) => {
   let map = {};
   for (let i = 0; i < arr.length; i++) {
      map[arr[i]] = (map[arr[i]] || 0) + 1;
   };
   return arr.sort((a,b) => map[b] - map[a] || b - a);
};

// const array = [3, 2, 9, 3, 2, 9, 9, 7, 6];
// frequencySort(array);