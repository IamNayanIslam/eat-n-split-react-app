function findShort(s) {
  const arr = s.split(" ");

  const newArr = [];

  arr.map((ar) => {
    newArr.push(ar.length);
    return;
  });
  newArr.sort((a, b) => a - b);

  return newArr[0];
}

const result = findShort("my name is nayan islam");

console.log(result);
