import  CsvMatchReader  from './CsvMatchReader';
import { Summary } from './Summary';
import WinsAnalysis from './analyzers/WinsAnalysis';
import AvgGoalAnalysis from './analyzers/AvgGoalAnalysis';
import ConsoleReport from './outPutTargets/ConsoleReport';

const matchReader = new CsvMatchReader('football.csv');
// const summary = new Summary(new WinsAnalysis('Man City'), new ConsoleReport(), matchReader.data);
const summary = new Summary(new AvgGoalAnalysis('Man United'), new ConsoleReport(), matchReader.data);
summary.buildAndReport();