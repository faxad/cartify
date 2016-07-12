/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var n;
    n = o.flatMap(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.flatMap(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.flatMap(function (x) { return [1, 2, 3]; });
    n = o.flatMap(function (x, z, b) { return Rx.Observable.from([1, 2, 3]); }, function (x, y, a, b) { return y; });
    n = o.flatMap(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.flatMap(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.flatMap(Rx.Observable.from([1, 2, 3]));
    n = o.flatMap(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMap([1, 2, 3]);
    n = o.flatMap(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.flatMap(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.flatMap([1, 2, 3], function (x, y) { return y; });
    n = o.selectMany(function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.selectMany(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.selectMany(function (x) { return [1, 2, 3]; });
    n = o.selectMany(function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.selectMany(function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.selectMany(function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.selectMany(Rx.Observable.from([1, 2, 3]));
    n = o.selectMany(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectMany([1, 2, 3]);
    n = o.selectMany(Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.selectMany(Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.selectMany([1, 2, 3], function (x, y) { return y; });
});
//# sourceMappingURL=flatmap.js.map