const { Fav, User } = require('../models');

module.exports = {
    getFavs(req, res) {
        Fav.find()
        .then((favs) => res.json(favs))
        .catch((err) => res.status(500).json(err));
    },

}