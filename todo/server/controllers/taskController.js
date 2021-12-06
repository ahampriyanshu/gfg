const catchAsync = require("../utils/catchAsync"),
  Task = require("../models/taskModel");

exports.createOne = catchAsync(async (req, res, next) => {
  const task = new Task({
    title: req.body.title,
  });

  task
    .save(task)
    .then((data) => {
      res.status(200).send({ message: `New Task Added` });
    })
    .catch((err) => {
      next(err);
    });
});

exports.findAll = catchAsync(async (req, res, next) => {
  Task.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      next(err);
    });
});

exports.findOne = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  Task.findById(id)
    .then((data) => {
      if (data) res.send(data);
      else res.status(404).send({ message: `Task Not found with id: ${id}` });
    })
    .catch((err) => {
      next(err);
    });
});

exports.update = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (!req.body) {
    return res.status(400).send({
      message: "Empty form !",
    });
  }
  Task.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot update taks with id=${id}.`,
        });
      }
      res.send({ message: `${data.title} was updated to ${req.body.title}` });
    })
    .catch((err) => {
      next(err);
    });
});

exports.delete = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  Task.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `${data.title} doesn't exists`,
        });
      }
      res.send({
        message: `Removed ${data.title}`,
      });
    })
    .catch((err) => {
      next(err);
    });
});

exports.deleteAll = catchAsync(async (req, res, next) => {
  Task.deleteMany()
    .then((data) => {
      res.send({
        message: `Removed ${data.deletedCount} tasks`,
      });
    })
    .catch((err) => {
      next(err);
    });
});
