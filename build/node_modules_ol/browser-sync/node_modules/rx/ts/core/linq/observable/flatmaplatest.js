/// <reference path="../../observable.ts" />
(function () {
    var o;
    var n;
    n = o.flatMapLatest(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.flatMapLatest(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.flatMapLatest(function (x) { return [1, 2, 3]; });
    n = o.flatMapLatest(function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.flatMapLatest(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.flatMapLatest(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]));
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapLatest([1, 2, 3]);
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.flatMapLatest([1, 2, 3], function (x, y) { return y; });
    n = o.selectSwitch(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.selectSwitch(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.selectSwitch(function (x) { return [1, 2, 3]; });
    n = o.selectSwitch(function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.selectSwitch(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.selectSwitch(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]));
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectSwitch([1, 2, 3]);
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.selectSwitch([1, 2, 3], function (x, y) { return y; });
});
//# sourceMappingURL=flatmaplatest.js.map