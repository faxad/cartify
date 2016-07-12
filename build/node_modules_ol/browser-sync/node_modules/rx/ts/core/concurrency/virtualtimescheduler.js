/// <reference path="../disposables/disposable.ts" />
/// <reference path="./scheduler.ts" />
/// <reference path="./scheduleditem.ts" />
(function () {
    var vts;
    var b = vts.isEnabled;
    var a = vts.add(100, 500);
    var n = vts.toAbsoluteTime(1000);
    var r = vts.toRelativeTime(1000);
    var d = vts.start();
    vts.stop();
    vts.advanceTo(null);
    vts.advanceBy(null);
    vts.sleep(null);
    var i = vts.getNext();
    b = vts.isEnabled;
});
//# sourceMappingURL=virtualtimescheduler.js.map