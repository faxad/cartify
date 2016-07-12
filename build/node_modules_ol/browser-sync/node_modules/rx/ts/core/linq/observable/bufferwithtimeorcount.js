/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var so = o.bufferWithTimeOrCount(100, 200);
    var so = o.bufferWithTimeOrCount(100, 200, Rx.Scheduler.default);
});
//# sourceMappingURL=bufferwithtimeorcount.js.map