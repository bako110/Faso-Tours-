const express = require("express");
const AccommodationController = require("../controller/accommodationController");

const router = express.Router();

router.get("/", AccommodationController.getAll);
router.get("/:id", AccommodationController.getById);
router.post("/", AccommodationController.create);
router.put("/:id", AccommodationController.update);
router.delete("/:id", AccommodationController.delete);

module.exports = router;
