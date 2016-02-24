import React from 'react';
import classNames from 'classnames';


const Day = ({cleaners, date, isToday, isOverdue, onButtonClick, onReassign, onCancel, onSkip, onAddOvertime, onCancelOvertime}) => {

  const dateName = isToday ? 'dnes' : date.format('D. MMM YY');

  return <div className="schedule">
    <h1 className="text-center">{date.format('dddd')} <span className="small">{dateName}</span></h1>

    {cleaners.map(cleaner => {

      let overtimeButtonsDom;
      if(isToday) {
        overtimeButtonsDom = <span>
          <div className="btn btn-info" onClick={() => onAddOvertime(cleaner, date.toDate(), 15)}>+15 min</div>
          <div className="btn btn-info" onClick={() => onAddOvertime(cleaner, date.toDate(), 30)}>+30 min</div>
        </span>
      }

      return <div key={cleaner._id} className="cleaner-box">
        <dl className="dl-horizontal">
          <dt>{cleaner.name}<br /><small><span className="text-muted">spolu 3:45</span></small></dt>
          <dd>
            {cleaner.jobsForDate(date.toDate(), isToday ? undefined : false).map(job => {
              if(job.isOvertime()) {
                return <div key={job._id} className="btn-group btn-group-lg">
                  <button className="btn btn-success" type="button">{job.title()}</button>
                  <button className="btn btn-success" type="button" onClick={() => onCancelOvertime(cleaner, date.toDate())}><i className="fa fa-times" /></button>
                </div>
              } else {
                let buttonClass = classNames('btn', {
                  'btn-danger': isOverdue && !job.done,
                  'btn-warning': isToday && !job.done,
                  'btn-success': isToday && job.done
                });
                let dropdownClass = buttonClass + ' dropdown-toggle';

                return <div key={job._id} className="btn-group btn-group-lg">
                  <button type="button" className={buttonClass} onClick={() => onButtonClick(job)}>{job.title()}</button>
                  <button type="button" className={dropdownClass} data-toggle="dropdown">
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right">
                    {cleaners.map(item => {
                      if(item._id == cleaner._id) {
                        return null;
                      }
                      return <li key={item._id}>
                        <a href="#" onClick={(e) => {e.preventDefault(); onReassign(job, item);}}>{item.name}</a>
                      </li>;
                    })}

                    <li className="divider" />
                    {(job.done == true) ? <li><a href="#" onClick={(e) => {e.preventDefault(); onCancel(job)}}>Neurobené</a></li> : ''}
                    <li><a href="#" onClick={(e) => {e.preventDefault(); onSkip(job)}}>Tentokrát zrušiť</a></li>
                  </ul>
                </div>
              }
            })}
            {overtimeButtonsDom}
          </dd>
        </dl>
      </div>
    })}
  </div>
};

export default Day;
