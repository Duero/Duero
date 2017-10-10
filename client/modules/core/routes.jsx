import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/containers/layout';
import EmptyLayout from '/client/modules/core/components/emptyLayout';

import Home from '/client/modules/core/components/home';
import BuildingForm from '/client/modules/core/containers/buildingForm';
import Buildings from '/client/modules/core/containers/buildings';
import CleanerForm from '/client/modules/core/containers/cleanerForm';
import Cleaners from '/client/modules/core/containers/cleaners';
import Cikautxo from '/client/modules/core/containers/cikautxo';

export default function (injectDeps) {
  const EmptyLayoutCtx = injectDeps(EmptyLayout);
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(EmptyLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/cikautxo/:cleanerId?/:month?/:buildingId?/:search?', {
    name: 'cikautxo',
    action({cleanerId, month, buildingId, search}) {
      if (cleanerId === '-') cleanerId = null;
      if (month === '-') month = null;
      if (buildingId === '-') buildingId = null;
      if (search === '-') search = null;
      const reportProps = {
        cleanerId: cleanerId,
        month: month,
        buildingId: buildingId,
        search: search,
      };

      mount(EmptyLayoutCtx, {
        content: () => (<Cikautxo reportProps={reportProps} />)
      });
    }
  });

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
        content: () => (<BuildingForm buildingId={_id} submitText="Uložiť"/>)
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
        content: () => (<CleanerForm cleanerId={_id} submitText="Uložiť"/>)
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
