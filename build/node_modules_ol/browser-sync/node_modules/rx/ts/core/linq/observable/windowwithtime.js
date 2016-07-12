/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var so = o.windowWithTime(100);
    so = o.windowWithTime(100, 5);
    var so = o.windowWithTime(100, Rx.Scheduler.async);
    so = o.windowWithTime(100, 5, Rx.Scheduler.async);
});
//# sourceMappingURL=windowwithtime.js.map