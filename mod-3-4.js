// 3 Напишите фукцио преобраения данных
// const inputData = [
//   { id: 1, name: "Item 1" },
//   { id: 2, name: "Item 2" },
//   { id: 4, name: "Item 4" },
//   { id: 7, name: "Item 7" },
// ];

// ('function should return normalized data', () => {
//     expect(normalize(inputData)).toEqual({
//       entities: {
//         1: { id: 1, name: "Item 1" },
//         2: { id: 2, name: "Item 2" },
//         4: { id: 4, name: "Item 4" },
//         7: { id: 7, name: "Item 7" },
//       },
//       byId: [1, 2, 4, 7],
//     });

// const normalizedInput = (data) => {
//   const objData = {};

//   const idArray = [];

//   const normData = {};

//   data.forEach((obj) => {
//     let objId = obj.id;
//     idArray.push(objId);
//     objData[objId] = obj;
//   });

//   normData.entities = objData;

//   normData.byId = idArray;
//   console.log("normalizedInput - normData", normData);

//   return normData;
// };
// console.log("normalizedInput - normalizedInput", normalizedInput(inputData));


// Записать массив, const arr = [“BEST”, “the”, “foo”, “is”,  “JS” ]
// развернуть массив,
// вырезать foo,
// перевести его в строку разделенную пробелами

const arr = ['BEST', 'the', 'foo', 'is',  'JS'];

const newStr = (arr, str) => {
  // const arrReverse = arr.reverse();
  // console.log(arrReverse);
  // const deleteElement = arrReverse.splice(num - 1, 1);
  // console.log(deleteElement);
  // return arrReverse.join(' ')

  // const resultStr = arr.reverse().slice(0, num - 1).concat(arr.slice(num)).join(' ');
  // return resultStr;

  const resultString = arr.reverse().filter(item => item !== str).join(' ');

  return resultString;
}
console.log(newStr(arr, 'foo'));



