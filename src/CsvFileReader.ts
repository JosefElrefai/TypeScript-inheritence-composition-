import fs, { readFileSync } from 'fs';

export abstract class CsvFileReader<T> {

    data: T[] = []; 

    abstract path: string;
    abstract mapRows(row: string[] ): T;    
    
    read(): void{
        this.data = fs.readFileSync(this.path, {
            encoding: "utf-8"
        })
        .split('\n') //we have array of string rows
        .map((row: string): string[] => row.split(','))
        .map( this.mapRows )
    }

}

export default CsvFileReader;

/*
new matchReader(path);




*/