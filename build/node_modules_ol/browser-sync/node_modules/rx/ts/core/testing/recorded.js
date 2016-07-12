var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var r = new Rx.Recorded(100, 'abc');
    var r = new Rx.Recorded(100, 'abc', function (x, y) { return false; });
    var b = r.equals(r);
    var s = r.toString();
    var t = r.time;
    var a = r.value;
});
//# sourceMappingURL=recorded.js.map