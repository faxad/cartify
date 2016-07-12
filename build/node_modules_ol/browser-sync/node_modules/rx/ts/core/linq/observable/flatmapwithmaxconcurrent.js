/// <reference path="../../observable.ts" />
(function () {
    var o;
    var n;
    n = o.flatMapWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.flatMapWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.flatMapWithMaxConcurrent(1, function (x) { return [1, 2, 3]; });
    n = o.flatMapWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.flatMapWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.flatMapWithMaxConcurrent(1, function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]));
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapWithMaxConcurrent(1, [1, 2, 3]);
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.flatMapWithMaxConcurrent(1, [1, 2, 3], function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]); });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return [1, 2, 3]; });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]); }, function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return Rx.Observable.from([1, 2, 3]).toPromise(); }, function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, function (x) { return [1, 2, 3]; }, function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]));
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectManyWithMaxConcurrent(1, [1, 2, 3]);
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]), function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise(), function (x, y) { return y; });
    n = o.selectManyWithMaxConcurrent(1, [1, 2, 3], function (x, y) { return y; });
});
//# sourceMappingURL=flatmapwithmaxconcurrent.js.map