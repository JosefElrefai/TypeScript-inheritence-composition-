import MatchData from './MatchData';

export interface Analyzer{
    run(matches: MatchData[]): string;
}

export interface OutputTarget{
    print(report: string): void;
}

export class Summary{
    constructor(
        private analyzer: Analyzer,
        private outPutTarget: OutputTarget,
        public matches: MatchData[]
        ){};

    buildAndReport(){
        const outPutStr = this.analyzer.run(this.matches);
        this.outPutTarget.print(outPutStr);
    }
}