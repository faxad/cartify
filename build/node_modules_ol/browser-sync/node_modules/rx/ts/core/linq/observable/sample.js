/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.sample(100);
    o.sample(100, Rx.Scheduler.async);
    o.sample(Rx.Observable.interval(100));
    o.sample(Rx.Observable.interval(100), Rx.Scheduler.async);
    o.throttleLatest(100);
    o.throttleLatest(100, Rx.Scheduler.async);
    o.throttleLatest(Rx.Observable.interval(100));
    o.throttleLatest(Rx.Observable.interval(100), Rx.Scheduler.async);
});
//# sourceMappingURL=sample.js.map