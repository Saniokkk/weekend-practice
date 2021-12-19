// 3 Напишите фукцио преобраения данных
const inputData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 4, name: "Item 4" },
  { id: 7, name: "Item 7" },
];

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

const normalizedInput = (data) => {
  const objData = {};

  const idArray = [];

  const normData = {};

  data.forEach((obj) => {
    let objId = obj.id;
    idArray.push(objId);
    objData[objId] = obj;
  });

  normData.entities = objData;

  normData.byId = idArray;
  console.log("normalizedInput - normData", normData);

  return normData;
};
//console.log("normalizedInput - normalizedInput", normalizedInput(inputData));
