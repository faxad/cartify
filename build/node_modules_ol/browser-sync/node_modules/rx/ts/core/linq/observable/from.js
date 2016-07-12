/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var a;
    var b;
    Rx.Observable.from([1, 2, 3]);
    Rx.Observable.from([1, 2, 3], function (x) { return x + 1; });
    Rx.Observable.from([1, 2, 3], function (x) { return x + 1; }, {});
    Rx.Observable.from([1, 2, 3], function (x) { return x + 1; }, {}, Rx.Scheduler.async);
});
//# sourceMappingURL=from.js.map