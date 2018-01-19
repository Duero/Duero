import {Buildings, Cleaners, Schedules, Jobs} from '/lib/collections/index';


Cleaners.permit(['update']).onlyProps(['active']).allowInClientCode();
Buildings.permit(['update']).onlyProps(['active', 'bigCleaning']).allowInClientCode();
