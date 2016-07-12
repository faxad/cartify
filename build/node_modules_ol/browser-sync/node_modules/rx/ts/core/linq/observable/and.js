/// <reference path="../../observable.ts" />
/// <reference path="../../joins/pattern.ts" />
(function () {
    var r;
    var a;
    var b;
    var c;
    var n = Rx.Observable.when(r.and(a).and(b).and(c).thenDo(function (r, a, b, c) {
        return 123;
    }));
});
//# sourceMappingURL=and.js.map