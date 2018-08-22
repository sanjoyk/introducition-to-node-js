var Resource = require("./resource");
var r = new Resource(7);
r.on("start", function () {
    console.log("I have started");
})

r.on("data", function (data) {
    console.log("I received data--->", data);
})
r.on("end", function (t) {
    console.log("Im done with ", t, " data events");
})