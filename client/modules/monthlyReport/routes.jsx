import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout.jsx';
import MonthlyReport from '/client/modules/monthlyReport/containers/monthlyReport.js';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/monthly-report/:cleanerId?/:month?', {
    name: 'monthlyReport',
    action({cleanerId, month}) {
      mount(MainLayoutCtx, {
        content: () => (<MonthlyReport cleanerId={cleanerId} month={month}/>)
      });
    }
  });

}
