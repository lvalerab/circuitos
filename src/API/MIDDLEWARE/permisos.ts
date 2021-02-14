import { Request, Response, NextFunction} from "express";
import {tokenService} from "../../SERVICES/secure/tokenService";

export class PermisosMiddleWare {
    static GetUUIDUserToken(req:Request, res:Response, next:NextFunction) {
        console.log(`TOKEN ${req.get('X-TOKEN')}`);
        if(req.get('X-TOKEN')) {
            let ts:tokenService=new tokenService();
            let UUID=ts.Validar(req.get('X-TOKEN'));
            req.headers['X-USER-UUID']=UUID;
            next();
        } else {
            res.status(401).json({
                ok:false,
                mensaje:'No se ha proporcionado el token de usuario'
            });
        }
    }
}