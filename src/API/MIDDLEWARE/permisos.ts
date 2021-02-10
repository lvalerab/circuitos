import { ISecureRequest } from "@overnightjs/jwt";
import { Response, NextFunction} from "express";
/*import { GrupoPermiso } from "../models/GrupoPermiso";
import { Usuario } from "../models/usuarios";
import {Accion} from "../models/Accion";*/

export class PermisosMiddleWare {
    static GetGroupsUserValidate(req:ISecureRequest, res:Response, next:NextFunction) {
        if(req.payload.id) {            
           
        } else {
            req.body.usuario={};
            next();
        }
    }
}