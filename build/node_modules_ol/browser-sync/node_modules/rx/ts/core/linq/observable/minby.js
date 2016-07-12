/// <reference path="../../observable.ts" />
(function () {
    var o;
    var a;
    o = o.minBy(function (x) { return x.value; });
    a = a.minBy(function (x) { return x.value; }, function (x, y) { return x.length - y.length; });
});
//# sourceMappingURL=minby.js.map