const {Router} = require('express');
const router = Router();
const {Activity} = require('../db');

router.post("/", async (req, res) => {
    const {name, dificulty, duration, season, id} = req.body;
    seasonUppercase = season.map(s => s.toUpperCase());
    idUppercase = id.map(id => id.toUpperCase());
    try{
        const newActivity = await Activity.findOrCreate({
            where: {
                name: name.toUpperCase()
            },
            defaults: {
                name: name.toUpperCase(),
                dificulty: dificulty,
                duration: duration
            }

        })
        await newActivity[0].addCountries(idUppercase);
        await newActivity[0].addSeasons(seasonUppercase);
        res.status(201).json(newActivity);
    }
    catch (error){
        res.status(505).send(error);
    }
});

module.exports = router;