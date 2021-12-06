module.exports = (err, req, res, next) => {
  console.log("An error occured");
  console.log(err);
  return res.status(err.statusCode || 500).json({
    status: err.status || "Internal Server Error",
    message: err.message || "Please retry",
  });
};
