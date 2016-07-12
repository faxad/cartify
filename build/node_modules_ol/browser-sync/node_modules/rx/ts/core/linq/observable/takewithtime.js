/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.takeWithTime(1);
    o = o.takeWithTime(100, Rx.Scheduler.default);
});
//# sourceMappingURL=takewithtime.js.map