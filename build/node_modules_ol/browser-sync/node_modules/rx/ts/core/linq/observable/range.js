/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o = Rx.Observable.range(1, 2);
    o = Rx.Observable.range(1, 2, Rx.Scheduler.async);
});
//# sourceMappingURL=range.js.map