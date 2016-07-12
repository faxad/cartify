var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var s = new Rx.Subscription(100);
    var s = new Rx.Subscription(100, 200);
    var b = s.equals(s);
    var st = s.toString();
});
//# sourceMappingURL=subscription.js.map