/// <reference path="../../observable.ts" />
(function () {
    var os;
    var on;
    on = os.concatMap(function (v, i) { return Rx.Observable.range(0, i); });
    os = os.concatMap(function (z) { return Rx.Observable.just('abc').toPromise(); });
    on = os.concatMap(function (z) { return [1, 2, 3]; });
    os = os.concatMap(function (v, i) { return Rx.Observable.range(0, i); }, function (v1, v2, i) { return v2.toString(); });
    on = os.concatMap(function (z) { return Rx.Observable.just('abc').toPromise(); }, function (v1, v2, i) { return i; });
    on = os.concatMap(function (z) { return [1, 2, 3]; }, function (v1, v2, i) { return i; });
    os.concatMap(on);
    os = os.concatMap(Rx.Observable.range(0, 5), function (v1, v2, i) { return v2.toString(); });
    on = os.concatMap(Rx.Observable.just('abc').toPromise(), function (v1, v2, i) { return i; });
    on = os.concatMap([1, 2, 3], function (v1, v2, i) { return i; });
    on = os.selectConcat(function (v, i) { return Rx.Observable.range(0, i); });
    on = os.selectConcat(function (v, i) { return Rx.Observable.range(0, i); });
    os = os.selectConcat(function (z) { return Rx.Observable.just('abc').toPromise(); });
    on = os.selectConcat(function (z) { return [1, 2, 3]; });
    os = os.selectConcat(function (v, i) { return Rx.Observable.range(0, i); }, function (v1, v2, i) { return v2.toString(); });
    on = os.selectConcat(function (z) { return Rx.Observable.just('abc').toPromise(); }, function (v1, v2, i) { return i; });
    on = os.selectConcat(function (z) { return [1, 2, 3]; }, function (v1, v2, i) { return i; });
    os.selectConcat(on);
    os = os.selectConcat(Rx.Observable.range(0, 5), function (v1, v2, i) { return v2.toString(); });
    on = os.selectConcat(Rx.Observable.just('abc').toPromise(), function (v1, v2, i) { return i; });
    on = os.selectConcat([1, 2, 3], function (v1, v2, i) { return i; });
});
//# sourceMappingURL=concatmap.js.map