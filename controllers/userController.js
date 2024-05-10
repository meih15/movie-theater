const { Show, User } = require('../models/index')


//get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (users) {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).send('Error getting all users', error)
    }
}

//get one user by id
const getOneUser = async (req, res) => {
    try{
        const userId = req.params.userId;
        const user = await User.findByPk(userId);

        if(user) {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send('Error getting user by id', error)
    }
}

//get all shows watched by user
const getShowsWatchedByUser = async (req, res) => {
    try{
        const userId = req.params.userId;
        const user = await User.findByPk(userId);

        if (user) {
            const shows = await user.getShows();
            res.status(200).json(shows);
        }
    } catch (error) {
        res.status(500).send('Error getting shows watched by user', error)
    }
}


//associate a user with a show they have watched
const addShowToUser = async (req, res) => {
    try{
        const userId = req.params.userId;
        const showId = req.params.showId;
        const user = await User.findByPk(userId);
        const show = await Show.findByPk(showId);

        if (user && show) {
            await user.addShow(show);
            res.send('User has been successfully associated with show!')
        }

    } catch (error) {
        res.status(500).send('Error associating show to user', error)
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    getShowsWatchedByUser,
    addShowToUser
}