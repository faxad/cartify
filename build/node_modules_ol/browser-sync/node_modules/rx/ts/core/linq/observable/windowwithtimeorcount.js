/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var so = o.windowWithTimeOrCount(100, 200);
    var so = o.windowWithTimeOrCount(100, 200, Rx.Scheduler.default);
});
//# sourceMappingURL=windowwithtimeorcount.js.map