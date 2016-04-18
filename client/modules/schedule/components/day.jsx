import React from 'react';
import classNames from 'classnames';

const Day = ({cleaners, viewAll, date, isToday, isOverdue, onButtonClick, onReassign, onCancel, onSkip}) => {

  const dateName = isToday ? 'dnes' : date.format('D. MMM YY');

  return <div className="schedule">
    <h1 className="text-center">{date.format('dddd')} <span className="small">{dateName}</span></h1>

    {cleaners.map(cleaner => {

      const cleanerJobs = cleaner.jobsForDate(date.toDate(), isToday || viewAll ? undefined : false);
      if(!cleanerJobs.length) return null;

      let totalDuration = 0;
      cleanerJobs.map(job => {totalDuration = totalDuration + job.estimatedDuration()});

      return <div key={cleaner._id} className="cleaner-box">
        <dl className="dl-horizontal">
          <dt>{cleaner.name}<br /><small><span className="text-muted">{formatMinutes(totalDuration)}</span></small></dt>
          <dd>
            {cleanerJobs.map(job => {
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
                  <button type="button" className={buttonClass} onClick={() => onButtonClick(job)}>{job.title()} {job.description ? <small>(+{job.duration} min)</small> : ''}</button>
                  <button type="button" className={dropdownClass} data-toggle="dropdown">
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right">
{job.isExtra() ? '' : cleaners.map(item => {
                      if(item._id == cleaner._id) {
                        return null;
                      }
                      return <li key={item._id}>
                        <a href="#" onClick={(e) => {e.preventDefault(); onReassign(job, item);}}>{item.name}</a>
                      </li>;
                    })}

                    <li className="divider" />
                    {(job.description) ? <li><a href="#"><i>{job.description}</i></a></li> : ''}
                    {(job.done == true) ? <li><a href="#" onClick={(e) => {e.preventDefault(); onCancel(job)}}>Neurobené</a></li> : ''}
                    <li><a href="#" onClick={(e) => {e.preventDefault(); onSkip(job)}}>Tentokrát zrušiť</a></li>
                  </ul>
                </div>
              }
            })}
          </dd>
        </dl>
      </div>
    })}
  </div>
};

export default Day;
