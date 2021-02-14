import {RestServer} from './API/ServerApi';
import {db} from './PERSISTENCIA/db';

//Cargamos la configuracion
require('dotenv').config();
try {
    const cn=new db();
    cn.connect();
    cn.UpdateModel();
    cn.disconnect();
} catch (error) {

};
const SrvApi:RestServer=new RestServer();

SrvApi.start(process.env.PORT?parseInt(process.env.PORT):8080);
