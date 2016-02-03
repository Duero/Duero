import {Enum} from 'enumify';

class Weekdays extends Enum {
  isBusinessDay() {
    switch (this) {
      case Weekdays.SATURDAY:
      case Weekdays.SUNDAY:
        return false;
      default:
        return true;
    }
  }
}


Weekdays.initEnum({
  'MONDAY': {
    value: 1,
    label: 'Pondelok'
  },
  'TUESDAY': {
    value: 2,
    label: 'Utorok'
  },
  'WEDNESDAY': {
    value: 3,
    label: 'Streda'
  },
  'THURSDAY': {
    value: 4,
    label: 'Štvrtok'
  },
  'FRIDAY': {
    value: 5,
    label: 'Piatok'
  },
  'SATURDAY': {
    value: 6,
    label: 'Sobota'
  },
  'SUNDAY': {
    value: 7,
    label: 'Nedeľa'
  }
});

export default Weekdays;
