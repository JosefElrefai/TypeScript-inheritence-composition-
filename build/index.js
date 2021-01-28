"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvMatchReader_1 = __importDefault(require("./CsvMatchReader"));
var Summary_1 = require("./Summary");
var AvgGoalAnalysis_1 = __importDefault(require("./analyzers/AvgGoalAnalysis"));
var ConsoleReport_1 = __importDefault(require("./outPutTargets/ConsoleReport"));
var matchReader = new CsvMatchReader_1.default('football.csv');
// const summary = new Summary(new WinsAnalysis('Man City'), new ConsoleReport(), matchReader.data);
var summary = new Summary_1.Summary(new AvgGoalAnalysis_1.default('Man United'), new ConsoleReport_1.default(), matchReader.data);
summary.buildAndReport();
