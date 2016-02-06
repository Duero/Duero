import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout.jsx';
import Schedule from './containers/schedule.js';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/schedule', {
    name: 'schedule',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Schedule />)
      });
    }
  });

}
