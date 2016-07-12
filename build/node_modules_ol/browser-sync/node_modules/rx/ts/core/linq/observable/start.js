/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o = Rx.Observable.start(function () { return 'abc'; });
    var o = Rx.Observable.start(function () { return 'abc'; }, Rx.Scheduler.default);
    var o = Rx.Observable.start(function () { return 'abc'; }, Rx.Scheduler.default, {});
});
//# sourceMappingURL=start.js.map