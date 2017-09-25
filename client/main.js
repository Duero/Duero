import {createApp} from 'mantra-core';
import {initContext} from './context';

// modules
import coreModule from './modules/core';
import scheduleEditorModule from './modules/scheduleEditor';
import scheduleModule from './modules/schedule';
import monthlyReport from './modules/monthlyReport';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(scheduleEditorModule);
app.loadModule(scheduleModule);
app.loadModule(monthlyReport);
app.init();
