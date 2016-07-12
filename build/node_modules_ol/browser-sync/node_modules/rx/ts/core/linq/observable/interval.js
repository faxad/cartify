/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = Rx.Observable.interval(100);
    o = Rx.Observable.interval(100, Rx.Scheduler.async);
});
//# sourceMappingURL=interval.js.map