/// <reference path="../../observable.ts" />
(function () {
    var p;
    var o;
    var io;
    var any = Rx.Observable.amb(p, o, io, p, o, io);
    var any = Rx.Observable.amb(p, p);
    var any = Rx.Observable.amb(o, o);
    var any = Rx.Observable.amb(io, io);
});
//# sourceMappingURL=amb.js.map