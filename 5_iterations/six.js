array = ["ironMan", "captainAmerica", "thor", "hulk", "hawkEye"];

// const elements = array.forEach((item) => {
//   console.log(item);
//   return item
// });
// console.log(elements);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];

const newNums = nums.filter((num) => num > 0);
// console.log(newNums);

const newNumber = [];
array.forEach((item) => {
  newNumber.push(item);
});
// console.log(newNumber);

const books = [
  { title: "The Silent Patient", genre: "Thriller", publish: 2019, edition: 1 },
  { title: "Atomic Habits", genre: "Self-Help", publish: 2018, edition: 2 },
  { title: "Educated", genre: "Memoir", publish: 2018, edition: 1 },
  { title: "Sapiens", genre: "History", publish: 2011, edition: 3 },
  {
    title: "The Midnight Library",
    genre: "Fiction",
    publish: 2020,
    edition: 1,
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    genre: "Self-Help",
    publish: 2016,
    edition: 4,
  },
  {
    title: "Where the Crawdads Sing",
    genre: "Mystery",
    publish: 2018,
    edition: 2,
  },
  { title: "Becoming", genre: "Biography", publish: 2018, edition: 1 },
  {
    title: "Project Hail Mary",
    genre: "Science Fiction",
    publish: 2021,
    edition: 1,
  },
];

const userBooks = books.filter((book) => book["genre"] === "Self-Help");

const userBooksYear = books.filter(
  (book) => book["publish"] > 2015 && book["genre"] === "Self-Help"
);
console.log(userBooksYear);
