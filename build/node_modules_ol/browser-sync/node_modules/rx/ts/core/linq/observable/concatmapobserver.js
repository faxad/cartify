/// <reference path="../../observable.ts" />
(function () {
    var os;
    var on;
    os.concatMapObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); });
    os.selectConcatObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); });
    os.concatMapObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); }, {});
    os.selectConcatObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); }, {});
});
//# sourceMappingURL=concatmapobserver.js.map