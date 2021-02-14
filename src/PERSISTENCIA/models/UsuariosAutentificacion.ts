import {DataTypes,Model } from "sequelize/types";
import {db} from "../db";
import {Usuario} from './Usuarios';

const cn=new db();

export class UsuarioAutentificacion extends Model {
   
}

UsuarioAutentificacion.init({
    UUID:{
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
        field:"UUID"
    },
    USER_UUID:{
        type:DataTypes.UUID,
        allowNull:false,
        field:"USER_UUID"
    },
    TIPO:{
        type:DataTypes.ENUM('SIMPLE','OAUTH','API_KEY_FIX'),
        defaultValue:'SIMPLE',
        field:'TIPO_USAU'
    },
    ORIGEN:{
        type:DataTypes.ENUM('BBDD','GOOGLE','FACEBOOK'),
        defaultValue:'BBDD',
        field:'ORIGEN_USAU'
    },
    TOKEN:{
        type:DataTypes.STRING(255),
        allowNull:true,
        defaultValue:null,
        field:'TOKEN_USAU'
    },
    USER:{
        type:DataTypes.STRING(255),
        defaultValue:null,
        allowNull:true,
        field:'USER_USAU'
    },
    PASS:{
        type:DataTypes.STRING(255),
        defaultValue:null,
        allowNull:true,
        field:'PASS_USAU'
    }
},{
    sequelize:cn.connection,
    tableName:"GEN_SECU_USAU_USERS_AUTH",
    charset:"utf-8",
    comment:"Tabla donde se almacenan las credenciales y los tipos de autentificación que tiene un usuario"
});

UsuarioAutentificacion.hasOne(Usuario);
