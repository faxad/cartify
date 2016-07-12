/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = Rx.Observable.of(1, 2, 3, 4, 5);
    o = Rx.Observable.ofWithScheduler(Rx.Scheduler.async, 1, 2, 3, 4, 5);
});
//# sourceMappingURL=of.js.map