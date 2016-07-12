/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    Rx.Observable.fromArray([1, 2, 3]);
    Rx.Observable.fromArray([1, 2, 3], Rx.Scheduler.async);
});
//# sourceMappingURL=fromarray.js.map