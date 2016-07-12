/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var o2;
    var o3;
    var o4;
    o = Rx.Observable.toAsync(function () { return 'abc'; });
    o2 = Rx.Observable.toAsync(function (a) { return 'abc'; });
    o3 = Rx.Observable.toAsync(function (a, b) { return 'abc'; });
    o4 = Rx.Observable.toAsync(function (a, b, c) { return 'abc'; });
    o = Rx.Observable.toAsync(function () { return 'abc'; }, {}, Rx.Scheduler.async);
});
//# sourceMappingURL=toasync.js.map