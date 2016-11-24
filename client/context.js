import Collections from '../lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {DocHead} from 'meteor/kadira:dochead';


DocHead.addMeta({name: "viewport", content: "width=device-width, initial-scale=1"});


export function initContext() {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
