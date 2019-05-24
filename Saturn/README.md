Files Needed

package.json
 1. npm init
 2. build need to run npm start

    "scripts": {
      "start": "node server.js"
    }

server.js
 1. port that it is listening on is the process.env.PORT in the (app.yaml)

    const express = require('express');
    const app = express();

    // Listen to the App Engine-specified port, or 8080 otherwise
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
    });

 app.yaml
  1. Declare runtime environment

    runtime: nodejs8

  2. unique service name, this must be diffenrent each time the app is deployed so using versionig is reccomended

    service: saturn-sercice-v1

  3. See morge configuration if need be
    https://cloud.google.com/appengine/docs/standard/nodejs/config/appref

