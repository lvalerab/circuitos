import * as colors from 'colors';

export class logService {
    constructor() {

    };

    dbLog(...params:any) {
        //Por ahora, solo imprimimos en la pantalla
        console.log(colors.bgGreen.grey(`${params}`));
    }

    info(msg:string) {
        console.log(colors.bgBlue.white(`${msg}`));
    }

    warm(msg:string) {
        console.log(colors.bgRed.black(`${msg}`));
    }

    error(msg:string) {
        console.log(colors.bgRed.white(`${msg}`));
    }
}