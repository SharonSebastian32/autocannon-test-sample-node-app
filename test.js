const autocannon = require("autocannon");

const run = autocannon(
  {
    url: "http://localhost:3000",
    connections: 10, // Number of concurrent connections
    duration: 10, // Test duration in seconds
    method: "GET", // HTTP method
    headers: {
      "Content-Type": "application/json",
    },
  },
  (err, results) => {
    if (err) {
      console.error("Error running autocannon:", err);
    } else {
      console.log("Autocannon results:", results);
    }
  }
);

autocannon.track(run);
