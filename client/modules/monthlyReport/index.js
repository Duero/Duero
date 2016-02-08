import routes from './routes.jsx';
import actions from './actions';


export default {
  routes,
  actions: {
    monthlyReport: actions
  },
  load(context) {
    // empty
  }
};
