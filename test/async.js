const randomFun = () => {
  let timeInMs = Math.random() * 3000;
  console.log("Random function started [ timeInMs => ", timeInMs, " ] ..");

  let test = async () => {
    console.log(".. Random function ended [ timeInMs => ", timeInMs, " ]");
  };

  setTimeout(test, timeInMs);
};

const jobSetTwo = () => {
  let promise11 = new Promise((resolve, reject) => {
    resolve({ job: "11. promise eleven", result: 11 });
  });

  let promise12 = new Promise((resolve, reject) => {
    resolve({ job: "12. promise twelve", result: 12 });
  });

  let promise13 = new Promise((resolve, reject) => {
    resolve({ job: "13. promise thirteen", result: 13 });
  });

  let promise14 = new Promise((resolve, reject) => {
    resolve({ job: "14. promise fourteen", result: 14 });
  });

  promise11
    .then(function (result11) {
      console.log(result11.job, "resolved");
      return promise12;
    })
    .then((result12) => {
      console.log(result12.job, "resolved");
      return promise13;
    })
    .then((result13) => {
      console.log(result13.job, "resolved");
      return promise14;
    })
    .then((result14) => {
      console.log(result14.job, "resolved");
    });
};

const jobsAsyncOrdered = async () => {
  // This demonstrate 4 promise jobs processing one after the other in the order given and ..
  // .. final result send as a promise

  let promise1 = new Promise((resolve, reject) => {
    resolve({ job: "1. promise one", result: 1 });
  });

  let promise2 = new Promise((resolve, reject) => {
    resolve({ job: "2. promise two", result: 2 });
  });

  let promise3 = new Promise((resolve, reject) => {
    resolve({ job: "3. promise three", result: 3 });
  });

  let promise4 = new Promise((resolve, reject) => {
    resolve({ job: "4. promise four", result: 4 });
  });

  return await promise1
    .then(function (result1) {
      result1.total = result1.result;
      console.log(result1.job, "resolved");
      return promise2;
    })
    .then((result2) => {
      console.log(result2.job, "resolved");
      return promise3;
    })
    .then((result3) => {
      console.log(result3.job, "resolved");
      return promise4;
    })
    .then((result4) => {
      console.log(result4.job, "resolved");

      // return final result as a Promise
      return new Promise((resolve, reject) => {
        resolve({ job: "jobsAsyncOrdered", result: result4.result });
      });
    });
};

const jobsAsyncOrderedTwo = async (result) => {
  // This demonstrate 4 promise jobs processing one after the other in the order given and ..
  // .. final result send as a promise

  let promise11 = new Promise((resolve, reject) => {
    resolve({ job: "11. promise eleven", result: 11 });
  });

  let promise12 = new Promise((resolve, reject) => {
    resolve({ job: "12. promise twelve", result: 12 });
  });

  let promise13 = new Promise((resolve, reject) => {
    resolve({ job: "13. promise thirteen", result: 13 });
  });

  let promise14 = new Promise((resolve, reject) => {
    finalResult = 14 + result.result;
    resolve({ job: "14. promise fourteen", result: 14 });
  });

  return await promise11
    .then(function (result11) {
      console.log(result11.job, "resolved");
      return promise12;
    })
    .then((result12) => {
      console.log(result12.job, "resolved");
      return promise13;
    })
    .then((result13) => {
      console.log(result13.job, "resolved");
      return promise14;
    })
    .then((result14) => {
      console.log(result14.job, "resolved");

      // return final result as a Promise
      return new Promise((resolve, reject) => {
        finalResult = result14.result + result.result;
        resolve({ job: "jobsAsyncOrderedTwo", result: finalResult });
      });
    });
};

const jobsAsyncUnOrdered = async (job) => {
  // This demonstrate parellel execution of async jobs and the result return as an array in a Promise

  let promise1 = new Promise((resolve, reject) => {
    let timeInMs = Math.random() * 3000;
    setTimeout(() => {
      resolve({ job: "1. promise one", result: 1 });
    }, timeInMs);
    //resolve({ job: "1. promise one", result: 1 });
  });

  let promise2 = new Promise((resolve, reject) => {
    let timeInMs = Math.random() * 3000;
    setTimeout(() => {
      resolve({ job: "2. promise two", result: 2 });
    }, timeInMs);
    //resolve({ job: "2. promise two", result: 2 });
  });

  let promise3 = new Promise((resolve, reject) => {
    let timeInMs = Math.random() * 3000;
    setTimeout(() => {}, timeInMs);
    setTimeout(() => {
      resolve({ job: "3. promise three", result: 3 });
    }, timeInMs);
    //resolve({ job: "3. promise three", result: 3 });
  });

  let promise4 = new Promise((resolve, reject) => {
    let timeInMs = Math.random() * 3000;
    setTimeout(() => {
      resolve({ job: "4. promise four", result: 4 });
    }, timeInMs);
    //resolve({ job: "4. promise four", result: 4 });
  });

  let resultsArray = await Promise.all([
    promise1,
    promise2,
    promise3,
    promise4,
    job,
  ]);

  console.log(resultsArray);

  return resultsArray; // return as a Promise
};

