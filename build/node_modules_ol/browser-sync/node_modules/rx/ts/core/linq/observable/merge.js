/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var p;
    o = Rx.Observable.merge(o, p, o, p);
    o = Rx.Observable.merge([o, p, o, p]);
    o = Rx.Observable.merge(Rx.Scheduler.async, o, p, o, p);
    o = Rx.Observable.merge(Rx.Scheduler.async, [o, p, o, p]);
});
//# sourceMappingURL=merge.js.map