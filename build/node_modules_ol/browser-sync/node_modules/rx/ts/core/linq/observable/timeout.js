/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.timeout(100);
    o.timeout(100, Rx.Scheduler.default);
    o.timeout(new Date());
    o.timeout(new Date(), Rx.Scheduler.default);
    o.timeout(100, o);
    o.timeout(new Date(), o);
    o.timeout(100, o, Rx.Scheduler.async);
    o.timeout(new Date(), o, Rx.Scheduler.async);
    o.timeout(function (x) { return Rx.Observable.interval(1000); });
    o.timeout(function (x) { return Rx.Observable.interval(1000); }, Rx.Observable.just('100'));
    o.timeout(Rx.Observable.interval(1000), function (x) { return Rx.Observable.interval(1000); });
    o.timeout(Rx.Observable.interval(1000), function (x) { return Rx.Observable.interval(1000); }, Rx.Observable.just('100'));
});
//# sourceMappingURL=timeout.js.map