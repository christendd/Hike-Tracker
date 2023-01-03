const express = require('express');
const Hike = require('../models/hikes');
const router = express.Router();

// I
router.get('/', (req, res) => {
	Hike.find({}, (err, foundHikes) => {
		res.render('index.ejs', {
			hikes: foundHikes
		});
	});
});

// N
router.get('/new', (req, res) => {
    res.render('new.ejs');
});
// D
router.delete('/:id', (req, res) => {
    Hike.findByIdAndRemove(req.params.id, () => {
        res.redirect('/');
    });
});
// U
router.put('/:id', (req, res) => {
    Hike.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/');
    });
});
// C
router.post('/', (req, res) => {
    Hike.create(req.body, (err, createdHike) => {
        res.redirect('/');
    });
});
// E
router.get('/:id/edit', (req, res) => {
    Hike.findById(req.params.id, (err, foundHike) => {
        res.render('edit.ejs', {
            hike: foundHike
        });
    });
});
// S
router.get('/:id', (req, res) => {
    Hike.findById(req.params.id, (err, foundHike) => {
        res.render('show.ejs', {
            hike: foundHike
        });
    });
});


module.exports = router;