import MatchData from '../MatchData';
import { Analyzer } from '../Summary';

class AvgGoalAnalysis implements Analyzer{

    constructor(public team: string) {};

    run(matches: MatchData[]){
        let totalGoals = 0;
        let totalGames = 0;
        for (const match of matches) {
            if(match[1] === this.team){
                totalGames++;
                totalGoals += match[3];
            } else if(match[2] === this.team){
                totalGames++;
                totalGoals += match[4];
            }
        }
        const avgGoals = totalGoals/totalGames;
        return `${this.team} scored ${avgGoals} on average`;
    }
}
export default AvgGoalAnalysis;