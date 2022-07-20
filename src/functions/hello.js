exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World! It's a very hot summer day, and the year is 2089",
  });
};
