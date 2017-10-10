import React from 'react';
import SortableMixin from 'sortablejs/react-sortable-mixin';


const CleanerBox = React.createClass({

  mixins: [SortableMixin],

  sortableOptions: {
    disabled: $('html').hasClass('touch'),
    group: 'scheduleEditor',
    ref: "buildings",
    model: "buildings",
    sort: false
  },


  getInitialState() {
    return {
      buildings: this.props.buildings
    };
  },

  handleAdd(event) {
    const id = event.item.dataset.id;
    this.props.onAssign({
      cleanerId: this.props.cleaner._id,
      buildingId: id,
      day: this.props.day.value
    });
  },

  handleUnassign(event) {
    let id = $(event.target).attr('data-id');
    this.props.onUnassign({
      buildingId: id
    });
  },

  render() {
    let buildingsDom;

    const cleaner = this.props.cleaner;

    const buildings = this.state.buildings;
    let totalTime = 0;
    if (buildings.length) {
      buildingsDom = buildings.map(item => {
        if (!item) return '';
        totalTime += item.duration;
        return <button key={item._id} className="btn btn-default btn-lg m-r-sm m-b-sm" type="button" data-id={item._id} onDoubleClick={this.handleUnassign}>{item.name}</button>;
      });
    } else {
      buildingsDom =
        <span className="italic text-muted">Takto si nič nezarobí :)</span>;
    }

    return <div className="cleaner-box">
      <dl className="dl-horizontal">
        <dt>{cleaner.name}<br />
          <small className="text-muted">spolu {formatMinutes(totalTime)}</small>
        </dt>
        <dd ref="buildings">{buildingsDom}</dd>
      </dl>
    </div>
  }

});

export default CleanerBox;
