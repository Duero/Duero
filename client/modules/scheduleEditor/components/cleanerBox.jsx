import React from 'react';
import SortableMixin from 'sortablejs/react-sortable-mixin';


const CleanerBox = React.createClass({

  mixins: [SortableMixin],

  sortableOptions: {
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

  handleRemove(event) {
    const id = event.item.dataset.id;
    log(this.props, event)
    this.props.onUnassign({
      cleanerId: this.props.cleaner._id
    });
  },


  render() {
    let buildingsDom;

    const cleaner = this.props.cleaner;
    const buildings = this.state.buildings;
    if (buildings.length) {
      buildingsDom = buildings.map((item, index) => {
        return <button key={index} type="button" className="btn btn-default btn-lg">{item.name}</button>;
      });
    } else {
      buildingsDom =
        <span className="italic text-muted">takto si nic nezarobi</span>;
    }

    return <div className="cleaner-box">
      <dl className="dl-horizontal">
        <dt>{cleaner.name}<br />
          <small className="text-muted">spolu 3:45</small>
        </dt>
        <dd ref="buildings">{buildingsDom}</dd>
      </dl>
    </div>
  }

});

export default CleanerBox;
