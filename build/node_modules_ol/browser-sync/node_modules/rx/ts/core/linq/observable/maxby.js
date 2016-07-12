/// <reference path="../../observable.ts" />
(function () {
    var o;
    var a;
    o = o.maxBy(function (x) { return x.value; });
    a = a.maxBy(function (x) { return x.value; }, function (x, y) { return x.length - y.length; });
});
//# sourceMappingURL=maxby.js.map