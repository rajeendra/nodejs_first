
const testEvents = (event) => {
    console.log(event, 'done.')
    
}

const eventOne = (req, res, next) => {
    testEvents("Event one");
    // passing data through request object
    req.dataEventOne = "{ Event one data }";
    next();
}

const eventTwo = (req, res, next) => {
    console.log(req.dataEventOne);
    testEvents("Event two ");
    next();
}

module.exports = { eventOne, eventTwo };
