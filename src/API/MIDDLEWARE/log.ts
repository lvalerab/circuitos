import { Request, Response } from "express";
import { NextFunction } from "express";
import {logService} from '../../SERVICES/log/logService';

export class logMiddleWare {
    static logRequestMiddleware(req:Request, res:Response, next:NextFunction) {
        let log:logService=new logService();
        log.info(`Petición realizada desde ${req.ip} al servicio ${req.method} con el url ${req.originalUrl}`);
        next();
    }

    static logResponseMiddleware(req:Request, res:Response, next:NextFunction) {
        let log:logService=new logService();
        next();
        log.info(`Respuesta enviada con ${res.statusCode} - ${res.statusMessage}`);
    }
}