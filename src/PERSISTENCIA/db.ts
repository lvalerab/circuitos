import {Sequelize} from 'sequelize';
import {logService } from '../SERVICES/log/logService'

//Imports de los modelos
import {Usuario} from './models/Usuarios';
import {UsuarioAutentificacion} from './models/UsuariosAutentificacion';


export class db {
    public IsConnected:boolean;
    constructor(
        public connection?:Sequelize,
        public log?:logService
    ) {
        this.IsConnected=false;
        this.log=new logService();
        this.connection=new Sequelize(process.env.DB_DATABASE?process.env.DB_DATABASE:'circuitos', process.env.DB_USER?process.env.DB_USER:'root', process.env.DB_PASS?process.env.DB_PASS:'',{            
            host:process.env.DB_HOST,
            dialect:process.env.DB_DIALECT==='mysql'?'mysql':'sqlite',
            logging:(...msg)=>log.dbLog(msg)
        });

        //Añadimos los modelos
        Usuario.Inicializar(this);
        UsuarioAutentificacion.Inicializar(this);
    }

    connect() {
        try {
            this.connection.authenticate();
            this.IsConnected=true;
        } catch (err) {
            this.IsConnected=false;
        }
    }

    UpdateModel(forzar:boolean=false) {
        if(forzar) {
            this.connection.sync({
                force:true
            });
        } else {
            this.connection.sync({ alter: true });
        }
    }

    disconnect() {
        this.connection.close();
    }
}


const dbcircuitos:db=new db();

module.exports=dbcircuitos;
