import {Request, Response} from 'express';
import {Controller, Middleware, Get, Put, Post, Delete} from '@overnightjs/core';
import {TimerHeaderMiddleware} from '../../MIDDLEWARE/TimerHeaderMiddleware';
import { logMiddleWare } from '../../MIDDLEWARE/log';
import {PermisosMiddleWare} from '../../MIDDLEWARE/permisos';

//Incorporo los servicios necesarios
import {tokenService} from '../../../SERVICES/secure/tokenService';

@Controller('v1/users')
export class UserController {    
    @Get('')
    @Middleware([TimerHeaderMiddleware.InsertTimeRequest,logMiddleWare.logRequestMiddleware,logMiddleWare.logResponseMiddleware])
    private GetUsuario(req:Request,res:Response) {
        res.status(200).json({
            mensaje:"Hola mundo"
        });
    }

    @Post('validar')
    @Middleware([TimerHeaderMiddleware.InsertTimeRequest,logMiddleWare.logRequestMiddleware,logMiddleWare.logResponseMiddleware])
    private ValidarUser(req:Request,res:Response) {
        //valido con las variables user, y contraseña
        if(req.body.user==="lvalera" && req.body.pass==="1234") {
            let ts:tokenService=new tokenService();
            res.status(200).json({
                token:ts.Generar("10000")
            });          
        } else {
            res.status(401);
        }
    }

    @Get('current')
    @Middleware([PermisosMiddleWare.GetUUIDUserToken,TimerHeaderMiddleware.InsertTimeRequest,logMiddleWare.logRequestMiddleware,logMiddleWare.logResponseMiddleware])
    private GetDatosUserValidado(req:Request,res:Response) {
        res.status(200).json({mundo:'hola'});
    }
}