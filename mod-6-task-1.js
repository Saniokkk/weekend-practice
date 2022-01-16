// Создать функцию generatePetCard,
// которая принимает 3 аргумента: kind, year, name
// Функция должна возвращать разметку HTML:
// <li class="petCard">
//   <h2>Name Year</h2>
//   <p>Животное  Kind - Year год рождения. Возраст животного - Years лет.</p>
// </li>
// высчитать возраст животного и если старше 4 лет добавляем "лет" иначе добавлеем "года"
// Создать новый нумерованный список с классом pets
// Создать 4 карточки для животных, используя функцию generatePetCard
// Поместить эти 4 карточки внутрь списка с классом pets

// Поместить список c классом pets на страницу DOM -  в DIV с классом container

// Добавить кнопку Удалить на каждую карточку животного

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки

// 2. Создать функцию удаления

// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку

const petsList = [
  { kind: "Dog", year: 2015, name: "lassie" },
  { kind: "Cat", year: 2016, name: "einstein" },
  { kind: "Hedgehog", year: 2019, name: "elizabeth" },
  { kind: "Hamster", year: 2020, name: "alcatraz" },
];

function generatePetCard({ kind, year, name }) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const age = currentYear - year;
  return `<li class="petCard">
   <h2>${name} ${year}</h2>
   <p>Животное  ${kind} - ${year} год рождения. Возраст животного - ${age} ${
    age > 4 ? "лет" : "года"
  }.</p>
  <button type="button">Удалить</button>
</li>`;
}

const cardsList = document.createElement("ol");
cardsList.classList.add("pets");

// const cards = petsList.map(generatePetCard).join("");
const cards = petsList.reduce((acc, item) => acc + generatePetCard(item), "");
const containerRef = document.querySelector(".container");

cardsList.insertAdjacentHTML("beforeend", cards);
containerRef.append(cardsList);
const buttonsRef = document.querySelectorAll("button");
buttonsRef.forEach((button) =>
  button.addEventListener("click", onRemoveBtnClick)
);

function onRemoveBtnClick(event) {
  const currentBtn = event.currentTarget;
  currentBtn.closest(".petCard").remove();
}
