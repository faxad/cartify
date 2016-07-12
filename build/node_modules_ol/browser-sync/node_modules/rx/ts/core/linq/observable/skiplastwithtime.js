/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.skipLastWithTime(1);
    o = o.skipLastWithTime(1, Rx.Scheduler.async);
});
//# sourceMappingURL=skiplastwithtime.js.map