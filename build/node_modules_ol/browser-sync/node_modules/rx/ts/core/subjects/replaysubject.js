/// <reference path="./subject.ts" />
/// <reference path="../concurrency/scheduler.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var s = new Rx.ReplaySubject();
    var s = new Rx.ReplaySubject(10);
    var s = new Rx.ReplaySubject(10, 10);
    var s = new Rx.ReplaySubject(10, 10, Rx.Scheduler.async);
});
//# sourceMappingURL=replaysubject.js.map