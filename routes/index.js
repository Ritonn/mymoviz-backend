var express = require('express');
var router = express.Router();

const MDB_API_KEY = process.env.MDB_API_KEY;

router.get('/movies', (req, res) => {
    fetch('https://api.themoviedb.org/3/discover/movie', {
        method: 'GET',
        headers : { 
            'Authorization': `Bearer ${MDB_API_KEY}`,
             'accept': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            res.json({ movies: data.results})
        })
})

module.exports = router;
