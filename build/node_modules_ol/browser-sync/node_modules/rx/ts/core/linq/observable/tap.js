/// <reference path="../../observable.ts" />
/// <reference path="../../observer-lite.ts" />
(function () {
    var o;
    var or;
    o.do(or);
    o.tap(or);
    o.do(function (v) { }, function (e) { }, function () { });
    o.tap(function (v) { }, function (e) { }, function () { });
    o.doOnNext(function (v) { });
    o.tapOnNext(function (v) { });
    o.doOnError(function (e) { });
    o.tapOnError(function (e) { });
    o.doOnCompleted(function () { });
    o.tapOnCompleted(function () { });
    o.doOnNext(function (v) { }, {});
    o.tapOnNext(function (v) { }, {});
    o.doOnError(function (e) { }, {});
    o.tapOnError(function (e) { }, {});
    o.doOnCompleted(function () { }, {});
    o.tapOnCompleted(function () { }, {});
});
//# sourceMappingURL=tap.js.map