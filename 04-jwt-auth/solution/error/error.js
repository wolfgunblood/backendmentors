class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, error) => {
  return new CustomAPIError(msg, error);
};

module.exports = { CustomAPIError, createCustomError };
