const burger = require("./models/burgers.js");

// Find and log all burgers
burger.all(function (data) {
  console.table(data);
  // Delete burger with id of 1
  burger.delete({ id: 1 }, function (err, data) {
    console.log(data);
    // Find and log all burgers
    burger.all(function (data) {
      console.table(data);
    });
  });
});
