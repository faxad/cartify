/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    Rx.Observable.if(function () { return false; }, o);
    Rx.Observable.if(function () { return false; }, o, o);
    Rx.Observable.if(function () { return false; }, o, Rx.Scheduler.async);
});
//# sourceMappingURL=if.js.map