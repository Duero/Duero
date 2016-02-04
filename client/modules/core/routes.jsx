import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout.jsx';

import BuildingForm from '/client/modules/core/containers/buildingForm';
import Buildings from '/client/modules/core/containers/buildings';

import CleanerForm from '/client/modules/core/containers/cleanerForm';
import Cleaners from '/client/modules/core/containers/cleaners';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // ==================== BUILDINGS ========================

  FlowRouter.route('/buildings/new', {
    name: 'buildingCreate',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<BuildingForm />)
      });
    }
  });

  FlowRouter.route('/buildings/edit/:_id', {
    name: 'buildingEdit',
    action({_id}) {
      mount(MainLayoutCtx, {
        content: () => (<BuildingForm buildingId={_id} />)
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
        content: () => (<CleanerForm />)
      });
    }
  });

  FlowRouter.route('/cleaners/edit/:_id', {
    name: 'cleanerEdit',
    action({_id}) {
      mount(MainLayoutCtx, {
        content: () => (<CleanerForm cleanerId={_id} />)
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
