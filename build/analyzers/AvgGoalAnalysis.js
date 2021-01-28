"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AvgGoalAnalysis = /** @class */ (function () {
    function AvgGoalAnalysis(team) {
        this.team = team;
    }
    ;
    AvgGoalAnalysis.prototype.run = function (matches) {
        var totalGoals = 0;
        var totalGames = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.team) {
                totalGames++;
                totalGoals += match[3];
            }
            else if (match[2] === this.team) {
                totalGames++;
                totalGoals += match[4];
            }
        }
        var avgGoals = totalGoals / totalGames;
        return this.team + " scored " + avgGoals + " on average";
    };
    return AvgGoalAnalysis;
}());
exports.default = AvgGoalAnalysis;
