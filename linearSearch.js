class linearSearch {
  static search(data, target) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] == target) {
        return i;
      }
    }
    return -1;
  }
}
const data = [24, 18, 2, 3, 5, 16, 45, 23];
let res = linearSearch.search(data, 166);
let res2 = linearSearch.search(data, 16);
console.log(res);
console.log(res2);
