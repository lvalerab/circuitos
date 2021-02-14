import { Sequelize,DataTypes,Model } from "sequelize/types";
import {db} from "../db";

const cn=new db();

export class Usuario extends Model {
   
}

Usuario.init({
        UUID:{
            type:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true,
            field:"UUID"
        },
        Nombre:{
            type:DataTypes.STRING(255),
            allowNull:false,
            field:"NOMBRE_USER"
        },
        Apellido1:{
            type:DataTypes.STRING(255),
            allowNull:true,
            field:"APELLIDO1_USER"
        },
        Apellido2:{
            type:DataTypes.STRING(255),
            allowNull:true,
            field:"APELLIDO1_USER"
        }
    },{      
        sequelize:cn.connection,  
        tableName:"GEN_SECU_USER_USERS",
        charset:"utf-8",
        comment:"Tabla donde se almacenan los usuarios de la aplicación"
    });