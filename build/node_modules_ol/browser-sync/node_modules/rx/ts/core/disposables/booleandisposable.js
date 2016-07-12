/// <reference path="./disposable.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var sad = new Rx.SingleAssignmentDisposable();
    sad.dispose();
    sad.isDisposed;
    var d = sad.getDisposable();
    sad.setDisposable(d);
    var sad = new Rx.SerialDisposable();
    sad.dispose();
    sad.isDisposed;
    var d = sad.getDisposable();
    sad.setDisposable(d);
});
//# sourceMappingURL=booleandisposable.js.map