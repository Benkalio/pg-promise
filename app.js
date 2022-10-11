const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/posttest'
const db = pgp(connectionString)

// Retrieve TABLE 
db.any('SELECT name,course,price,imageURL FROM tech WHERE price < $1;',[4000])
  .then((tech) => {
    console.log(tech);
  }).catch((error) => console.log(error));


// ADD 
// db.none('INSERT INTO tech(name,course,price,imageURL) VALUES($2,$4,$3,$1)', ['Fullstack', 'Developer', 3400, 'fullstack.png'])
//   .then(() => {
//     console.log('Success');
//   }).catch((error) => console.log(error))

// INSERT ONE (CREATE)
// db.one('INSERT INTO tech(name,course,price,imageURL) VALUES($2,$4,$3,$1) RETURNING techid',['Cloud', 'Engineer', 4200, 'cloudengineer.png'])
//   .then((data) => {
//     console.log(data.techid);
//   }).catch((error) => console.log(error))