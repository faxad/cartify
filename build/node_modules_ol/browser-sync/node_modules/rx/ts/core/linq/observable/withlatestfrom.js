/// <reference path="../../observable.ts"/>
(function () {
    var o;
    var io;
    var so;
    var p;
    var r = o.withLatestFrom(io, p, so, function (vo, vio, vp, vso) { return ({ vo: vo, vio: vio, vp: vp, vso: vso }); });
    var rr = o.withLatestFrom([io, so, p], function (v1, items) { return 5; });
});
//# sourceMappingURL=withlatestfrom.js.map