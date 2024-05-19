
Build a Simple Beginner App with Node, Bootstrap and MongoDB
    https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/#addingatemplatingengine

Create project folder
    in this case /nodejs_first

Initializing the Application
    inside project folder run the following in your terminal:
        npm init -y

Installing Express
    npm install express

Installing nodemon // dev dependency
    It will watch the files in the directory it was started in, and if it detects any changes, it will automatically restart your Node application (meaning you don’t have to).
    In contrast to Express, nodemon is not something the app requires to function properly (it just aids us with development),
    so install it with this:

    npm install --save-dev nodemon

Creating some initial files
    mkdir routes && touch app.js start.js routes/index.js    

Add content to files
    app.js start.js routes/index.js

Kicking off the app  

    Finally, let’s add an npm script to make nodemon start watching our app. 
    Change the scripts section of the package.json file to look like this:

    "scripts": {
        "watch": "nodemon ./start.js"
    },