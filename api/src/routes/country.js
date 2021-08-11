const {Router} = require('express');
const {Op} = require('sequelize');
const router = Router();
const {Country, Activity, Season} = require('../db');

router.get("/", async (req, res) => {
    const {name, ascDesc, region, population} = req.query;
    try {
        if(name) {
            const country = await Country.findAll({
                where: {
                    name: { [Op.iLike]: `%${name}%`},
                },
                attributes: ['id', 'name', 'flag', 'region'],
            })
            return country.length ? res.json(country) : res.sendStatus(404);
        }
        if(ascDesc && ascDesc === 'asc') {
            const asc = await Country.findAll({
                attributes: ['name', 'flag', 'region'],
                order: [['name', 'ASC']]
            })
            return asc.length ? res.json(asc) : res.sendStatus(404);
        } 
        if(ascDesc && ascDesc === 'desc') {
            const desc = await Country.findAll({
                attributes: ['name', 'flag', 'region'],
                order: [['name', 'DESC']]
            })
            return desc.length ? res.json(desc) : res.sendStatus(404);
        } 
        if(region) {
            const regionCountries = await Country.findAll({
                where: {
                    region: { [Op.iLike]: `${reg}`},
                },
                attributes: ['id', 'name', 'flag', 'region'],
            })
            return regionCountries.length ? res.json(regionCountries) : res.sendStatus(404);
        }
        if(population && population === 'higher') {
            const higher = await Country.findAll({
                attributes: ['name', 'flag', 'region'],
                order: [['population', 'DESC']]
            })
            return higher.length ? res.json(higher) : res.sendStatus(404);
        } 
        if(population && population === 'lower') {
            const lower = await Country.findAll({
                attributes: ['name', 'flag', 'region'],
                order: [['population', 'ASC']]
            })
            return lower.length ? res.json(lower) : res.sendStatus(404);
        }
        else {
            const countries = await Country.findAll({
                attributes: ['id', 'name', 'flag', 'region']
            })
            return countries.length ? res.json(countries) : res.sendStatus(404);
        }
    }
    catch (error){
        res.status(505).send(error);
    }
});

router.get("/:idPais", async(req, res) => {
    const {idPais} = req.params;
    try {
        const countryById = await Country.findAll({
            where: {
                id: { [Op.iLike]: `${idPais}`},
            },
            attributes: ['id', 'name', 'flag', 'region', 'capital', 'subregion', 'area', 'population'],
            include: { 
                model: Activity,
                attributes: ['name', 'dificulty', 'duration'],
                include: {
                    model: Season,
                    attributes: ['name'],
                }
            }
        });
        countryById.length ? res.json(countryById) : res.sendStatus(404);
    }
    catch (error){
        res.status(505).send(error);
    }
});

module.exports = router;