const cat = require("./models/cat");

// Find and log all cats
burger.all(function (data) {
  console.table(data);
  // Delete cat with id of 1
  burger.delete({ id: 1 }, function (err, data) {
    console.log(data);
    // Find and log all cats
    burger.all(function (data) {
      console.table(data);
    });
  });
});
