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
//Modelos relacionados
import {UsuarioAutentificacion} from './UsuariosAutentificacion';

// These are all the attributes in the User model
interface IUsuario {
    uuid: string;
    nombre: string;
    apellido1?: string | null;
    apellido2?: string | null;
}

interface IUsuarioCreated extends Optional<IUsuario,"uuid"> {

}

export class Usuario extends Model<IUsuario,IUsuarioCreated> implements IUsuario{
   public uuid:string;
   public nombre:string;
   public apellido1?:string;
   public apellido2?:string;

   //Relaciones
   public Autenticaciones:UsuarioAutentificacion[];

   public static associations:{
       Autentificaciones:Association<Usuario,UsuarioAutentificacion>;
   }

   public static DefineRelations() {
       Usuario.hasMany(UsuarioAutentificacion,{
           sourceKey:'uuid',
           foreignKey:'uuid_user',
           as:'Autenticaciones'
       })
   }

   //Funciones
   public getAutentificaciones!: HasManyGetAssociationsMixin<UsuarioAutentificacion>; 
   public addAutentificacion!:HasManyAddAssociationMixin<UsuarioAutentificacion,string>;
   public getAutentificacion!:HasManyHasAssociationMixin<UsuarioAutentificacion,string>;
   public numeroAutentificaciones!:HasManyCountAssociationsMixin;
   public nuevaAutentificacion!: HasManyCreateAssociationMixin<UsuarioAutentificacion>;

   static Inicializar(cn:db) {
        Usuario.init({
            uuid:{
                type:DataTypes.UUID,            
                allowNull:false,
                primaryKey:true,
                field:"UUID"
            },
            nombre:{
                type:DataTypes.STRING(255),
                allowNull:false,
                field:"NOMBRE_USER"
            },
            apellido1:{
                type:DataTypes.STRING(255),
                allowNull:true,
                field:"APELLIDO1_USER"
            },
            apellido2:{
                type:DataTypes.STRING(255),
                allowNull:true,
                field:"APELLIDO1_USER"
            }
        },{      
            sequelize:cn.connection,  
            tableName:"GEN_SECU_USER_USERS",
            charset:"utf-8",
            comment:"Tabla donde se almacenan los usuarios de la aplicación"
        })
    }
}
