import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout.jsx';
import ScheduleEditor from '/client/modules/scheduleEditor/containers/scheduleEditor.js';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/schedule-editor', {
    name: 'prototype.schedule',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ScheduleEditor />)
      });
    }
  });

}
