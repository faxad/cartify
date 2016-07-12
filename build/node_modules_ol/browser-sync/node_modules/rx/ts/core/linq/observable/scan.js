/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o = o.scan(function (a, x) { return a * x; });
    o = o.scan(function (a, x) { return a * x; }, 1);
});
//# sourceMappingURL=scan.js.map