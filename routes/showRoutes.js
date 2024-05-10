const express = require('express');
const router = express.Router();

const {
    getAllShows,
    getOneShow,
    getAllUsersThatWatchedShow,
    updateShowAvailability,
    deleteShow,
    getShowsByGenre,
} = require('../controllers/showController');

router.get('/', getAllShows);
router.get('/:showId', getOneShow);
router.get('/:showId/users', getAllUsersThatWatchedShow);
router.put('/:showId', updateShowAvailability);
router.delete('/:showId', deleteShow);
router.get('/genre', getShowsByGenre);

module.exports = router;
