/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.skipWithTime(1);
    o = o.skipWithTime(100, Rx.Scheduler.default);
});
//# sourceMappingURL=skipwithtime.js.map