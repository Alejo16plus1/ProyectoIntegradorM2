const { Favorite } = require("../DB_connection")

exports.deleteFav = async(req, res) => {
    const { id } = req.params

    try {

        if(!id){
            return res.status(401).json({error: "Falta el ID"});
        }

        await Favorite.destroy({
            where: {id}
        })

        const charsFav = await Favorite.findAll();

        return res.status(200).json(charsFav)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

