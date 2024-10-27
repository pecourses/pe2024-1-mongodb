// Підключення до бази даних
use('cinema')

// Створення початкової колекції "movies"
db.movies.insertMany([
  {
    title: 'Inception', // Назва фільму
    genre: 'Sci-Fi', // Жанр фільму (наукова фантастика)
    director: 'Christopher Nolan', // Ім'я режисера фільму
    releaseYear: 2010, // Рік випуску фільму
    duration: 148, // Тривалість фільму у хвилинах
    ratings: [
      // Масив оцінок, даних різними рецензентами
      { reviewer: 'John Doe', score: 9 }, // Оцінка 9 від рецензента John Doe
      { reviewer: 'Jane Smith', score: 8 } // Оцінка 8 від рецензента Jane Smith
    ],
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'], // Список акторів, що брали участь у фільмі
    boxOffice: {
      budget: 160000000, // Бюджет фільму в доларах США
      revenue: 829895144 // Касові збори фільму в доларах США
    },
    country: 'USA', // Країна, в якій був знятий фільм
    tags: ['mind-bending', 'dreams', 'thriller'] // Масив тегів, що описують фільм
  },
  {
    title: 'Parasite',
    genre: 'Drama',
    director: 'Bong Joon-ho',
    releaseYear: 2019,
    duration: 132,
    ratings: [
      { reviewer: 'Alice Brown', score: 10 },
      { reviewer: 'Bob Johnson', score: 9 }
    ],
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
    boxOffice: {
      budget: 11400000,
      revenue: 257000000
    },
    country: 'South Korea',
    tags: ['social', 'dark comedy', 'thriller']
  },
  {
    title: 'The Godfather',
    genre: 'Crime',
    director: 'Francis Ford Coppola',
    releaseYear: 1972,
    duration: 175,
    ratings: [
      { reviewer: 'Chris Evans', score: 10 },
      { reviewer: 'Scarlett Johansson', score: 9 }
    ],
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    boxOffice: {
      budget: 6000000,
      revenue: 246120974
    },
    country: 'USA',
    tags: ['mafia', 'classic', 'family']
  },
  {
    title: 'Spirited Away',
    genre: 'Animation',
    director: 'Hayao Miyazaki',
    releaseYear: 2001,
    duration: 125,
    ratings: [
      { reviewer: 'Emma Watson', score: 9 },
      { reviewer: 'Daniel Radcliffe', score: 8 }
    ],
    cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki'],
    boxOffice: {
      budget: 19000000,
      revenue: 395800000
    },
    country: 'Japan',
    tags: ['fantasy', 'anime', 'adventure']
  },
  {
    title: 'The Dark Knight',
    genre: 'Action',
    director: 'Christopher Nolan',
    releaseYear: 2008,
    duration: 152,
    ratings: [
      { reviewer: 'Tom Hardy', score: 9 },
      { reviewer: 'Christian Bale', score: 10 }
    ],
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    boxOffice: {
      budget: 185000000,
      revenue: 1004558444
    },
    country: 'USA',
    tags: ['superhero', 'crime', 'thriller']
  }
])
