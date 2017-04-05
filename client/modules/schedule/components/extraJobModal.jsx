import React from 'react';
import classNames from 'classnames';
import {Modal} from 'react-bootstrap';

import Formsy from 'formsy-react';
import {Input, Textarea, Select, Checkbox} from 'formsy-react-components';


const ExtraJobModal = React.createClass({

  getInitialState() {
    return { showModal: false };
  },
  render() {
    const icon = this.props.icon ? <i className={this.props.icon} /> : null;

    let defaultValues = this.props.defaultValues;
    defaultValues.description = defaultValues.description || '';
    defaultValues.building_id = defaultValues.building_id || null;
    defaultValues.cleaner_id = defaultValues.cleaner_id || null;
    defaultValues.date = defaultValues.date || moment().format('YYYY-MM-DD');
    defaultValues.duration = defaultValues.duration || 30;

    return <span>
      <button className="btn btn-success pull-right m-r" title="Nová extra práca" onClick={this.handleOpen}>+ Extra práca</button>

      <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nová extra práca</Modal.Title>
        </Modal.Header>
    		<Formsy.Form onSubmit={this.handleSubmit}>
          <Modal.Body>
            <Input name="date" type="date" label="Dátum" value={defaultValues.date} />
            <Checkbox name="bigCleaning" label="Velké upratovanie (okná)" />
            <Input name="description" type="text" label="Popis" value={defaultValues.description} />
            <span onClick={this.handleGroupClick}>
              <Input name="duration" type="number" label="Trvanie v min." value={defaultValues.duration} addonBefore="-15 min" addonAfter="+15 min" ref={this.saveDurationInput}/>
            </span>

            <Select name="building_id" label="Objekt" value={defaultValues.buildingId} options={this.props.buildings}/>
            <Select name="cleaner_id" label="Upratovačka" value={defaultValues.cleanerId} options={this.props.cleaners}/>

          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-default" onClick={this.handleClose}>Close</button>
            <button className="btn btn-primary" type="submit">Pridaj</button>
          </Modal.Footer>
    		</Formsy.Form>
      </Modal>
    </span>
  },

  saveDurationInput(input) {
    this.durationInput = input;
  },

  handleSubmit(values) {
    values.date = moment(values.date).toDate();
    Meteor.call('jobs.addExtraJob', values, (error) => {
      if(!error) {
        this.setState({ showModal: false });
      } else {
        alert('Nieco chybalo alebo nastal problem.')
      }
    })
  },

  handleGroupClick(e) {
  	const t = $(e.target);
  	if (t.is('.input-group-addon')) {
  		const input = $(e.currentTarget).find('input');
  		if (t.is(':first-child')) {
  			let v = input.val() - 15;
  			if (v < 0) v = 0;
  			this.durationInput.setValue(v)
  		} else {
  			this.durationInput.setValue(input.val() - 0 + 15)
  		}
  	}
  },

  handleClose() {
    this.setState({ showModal: false });
  },

  handleOpen() {
    this.setState({ showModal: true });
  }
});



export default ExtraJobModal;
