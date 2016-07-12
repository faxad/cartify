/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    var p;
    var e;
    var on;
    var pn;
    var en;
    var so = {};
    so['abc'] = p;
    so['def'] = e;
    so['xyz'] = o;
    var no = {};
    no[1] = pn;
    no[2] = en;
    no[3] = on;
    o = Rx.Observable.case(function () { return 'abc'; }, so);
    o = Rx.Observable.case(function () { return 'abc'; }, so, e);
    o = Rx.Observable.case(function () { return 'abc'; }, so, Rx.Scheduler.async);
    on = Rx.Observable.case(function () { return 1; }, no);
    on = Rx.Observable.case(function () { return 2; }, no, en);
    on = Rx.Observable.case(function () { return 3; }, no, Rx.Scheduler.async);
});
//# sourceMappingURL=case.js.map