import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/prototype/components/layout.jsx';
import TimeTableEditor from '/client/modules/prototype/components/timeTableEditor.jsx';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/prototype/time-table-editor', {
    name: 'prototype.timeTableEditor',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<TimeTableEditor />)
      });
    }
  });

}
