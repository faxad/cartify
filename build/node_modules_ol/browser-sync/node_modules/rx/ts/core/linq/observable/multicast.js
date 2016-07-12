/// <reference path="../../subjects/subject.ts" />
/// <reference path="../connectableobservable.ts" />
(function () {
    var o;
    var oc;
    var is;
    var s;
    var a;
    oc = o.multicast(is);
    oc = o.multicast(s);
    oc = o.multicast(function () { return s; });
    o = o.multicast(is, function (a) { return a.asObservable(); });
    o = o.multicast(s, function (a) { return a.asObservable(); });
    o = o.multicast(function () { return s; }, function (a) { return a.asObservable(); });
});
//# sourceMappingURL=multicast.js.map