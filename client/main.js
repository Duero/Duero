import {createApp} from 'mantra-core';
import {initContext} from './context';

// modules
import coreModule from './modules/core';
import prototypeModule from './modules/prototype';
import scheduleEditorModule from './modules/scheduleEditor';
import scheduleModule from './modules/schedule';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(prototypeModule);
app.loadModule(scheduleEditorModule);
app.loadModule(scheduleModule);
app.init();