const jobFour = (results) => {
  tot = 0;
  results.forEach((element) => {
    tot += element.result;
  });
  console.log(tot);
};

// async patterns
//  o1 - orderdAsyncOne().then(..).then(..)=> Promise(result)
//  o2 - orderdAsyncTwo().then(..).then(..)=> Promise(result)
//  a1 - asyncOne().then()=> Promise(result)
//  a2 - asyncTwo().then()=> Promise(result)
//
//  - jobFlowOne
//  Promise.all([a1, a2, o1, o2]) => result
//
//  or
//
//  - jobFlowTwo
//  o1.then(result1) => o2(result1).then(result2) => Promise(result3) => Promise.all([a1, a2, Promise(result3)]) => result

// follow demostrate how to execute async jobs, sequentialy and parallelly ..
// .. use of promise.then and Promise.all

const asyncMain = () => {
    jobFlowTwo();
}

const jobFlowOne = () => {
  promiseJobsAsyncOrdered = jobsAsyncOrdered();
  // This follow code just to cosole the result after done if needed
  promiseJobsAsyncOrdered.then(function (result) {
    console.log(result);
  });

  // jobFour will wait untill the all the jobs of jobsAsyncUnOrdered() is over
  // here promiseJobsAsyncOrdered passing set of async orderd jobs as a one job entity
  // jobsAsyncUnOrdered execute collection of async job parallelly
  result = jobsAsyncUnOrdered(promiseJobsAsyncOrdered);
  result.then(function (result) {
    console.log(result);
    // if you want to chain jobFour agin to another job then ..
    // .. result it should return after enclose with a another Promise ..
    // .. so it could done with the promise.then
    jobFour(result);
  });

  console.log(result); // Promise ( <pending> )
  console.log("End");

  // Very importent point - async behaviour
  //  Before display the ouput of the result of jobsAsyncUnOrdered() job, inside the .then clause, ..
  //  .. console at the outside down display as 'Promise { <pending> }' firstly
  //  so cosole output display as below
  //
  //  Also let say if the execution ending after the statment 'console.log("End")', then programme wait..
  //  .. without quiting the execution untill the statements inside then .then gets over
  //
  //  -- console output --
  //
  //      Promise { <pending> }
  //      End
  //      1. promise one resolved
  //      2. promise two resolved
  //      3. promise three resolved
  //      4. promise four resolved
  //      { job: 'jobSetOne', result: 4 }
  //      [
  //        { job: '1. promise one', result: 1 },
  //        { job: '2. promise two', result: 2 },
  //        { job: '3. promise three', result: 3 },
  //        { job: '4. promise four', result: 4 },
  //        { job: 'jobSetOne', result: 4 }
  //      ]
  //      14
};

const jobFlowTwo = () => {
  // First orded async set of job
  promise = jobsAsyncOrdered();
  promise
    .then(function (result1) {
      console.log(result1.job, "resolved");
      // second orded async set of job
      // wait until first set over, pass the outcome of first to second
      return jobsAsyncOrderedTwo(result1);
    })
    .then(function (result2) {
      // outcome from second
      console.log(result2.job, "resolved");
      console.log(result2.result);

      promiseJobsAsyncOrdered = new Promise((resolve, reject) => {
        resolve({ job: "jobsAsyncOrderedEndResult", result: result2.result });
      });
      // pass down outcome from second to unorded async job set
      promiseFinal = jobsAsyncUnOrdered(promiseJobsAsyncOrdered);

      return promiseFinal;
    })
    .then((resultArray) => {
      // array of results from async unorded jobs
      console.log(resultArray[resultArray.length - 1].job, "resolved");
      // process the final result
      jobFour(resultArray);
    });
};

module.exports = { asyncMain };
