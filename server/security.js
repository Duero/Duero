import {Buildings, Cleaners, Schedules, Jobs} from '/lib/collections/index';


Cleaners.permit(['update']).onlyProps(['active']).apply();
Buildings.permit(['update']).onlyProps(['active', 'bigCleaning']).apply();
