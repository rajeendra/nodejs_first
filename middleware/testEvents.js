
const testEvents = (event) => {
    console.log(event, 'done.')
    
}

const eventOne = (req, res, next) => {
    testEvents("Event one");
    next();
}

const eventTwo = (req, res, next) => {
    testEvents("Event two");
    next();
}

module.exports = { eventOne, eventTwo };
