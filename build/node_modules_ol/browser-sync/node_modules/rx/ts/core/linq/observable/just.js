/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var a;
    var b;
    b = Rx.Observable.return(1);
    a = Rx.Observable.return('a', Rx.Scheduler.async);
    b = Rx.Observable.just(1);
    a = Rx.Observable.just('a', Rx.Scheduler.async);
});
//# sourceMappingURL=just.js.map