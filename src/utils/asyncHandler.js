const asyncHandler = (requestHandler) => {
  console.log("here we go");
  console.log("what is request handler", requestHandler);
  // console.log(req, res, next, "request");
  return (req, res, next) => {
    console.log(req, res, next, "request");
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
