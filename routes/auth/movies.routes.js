const express = require('express');
const router = express.Router();
const Movie = require('../../models/Movies')

router.post('/addMovie', async (req, res, next) => {
const body = req.body
try {
    const newMovie = await Movie.create(body)
    res.json(newMovie)
} catch (error) {
    console.error(error)
}
}
)

router.put('/updateMovie/:id', async (req, res, next) => {
    const body = req.body
    console.log(body)
    const selectedMovie = req.params.id
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(selectedMovie, body, {new: true});
        res.json(updatedMovie)
    } catch (error) {
        console.error(error)
        
    }
}
)


router.delete('/:id/delete', async (req, res, next) => {
    try {
        const movieDelete = await Movie.findOneAndDelete({ id: req.params.id });
        res.status(400).json({ msg: `No movie with the id of ${req.params.id}` })

    } catch (error) {
        console.log(error); 
    }
})












module.exports = router;
