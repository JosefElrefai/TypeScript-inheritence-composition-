"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Summary = /** @class */ (function () {
    function Summary(analyzer, outPutTarget, matches) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
        this.matches = matches;
    }
    ;
    Summary.prototype.buildAndReport = function () {
        var outPutStr = this.analyzer.run(this.matches);
        this.outPutTarget.print(outPutStr);
    };
    return Summary;
}());
exports.Summary = Summary;
