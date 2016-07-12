/// <reference path="../../observable.ts"/>
(function () {
    var os;
    var on;
    os.flatMapObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); });
    os.selectManyObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); });
    os.flatMapObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); }, {});
    os.selectManyObserver(function (v, i) { return Rx.Observable.just(i); }, function (e) { return Rx.Observable.just(e); }, function () { return Rx.Observable.empty(); }, {});
});
//# sourceMappingURL=selectmanyobserver.js.map