/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    Rx.Observable.repeat(42, 4, Rx.Scheduler.async);
    Rx.Observable.repeat(42, null, Rx.Scheduler.async);
    Rx.Observable.repeat(42);
});
//# sourceMappingURL=repeat.js.map