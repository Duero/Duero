import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout.jsx';
import BuildingCreate from '/client/modules/core/containers/buildingCreate';
import BuildingEdit from '/client/modules/core/containers/buildingEdit';
import Buildings from '/client/modules/core/containers/buildings';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/new-building', {
    name: 'buildingCreate',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<BuildingCreate />)
      });
    }
  });

  FlowRouter.route('/buildings/edit/:_id', {
    name: 'buildingEdit',
    action({_id}) {
      mount(MainLayoutCtx, {
        content: () => (<BuildingEdit buildingId={_id} />)
      });
    }
  });

  FlowRouter.route('/buildings', {
    name: 'buildings',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Buildings />)
      });
    }
  });

}
