const {Router} = require('express');
const router = Router();
const {Activity, Country} = require('../db');

router.get("/", async (req, res, next) => {
    try{
        const activities = await Activity.findAll({
            attributes: ['name'],
            include: { 
                model: Country,
                attributes: ['name']
            }
        });
        return activities.length ? res.json(activities) : res.sendStatus(404);
    }
    catch (error){
        next(error)
    }
});

router.post("/", async (req, res, next) => {
    const {name, dificulty, duration, season, id} = req.body;
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
        await newActivity[0].addCountries(id);
        await newActivity[0].addSeasons(season);
        res.status(201).json(newActivity);
    }
    catch (error){
        next(error)
    }
});

module.exports = router;