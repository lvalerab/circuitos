import * as jwt from 'jsonwebtoken';

export class tokenService {
    private key:jwt.Secret;
    constructor() {
        this.key=process.env.LLAVE?process.env.LLAVE:'1234';
    }

    public Generar(id:string):string {
        return jwt.sign(id,this.key);
    }

    public Validar(token:string):any {
        jwt.verify(token,this.key,(err,dato)=>{
            if(err) {
                return null;
            } else {
                return dato;
            }
        });
    }
}