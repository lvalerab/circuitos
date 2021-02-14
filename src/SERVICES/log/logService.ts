import * as colors from 'colors';
import {NtpClientHelper} from '../time/ntpServer';

export class logService {
    private TimeServer:NtpClientHelper;
    constructor() {
        this.TimeServer=new NtpClientHelper();
    };

    dbLog(...params:any) {
        //Por ahora, solo imprimimos en la pantalla
        console.log(colors.bgGreen.grey(`(dblog)-> ${params}`));
    }

    info(msg:string,params:any=null) {       
        //Por ahora, solo imprimimos en la pantalla
        console.log(colors.bgBlue.white(`(info)-> ${msg}`));               
    }

    warm(msg:string,params:any=null) {
        console.log(colors.bgRed.black(`(warm)-> ${msg}`));
    }

    error(msg:string,params:any=null) {
        console.log(colors.bgRed.white(`(error)->${msg}`));
    }
}