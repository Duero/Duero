import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout.jsx';

import BuildingCreate from '/client/modules/core/containers/buildingCreate';
import BuildingEdit from '/client/modules/core/containers/buildingEdit';
import Buildings from '/client/modules/core/containers/buildings';

import CleanerCreate from '/client/modules/core/containers/cleanerCreate';
import CleanerEdit from '/client/modules/core/containers/cleanerEdit';
import Cleaners from '/client/modules/core/containers/cleaners';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // ==================== BUILDINGS ========================
  
  FlowRouter.route('/buildings/new', {
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

  // ==================== CLEANERS ========================

  FlowRouter.route('/cleaners/new', {
    name: 'cleanerCreate',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CleanerCreate />)
      });
    }
  });

  FlowRouter.route('/cleaners/edit/:_id', {
    name: 'cleanerEdit',
    action({_id}) {
      mount(MainLayoutCtx, {
        content: () => (<CleanerEdit cleanerId={_id} />)
      });
    }
  });

  FlowRouter.route('/cleaners', {
    name: 'cleaners',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Cleaners />)
      });
    }
  });

}
