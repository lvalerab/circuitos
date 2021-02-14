import {
    Sequelize,
    Model,
    ModelDefined,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,
  } from "sequelize";

import {db} from '../db';

// These are all the attributes in the User model
interface IUsuarioAutentificacion {
    uuid: string;
    uuid_usuario:string;
    tipo:string;
    origen:string;
    token?:string;
    user?:string;
    password?:string;
}

interface IUsuarioCreated extends Optional<IUsuarioAutentificacion,"uuid"> {

}

export class UsuarioAutentificacion extends Model<IUsuarioAutentificacion,IUsuarioCreated> implements IUsuarioAutentificacion{
    public uuid: string;
    public uuid_usuario:string;
    public tipo:string;
    public origen:string;
    public token?:string;
    public user?:string;
    public password?:string;

   static Inicializar(cn:db) {
        UsuarioAutentificacion.init({
            uuid:{
                type:DataTypes.UUID,            
                allowNull:false,
                primaryKey:true,
                field:"UUID"
            },
            uuid_usuario:{
                type:DataTypes.UUID,            
                allowNull:false,
                field:"UUID_USUA"
            },
            tipo:{
                type:DataTypes.ENUM('BBDD','OAUTH'),
                allowNull:false,
                defaultValue:'BBDD',
                field:"TIPO_USAU"
            },
            origen:{
                type:DataTypes.ENUM('BBDD','OAUTH_GOOGLE','OAUTH_FACEBOOK'),
                allowNull:false,
                defaultValue:'BBDD',
                field:"ORIGEN_USAU"
            },
            token:{
                type:DataTypes.STRING(255),
                allowNull:true,
                field:"TOKEN_USAU"
            },
            user:{
                type:DataTypes.STRING(255),
                allowNull:true,
                field:"USER_USAU"
            },
            password:{
                type:DataTypes.STRING(255),
                allowNull:true,
                field:"PASS_USAU"
            }
        },{      
            sequelize:cn.connection,  
            tableName:"GEN_SECU_USAU_USERS_AUTH",
            charset:"utf-8",
            comment:"Tabla donde se almacenan las distintas credenciales de los usuarios"
        })
    }
}
