/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o.delay(1000);
    o.delay(new Date());
    o.delay(1000, Rx.Scheduler.async);
    o.delay(new Date(), Rx.Scheduler.async);
    o.delay(function (x) { return Rx.Observable.timer(x.length); });
    o.delay(Rx.Observable.timer(1000), function (x) { return Rx.Observable.timer(x.length); });
    o.delay(function (x) { return Rx.Observable.timer(x.length).toPromise(); });
});
//# sourceMappingURL=delay.js.map