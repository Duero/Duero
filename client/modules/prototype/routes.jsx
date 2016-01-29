import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/prototype/components/layout.jsx';
import ScheduleEditor from '/client/modules/prototype/components/scheduleEditor.jsx';
import Schedule from '/client/modules/prototype/components/schedule.jsx';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/prototype/schedule', {
    name: 'prototype.schedule',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Schedule />)
      });
    }
  });

  FlowRouter.route('/prototype/schedule-editor', {
    name: 'prototype.scheduleEditor',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ScheduleEditor />)
      });
    }
  });

}
