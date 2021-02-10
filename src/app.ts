import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as color from 'colors';

import {RestServer} from './API/ServerApi';


//Cargamos la configuracion
require('dotenv').config();

const SrvApi:RestServer=new RestServer();

SrvApi.start(process.env.PORT?parseInt(process.env.PORT):8080);
