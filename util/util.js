
const line = (txt) => {
    if (txt == undefined)
        console.log("-".repeat(process.stdout.columns - 100 + 1));
    else {
        console.log("");
        const title = "--- [ " + txt + " ]"
        const line1 = "-".repeat(process.stdout.columns - 100 - title.length);
        console.log(title,line1);
    } 
}

module.exports = { line };