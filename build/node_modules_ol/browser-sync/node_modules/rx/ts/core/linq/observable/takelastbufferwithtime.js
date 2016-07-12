/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var o2;
    o2 = o.takeLastBufferWithTime(1);
    o2 = o.takeLastBufferWithTime(1, Rx.Scheduler.async);
});
//# sourceMappingURL=takelastbufferwithtime.js.map