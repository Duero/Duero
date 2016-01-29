import {createApp} from 'mantra-core';
import {initContext} from './context';

// modules
import coreModule from './modules/core';
import prototypeModule from './modules/prototype';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(prototypeModule);
app.init();
