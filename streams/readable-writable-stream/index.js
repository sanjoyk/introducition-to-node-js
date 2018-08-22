var request = require("request");
var s = request("https://meaww.com/");

s.on("data", function (chunk) {
    console.log(">>>>>>>>>>>>>>>data>>>>>>>>>>>>>>", chunk);
});
s.on("end", function () {
    console.log(">>>>>>>>>>>>>>>>>>Done>>>>>>>>>>>>>");
})