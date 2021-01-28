import CsvFileReader from './CsvFileReader';
import { dateStringToDate } from './utils';
import MatchResult from './MatchResult';
import MatchData from './MatchData';


class CsvMatchReader extends CsvFileReader<MatchData> {
    
    constructor(public path: string){
        super();
        this.read();
    }

    mapRows(row: string[]): MatchData{
        return [
           dateStringToDate(row[0]),
           row[1],
           row[2],
           parseInt(row[3]),
           parseInt(row[4]),
           row[5] as MatchResult,
           row[6]
        ]
    }


}

export default CsvMatchReader;