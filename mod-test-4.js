console.log("PAMAGITTEEEEEEE :cry");

const devs = [
    {
        id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
        name: "John Dousen",
        email: "johndousen@indexia.com",
        languages: ["js", "php", "c#", "go"],
        isActive: false,
        salary: 3200,
        companies: ["Epam", "Global Logic", "Soft Serv", "Google", "Netflex"],
        gender: "male",
        age: 37,
        level: "senior",
    },
    {
        id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
        name: "Shyrly Bond",
        email: "shyrlybond@tubesys.com",
        languages: ["c++", "php", "python", "swift"],
        isActive: true,
        salary: 3800,
        companies: ["Epam", "Global Logic", "Netflex"],
        gender: "female",
        age: 34,
        level: "middle",
    },
    {
        id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
        name: "Rossyta Vazulez",
        email: "rossytavazulez@xinware.com",
        languages: ["go", "ruby", "python"],
        isActive: false,
        salary: 2400,
        companies: ["Soft Serv"],
        gender: "female",
        age: 24,
        level: "junior",
    },
    {
        id: "249b6175-5c30-44c6-b154-f120923736f5",
        name: "Emma Hilton",
        email: "emmahiltond@omatom.com",
        languages: ["kotlin", "php", "js", "java"],
        isActive: true,
        salary: 2200,
        companies: ["Global Logic"],
        gender: "female",
        age: 21,
        level: "junior",
    },{
        id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
        name: "Carey Brant",
        email: "careybrant@nurali.com",
        languages: ["go", "kotlin", "python", "js"],
        isActive: true,
        salary: 2900,
        companies: ["Microsoft", "Epam"],
        gender: "male",
        age: 27,
        level: "middle",
    },
    {
        id: "150b00fb-dd82-427d-9faf-2879ea87c695",
        name: "Black Dots",
        email: "blackdots@furnigeer.com",
        languages: ["c#", "java", "kotlin", "swift"],
        isActive: false,
        salary: 3400,
        companies: ["Epam", "Global Logic", "Soft Serv"],
        gender: "male",
        age: 38,
        level: "senior",
    },{
        id: "e1bf46ab-7168-491e-925e-f01e21394812",
        name: "Sheron Asully",
        email: "sheronasully@kog.com",
        languages: ["js", "go"],
        isActive: true,
        salary: 2700,
        companies: ["Google", "Netflex", "Apple"],
        gender: "female",
        age: 39,
        level: "senior",
    },
];

//map(), filter(), sort()

const getProgrammingLanguages = (devs) => {
    

    return [...devs]
    .flatMap(dev => dev.languages)
     .filter((language, index, array) => array.indexOf(language) === index)
     .sort()
    

}

console.log(getProgrammingLanguages(devs));