import { OutputTarget } from '../Summary';

class ConsoleReport implements OutputTarget {
    print(str: string){
        console.log(str);
    }
}
export default ConsoleReport;