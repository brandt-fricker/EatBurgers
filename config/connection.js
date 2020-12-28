// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSBD_URL) {
  connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
  connection = mysql.createConnection({
    host: "jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "c0m4sf7p0rlq5kv8",
    password: "hunnqlzyrpcr7r0z",
    database: "bfq9vf55dob83kvg",
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
