/// <reference path="../../observable.ts" />
(function () {
    var o;
    var n;
    n = o.flatMapFirst(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.flatMapFirst(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.flatMapFirst(function (x) { return [1, 2, 3]; });
    n = o.flatMapFirst(function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.flatMapFirst(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.flatMapFirst(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]));
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapFirst([1, 2, 3]);
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.flatMapFirst([1, 2, 3], function (x, y) { return y; });
    n = o.selectSwitchFirst(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.selectSwitchFirst(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.selectSwitchFirst(function (x) { return [1, 2, 3]; });
    n = o.selectSwitchFirst(function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.selectSwitchFirst(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.selectSwitchFirst(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]));
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectSwitchFirst([1, 2, 3]);
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.selectSwitchFirst([1, 2, 3], function (x, y) { return y; });
});
//# sourceMappingURL=flatmapfirst.js.map