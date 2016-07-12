/// <reference path="../../observable.ts" />
(function () {
    var o;
    var io;
    var p;
    var t = [o, p, o, p, io];
    o = Rx.Observable.catch(o, p, o, p, io);
    o = (_a = Rx.Observable).catch.apply(_a, t);
    o = Rx.Observable.catch(t);
    var _a;
});
//# sourceMappingURL=catch.js.map