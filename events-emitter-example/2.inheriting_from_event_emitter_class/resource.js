var utils = require("util");
var EventEmitter = require("events").EventEmitter;

function Resource(m) {
    var maxEvents = m;
    var self = this;
    process.nextTick(function () {
        var count = 0;
        self.emit("start");
        var t = setInterval(() => {
            self.emit("data", ++count);
            if (count === maxEvents) {
                self.emit("end", count);
                clearInterval(t)
            }
        }, 10);
    })
}
utils.inherits(Resource, EventEmitter);
module.exports = Resource;