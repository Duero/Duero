import React from 'react';
import classNames from 'classnames';
import {Modal} from 'react-bootstrap';

import Formsy from 'formsy-react';
import {Input, Textarea, Select} from 'formsy-react-components';


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
      <button className="btn btn-default pull-right" title="Nová extra práca" onClick={this.handleOpen}>+ Novú prácu</button>

      <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nová extra práca</Modal.Title>
        </Modal.Header>
		<Formsy.Form onSubmit={this.handleSubmit}>
	        <Modal.Body>
			      <Input name="date" type="date" label="Dátum" value={defaultValues.date} />
			      <Input name="description" type="text" label="Popis" value={defaultValues.description} />
			      <span onClick={this.handleGroupClick}>
			      	<Input name="duration" type="number" label="Trvanie v min." value={defaultValues.duration} addonBefore="-15 min" addonAfter="+15 min"/>
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

  handleSubmit(values) {
  	this.props.onButtonClick(values);
    this.setState({ showModal: false });
  },

  handleGroupClick(e) {
  	const t = $(e.target);
  	if (t.is('.input-group-addon')) {
  		const input = $(e.currentTarget).find('input');
  		if (t.is(':first-child')) {
  			let v = input.val() - 15;
  			if (v < 0) v = 0;
  			input.val(v)
  		} else {
  			input.val(input.val() - 0 + 15)
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
