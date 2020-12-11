const cat = require("./models/cat");

// Find and log all cats
cat.all(function (data) {
  console.table(data);
  // Delete cat with id of 1
  cat.delete({ id: 1 }, function (err, data) {
    console.log(data);
    // Find and log all cats
    cat.all(function (data) {
      console.table(data);
    });
  });
});
