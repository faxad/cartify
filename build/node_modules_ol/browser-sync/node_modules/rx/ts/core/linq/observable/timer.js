/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = Rx.Observable.timer(100);
    o = Rx.Observable.timer(100, 100);
    o = Rx.Observable.timer(100, 100, Rx.Scheduler.async);
});
//# sourceMappingURL=timer.js.map