/// <reference path="../../observable.ts" />
(function () {
    var os;
    var on;
    on.count();
    os.count(function (v, i, s) { return false; });
    os.count(function (v, i, s) { return true; }, {});
});
//# sourceMappingURL=count.js.map