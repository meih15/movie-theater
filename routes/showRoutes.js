const express = require('express');
const router = express.Router();
const { check } = require('express-validator')

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
router.put(
    '/:showId/available',
    [check('available').isBoolean().toBoolean()],
    updateShowAvailability
  );
router.delete('/:showId', deleteShow);
router.get('/genre', getShowsByGenre);

module.exports = router;
