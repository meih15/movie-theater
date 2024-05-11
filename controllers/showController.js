const { Show, User } = require('../models/index');

//get all shows
const getAllShows = async (req, res) => {
    try {
        const shows = await Show.findAll();
        if (shows) {
            res.status(200).json(shows);
        }
    } catch (error) {
        res.status(500).send('Error getting shows', error)
    }
}

//get shows by Id
const getOneShow = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);

        if(show) {
            res.status(200).json(show);
        }
    } catch (error) {
        res.status(500).send('Error getting show by id', error)
    }
}

//get all users who watched show
const getAllUsersThatWatchedShow = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);

        if (show) {
            const users = await show.getAllUsers();
            res.status(200).json(users);
        }
    
    } catch (error) {
        res.status(500).send('Error getting all users who watched show', error)
    }
}

//update availability status of a show
const updateShowAvailability = async (res, req) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        const availableInfo = req.body;
        if (show) {
            await show.update(availableInfo);
            res.status(200).json(show)
        }
    } catch (error) {
        res.status(500).send('Error updating show availability', error)
    }
}

//delete a show by id
const deleteShow = async (req, res) => {
    try {
        const showId = req.params.showId;
        const show = await Show.findByPk(showId);
        if (show) {
            await show.destroy();
            res.status(200).send("Show has been deleted from the database successfully!");
        }
    } catch (error) {
        res.status(500).send('Error deleting show', error)
    }
}

//get shows by genre
const getShowsByGenre = async (req, res) => {
    try {
        const genre = req.query.genre;
        const showsByGenre = await Show.findAll({ where: { genre } });

        if (showsByGenre.length === 0) {
            res.status(200).send('there are no shows with that genre...');
        }

        res.status(200).json(showsByGenre)
    } catch (error) {
        res.status(500).send('Error getting shows by genre', error)
    }
}


module.exports = {
    getAllShows,
    getOneShow,
    getAllUsersThatWatchedShow,
    updateShowAvailability,
    deleteShow,
    getShowsByGenre
}