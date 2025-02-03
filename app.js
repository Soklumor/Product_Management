const express = require('express');
const con = require('./config/db');
const { result } = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    // const data = await query("SELECT * FROM `tbl_products`", []);
    con.query(sql, [], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.render('index', {data: data});
    })
})

app.post('/create', async (req, res) => {
    console.log(req.body);
    const body = req.body;
    const sql = "INSERT INTO `tbl_products`(`name`, `price`) VALUES (?,?)";
    // await query(sql, [body.productName, body.productPrice]);
    con.query(sql, [body.productName, body.productPrice], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    })
})

app.post('/delete/:id', async (req, res) => {
    const productId = req.params.id;
    con.query("DELETE FROM `tbl_products` WHERE id = ?", [productId], (err, result) => {
        if(err) {
            console.log(err);
        }
        res.redirect('/');
    })
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})