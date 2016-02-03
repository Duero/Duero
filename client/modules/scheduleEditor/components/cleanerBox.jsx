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


  render() {
    let buildingsDom;

    const cleaner = this.props.cleaner;
    const buildings = this.state.buildings;
    if (buildings.length) {
      buildingsDom = buildings.map((item, index) => {
        return <div key={index} className="btn-group">
          <button type="button" className="btn btn-default btn-lg">{item.name}</button>
          <button type="button" className="btn btn-default btn-lg"><i
            className="fa fa-times"/></button>
        </div>;
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
