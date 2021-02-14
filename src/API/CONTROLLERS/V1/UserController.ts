import {Request, Response} from 'express';
import {Controller, Middleware, Get, Put, Post, Delete} from '@overnightjs/core';
import { JwtManager, ISecureRequest } from '@overnightjs/jwt';
import {TimerHeaderMiddleware} from '../../MIDDLEWARE/TimerHeaderMiddleware';
@Controller('v1/users')
export class UserController {    
    @Get('')
    @Middleware([TimerHeaderMiddleware.InsertTimeRequest])
    private GetUsuario(req:Request,res:Response) {

        res.status(200).json({
            mensaje:"Hola mundo"
        });
    }
}