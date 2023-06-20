const router = require("express").Router();
const carsModel = require("./cars-model");

router.get("/", async (req, res, next) => {
    try {
        const allCars = await carsModel.getAll();
        res.json(allCars);
    } catch (error) {
        next(error)
    }
})

module.exports = router;
