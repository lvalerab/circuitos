import {Request, Response} from 'express';
import {Controller, Middleware, Get, Put, Post, Delete} from '@overnightjs/core';
import { JwtManager, ISecureRequest } from '@overnightjs/jwt';
import {TimerHeaderMiddleware} from '../../MIDDLEWARE/TimerHeaderMiddleware';
import { logMiddleWare } from '../../MIDDLEWARE/log';
@Controller('v1/users')
export class UserController {    
    @Get('')
    @Middleware([TimerHeaderMiddleware.InsertTimeRequest,logMiddleWare.logRequestMiddleware,logMiddleWare.logResponseMiddleware])
    private GetUsuario(req:Request,res:Response) {
        res.status(200).json({
            mensaje:"Hola mundo"
        });
    }
}