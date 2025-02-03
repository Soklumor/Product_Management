const { values } = require('lodash');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: '',      
    database: 'pms' 
});

// exports.query = (sql, value) => {
//     return new Promise((resolve, reject) => {
//         con.query(sql, value, (err, result) => {
//             if (err) reject(err);
//             resolve(result);
//         })
//     })
// }

module.exports = con;

