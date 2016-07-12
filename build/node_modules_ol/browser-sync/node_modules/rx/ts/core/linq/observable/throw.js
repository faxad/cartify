/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = Rx.Observable.throw(new Error());
    o = Rx.Observable.throw(new Error(), Rx.Scheduler.async);
    o = Rx.Observable.throw('abc');
    o = Rx.Observable.throw('abc', Rx.Scheduler.async);
});
//# sourceMappingURL=throw.js.map