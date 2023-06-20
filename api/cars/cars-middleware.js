const carsModel = require("./cars-model");

const checkCarId = async (req, res, next) => {
  try {
    const existID = await carsModel.getById(req.params.id);
    if (!existID) {
      res.status(404).json({ mesaj: `${req.params.id} kimliğine sahip araba bulunamadı` })
    }
    else {
      req.currentCar = existID;
      next();
    }
  } catch (error) {
    next(error);
  }
}

const checkCarPayload = async (req, res, next) => {
  // HOKUS POKUS
}

const checkVinNumberValid = async (req, res, next) => {
  // HOKUS POKUS
}

const checkVinNumberUnique = async (req, res, next) => {
  // HOKUS POKUS
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
