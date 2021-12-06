const express = require("express"),
  taskController = require("./../controllers/taskController"),
  router = express.Router();

router.get("/", taskController.findAll);
router.get("/:id", taskController.findOne);
router.post("/", taskController.createOne);
router.put("/:id", taskController.update);
router.delete("/one/:id", taskController.delete);
router.delete("/all/", taskController.deleteAll);

module.exports = router;
