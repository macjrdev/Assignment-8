//STEP 1
let favMovies = ['I Am Legend', '7 Pounds', 'Pursuit of Happiness', 'Batman Dark Knight', 'Training Day'];
console.log(favMovies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[2] = 'Pursuit of Happiness'
// movies[3] = 'Dark Knight'
// movies[4] = 'Training Day'
// console.log(movies)

//STEP 3
// let movies = new Array(5);
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[3] = 'Pursuit of Happiness'
// movies[4] = 'Dark Knight'
// movies[5] = 'Training Day'
// movies[2] = 'Happy Gilmore'
// console.log(movies.length)

//STEP 4
// let movies = []
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[2] = 'Pursuit of Happiness'
// movies[3] = 'Dark Knight'
// movies[4] = 'Training Day'
// delete movies[0]
// console.log(movies)

//STEP 5
// let movies = []
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[2] = 'Pursuit of Happiness'
// movies[3] = 'Dark Knight'
// movies[4] = 'Training Day'
// movies[5] = 'Happy Gilmore'
// movies[6] = 'Avatar'
// let i;
// for (i in movies) {
        // window.document.write(`${movies[i]} <br>`)      
// }

//STEP 6
// let movies = []
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[2] = 'Pursuit of Happiness'
// movies[3] = 'Dark Knight'
// movies[4] = 'Training Day'
// movies[5] = 'Happy Gilmore'
// movies[6] = 'Avatar'
// for (let i of movies) {
    // window.document.write(`${i} <br>`)      
// }

//STEP 7
// let movies = []
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[2] = 'Pursuit of Happiness'
// movies[3] = 'Dark Knight'
// movies[4] = 'Training Day'
// movies[5] = 'Happy Gilmore'
// movies[6] = 'Avatar'
// for (let i of movies.sort()) {
    // console.log(i)
// }

//STEP 8
// let movies = []
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[2] = 'Pursuit of Happiness'
// 
// let leastFavMovies = new Array(3)
// leastFavMovies[0] = 'After Earth'
// leastFavMovies[1] = 'Risen'
// leastFavMovies[2] = 'Space Jame 2021'
// 
// console.log(`Movies I like: \n\n${movies[0]} \n${movies[1]} \n${movies[2]} \n\n\n\nMovies I regret watching: \n\n${leastFavMovies[0]} \n${leastFavMovies[1]} \n${leastFavMovies[2]}`)

//STEP 9
// let movies = []
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[2] = 'Pursuit of Happiness'
// 
// let leastFavMovies = new Array(3)
// leastFavMovies[0] = 'After Earth'
// leastFavMovies[1] = 'Risen'
// leastFavMovies[2] = 'Space Jame 2021'
// 
// movies = movies.concat(leastFavMovies)
// 
// console.log(movies.sort().reverse())

//STEP 10
// let movies = []
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[2] = 'Pursuit of Happiness'
// 
// let leastFavMovies = new Array(3)
// leastFavMovies[0] = 'After Earth'
// leastFavMovies[1] = 'Risen'
// leastFavMovies[2] = 'Space Jame 2021'
// 
// movies = movies.concat(leastFavMovies)
// let lastMovie = movies[movies.length -1]
// console.log(lastMovie)


//STEP 11
// let movies = []
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[2] = 'Pursuit of Happiness'

// let leastFavMovies = new Array(3)
// leastFavMovies[0] = 'After Earth'
// leastFavMovies[1] = 'Risen'
// leastFavMovies[2] = 'Space Jame 2021'

// movies = movies.concat(leastFavMovies)
// let firstMovie = movies.find(Boolean)
// console.log(firstMovie)

//STEP 12
// let movies = []
// movies[0] = 'I Am Legend'
// movies[1] = '7 Pounds'
// movies[2] = 'Pursuit of Happiness'
// movies[3] = 'Dark Knight'
// movies[4] = 'Training Day'
// movies[5] = 'Happy Gilmore'
// movies[6] = 'Avatar'
// 
// movies.splice(0,1,'He Got Game','World War Z','She Got to Have It')
// console.log(movies)

//STEP 13
// let movies = [['I Am Legend',1], ['7 Pounds',3], ['Dark Knight',2], ['Happy Gilmore',4]];
// let movieTitles = movies.filter((item) => {
    // return typeof item == 'string'
// });
// 
// console.log(movieTitles);

//STEP 14
// let employees = []
// employees[0] = 'Will'
// employees[1] = 'Martin'
// employees[2] = 'Mac'
// employees[3] = 'McAllister'
// 
// let showEmployee = () => {
    // employees.forEach(employees => {
        // console.log(employees);
    // });
// };
// showEmployee();

//STEP 15

//STEP 16

//STEP 17