const loggify = (request, response, next) => {
    console.log(`Request: ${request.method} at ${request.url}`);
    next();
};
  
  module.exports = loggify;
  