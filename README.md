 # Autocannon Test Application

## Overview

The **Autocannon Test Application** is a performance testing tool designed to assess the scalability and performance of your web application or API. Using **Autocannon**, a high-performance HTTP benchmarking tool built for Node.js, this app allows you to simulate multiple concurrent requests to your server, measure response times, and determine how well your system performs under load.

## Features

- **Concurrency Simulation**: Simulates multiple clients making requests to test your server’s ability to handle concurrent traffic.
- **Customizable Load Parameters**: Configure the number of requests, concurrency level, duration, and more.
- **Real-time Metrics**: Provides detailed metrics including request/response statistics, connection rates, and latency.
- **Result Output**: Generates performance reports and logs to evaluate the health of your web application.

## Requirements

- **Node.js** (version 16.x or higher)
- **Autocannon** (installed globally or as a dependency)
- Internet connection (for running tests against remote servers)

## Installation

To get started, clone this repository and install the required dependencies:

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/autocannon-test-app.git
cd autocannon-test-app
```

### Step 2: Install dependencies

If you're using **npm**, run:

```bash
npm install
```

Or if you're using **yarn**, run:

```bash
yarn install
```

### Step 3: Install Autocannon (globally or as a devDependency)

You can install Autocannon globally using npm:

```bash
npm install -g autocannon
```

Alternatively, you can add it as a devDependency:

```bash
npm install --save-dev autocannon
```

## Configuration

Before running the test, you can adjust the configuration by editing the `config.js` file. Here you can set parameters such as:

- **URL**: The target URL for performance testing.
- **Requests per Second (RPS)**: The target request rate.
- **Duration**: How long to run the test.
- **Concurrency**: The number of simultaneous requests per worker.
  
Example configuration:

```javascript
module.exports = {
  url: 'http://localhost:3000',
  duration: 10, // Test duration in seconds
  rps: 1000,    // Requests per second
  concurrency: 50, // Number of concurrent clients
};
```

## Running the Test

To initiate the performance test, run the following command:

```bash
node test.js
```

This will start a series of benchmark tests against the specified server and output the results to the console. You can see detailed statistics including:

- **Requests per second (RPS)**
- **Latency (min, max, mean)**
- **Connection duration**
- **Error rates**

## Analyzing the Results

After running the test, you will receive an output similar to the following:

```bash
⚡️ Running Autocannon...

[####################################] 5000 requests in 10s
  Requests: 5000
  Errors: 0
  Avg Latency: 30ms
  Requests per second: 500
  Max Latency: 150ms
  Min Latency: 10ms
```

- **Requests**: Total number of requests sent.
- **Errors**: The number of failed requests (if any).
- **Avg Latency**: The average time taken for a request to be completed.
- **RPS**: The rate of requests served per second.
- **Max/Min Latency**: The highest and lowest latency observed.

## Customization

You can easily extend the functionality of this test application. Possible extensions include:

- **Advanced Configuration**: Modify load profiles (e.g., ramp-up periods, burst testing).
- **Custom Test Scenarios**: Incorporate different HTTP methods (e.g., `POST`, `PUT`) or simulate API interactions.
- **Metrics Dashboard**: Integrate with monitoring systems to visualize and track metrics over time.

## Conclusion

The **Autocannon Test Application** is an efficient and flexible tool for load testing your web server or API. By adjusting the configuration and using Autocannon's robust features, you can evaluate performance under a variety of traffic patterns and understand how your system behaves under stress.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
