/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.takeLastWithTime(1);
    o = o.takeLastWithTime(1, Rx.Scheduler.async, Rx.Scheduler.default);
});
//# sourceMappingURL=takelastwithtime.js.map