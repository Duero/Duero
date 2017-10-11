import React from 'react';

import ExtraJobModal from '../../schedule/containers/extraJobModal.js';
import MonthlyReport from '../../monthlyReport/containers/monthlyReport';

const Cikautxo = ({ reportProps }) => (
  <div>
    <ExtraJobModal />
    <h1>CikautXo</h1>
    <hr/>
    <MonthlyReport {...reportProps} urlPrefix="cikautxo" />
  </div>
);

export default Cikautxo;
