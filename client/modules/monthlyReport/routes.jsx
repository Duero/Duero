import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/containers/layout';
import MonthlyReport from '/client/modules/monthlyReport/containers/monthlyReport.js';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/monthly-report/:cleanerId?/:month?/:buildingId?/:search?', {
    name: 'monthlyReport',
    action({cleanerId, month, buildingId, search}) {
      if (cleanerId == '-') cleanerId = null;
      if (month == '-') month = null;
      if (buildingId == '-') buildingId = null;
      if (search == '-') search = null;

      mount(MainLayoutCtx, {
        content: () => (<MonthlyReport cleanerId={cleanerId} month={month} buildingId={buildingId} search={search}/>)
      });
    }
  });

}
