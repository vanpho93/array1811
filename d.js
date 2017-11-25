// const a = console.log;
// a(1);
function getLog() {
    return console.log;
}

getLog()(1);
