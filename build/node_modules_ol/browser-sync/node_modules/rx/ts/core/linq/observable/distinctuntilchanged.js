/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.distinctUntilChanged();
    o = o.distinctUntilChanged(function (x) { return x.length; });
    o = o.distinctUntilChanged(function (x) { return x.length; }, function (x, y) { return true; });
});
//# sourceMappingURL=distinctuntilchanged.js.map