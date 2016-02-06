import React from 'react';
import classNames from 'classnames';


const Day = ({cleaners, date, isToday, isOverdue, onButtonClick, onReassign, onCancel}) => {

  const dateName = isToday ? 'dnes' : date.format('D. MMM YY');

  const handleButtonClick = (job) => {
    if(isToday) onButtonClick(job)
  };

  return <div className="schedule">
    <h1 className="text-center">{date.format('dddd')} <span className="small">{dateName}</span></h1>

    {cleaners.map(cleaner => {
      return <div key={cleaner._id} className="cleaner-box">
        <dl className="dl-horizontal">
          <dt>{cleaner.name}<br /><small><span className="text-muted">spolu 3:45</span></small></dt>
          <dd>
            {cleaner.jobsForDate(date.toDate(), isToday ? undefined : false).map(job => {

              let buttonClass = classNames('btn', {
                'btn-danger': isOverdue && !job.done,
                'btn-warning': isToday && !job.done,
                'btn-success': isToday && job.done
              });
              let dropdownClass = buttonClass + ' dropdown-toggle';

              return <div key={job._id} className="btn-group btn-group-lg">
                <button type="button" className={buttonClass} onClick={() => handleButtonClick(job)}>{job.building().name}</button>
                <button type="button" className={dropdownClass} data-toggle="dropdown">
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  {cleaners.map(item => {
                    if(item._id == cleaner._id) {
                      return null;
                    }
                    return <li key={item._id}>
                      <a href="#" onClick={() => onReassign(job, item)}>{item.name}</a>
                    </li>;
                  })}
                  <li className="divider" />
                  <li><a href="#" onClick={() => onCancel(job)}>Zrušiť</a></li>
                </ul>
              </div>
            })}

          </dd>
        </dl>
      </div>
    })}
  </div>
};

export default Day;
