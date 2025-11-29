export const globalErrorHandler = (err, req, res, next) => {
  console.error("🔥 Error caught by global handler:", err);

  // mongoose validation error
  if (err.name == "ValidationError") {
    const errors = Object.values(err.errors).map((el) => el.message);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
      errors,
    });
  }

  // mongoose duplicate key (e.g. unique email)
  if (err.code == 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({
      success: false,
      message: `Duplicate value for field: '${field}'. Please use another.`,
      errors,
    });
  }

  // JWT related errors
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      message: "Invalid or malformed token.",
    });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      message: "Token expired. Please login again.",
    });
  }

  // Default fallback for unhandled errors
  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error.",
  });
};
