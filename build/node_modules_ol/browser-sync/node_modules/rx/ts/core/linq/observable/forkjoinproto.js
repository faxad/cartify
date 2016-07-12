/// <reference path="../../observable.ts" />
(function () {
    var a;
    var b;
    a = a.forkJoin(b, function (a, b) { return a; });
    b = a.forkJoin(b, function (a, b) { return b; });
});
//# sourceMappingURL=forkjoinproto.js.map