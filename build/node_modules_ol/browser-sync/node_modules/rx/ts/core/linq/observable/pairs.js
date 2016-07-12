/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var n;
    var s;
    s = Rx.Observable.pairs({});
    s = Rx.Observable.pairs({}, Rx.Scheduler.default);
    n = Rx.Observable.pairs({});
    n = Rx.Observable.pairs({}, Rx.Scheduler.default);
});
//# sourceMappingURL=pairs.js.map