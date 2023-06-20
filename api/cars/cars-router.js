const router = require("express").Router();
const carsModel = require("./cars-model");
const mw = require("./cars-middleware");

router.get("/", async (req, res, next) => {
    try {
        const allCars = await carsModel.getAll();
        res.json(allCars);
    } catch (error) {
        next(error)
    }
})

router.get("/:id", mw.checkCarId, (req, res, next) => {
    try {
        res.json(req.currentCar);
    } catch (error) {
        next(error);
    }
})

module.exports = router;
