const pool = require('db.js')

function search (email){
    pool.connect(function(err) {
        if (err) throw err;
        pool.query(`SELECT * FROM Users WHERE email = ${email}`, function (err, result, fields) {
            console.log(result)
          if (err) throw err;
          console.log(result);
        });
      });

}