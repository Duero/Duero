import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/containers/layout';
import MonthlyReport from '/client/modules/monthlyReport/containers/monthlyReport.js';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/monthly-report/:cleanerId?/:month?/:buildingId?', {
    name: 'monthlyReport',
    action({cleanerId, month, buildingId}) {
      mount(MainLayoutCtx, {
        content: () => (<MonthlyReport cleanerId={cleanerId} month={month} buildingId={buildingId}/>)
      });
    }
  });

}
