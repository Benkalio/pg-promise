const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/posttest'
const db = pgp(connectionString)

db.none('INSERT INTO tech(name,course,price,imageURL) VALUES($2,$4,$3,$1)', ['Fullstack', 'Developer', 3400, 'fullstack.png'])
  .then(() => {
    console.log('Success');
  }).catch((error) => console.log(error))