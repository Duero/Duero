import React from 'react';

import SortableMixin from 'sortablejs/react-sortable-mixin';

const UnassignedBuildings = React.createClass({

  mixins: [SortableMixin],

  sortableOptions: {
    group: 'scheduleEditor',
    ref: "buildings",
    sort: false
  },

  getInitialState: function() {
    return {
      items: this.props.buildings
    };
  },

  handleSort: function (event) {
    // log('UnassignedBuildings', event);
  },

  render() {
    return <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">Nezaradené objekty</h3>
      </div>
      <div className="panel-body" ref="buildings">
        {this.state.items.map(item => {
          return <div key={item._id} className="btn btn-default btn-block btn-lg" data-id={item._id}>
            {item.name}
          </div>
        })}
      </div>
    </div>
  }

});

export default UnassignedBuildings;
