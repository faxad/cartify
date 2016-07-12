var sayHi = function (_a) {
    var name = _a.name;
    document.querySelector('#example').textContent = "\n        Hi, " + name + "\n    ";
};
sayHi({ name: "Frank" });
// Uncomment the following line to see the type-checking in action
// sayHi({name: 0});
//# sourceMappingURL=main.js.map