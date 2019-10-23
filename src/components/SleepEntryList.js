import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import './styles/sleep.css';
import { Table } from 'react-bootstrap';

const SleepEntryList = ({ user, startEditSleepEntry, deleteSleepEntry }) => {
  const onEditEntry = entry => e => {
    startEditSleepEntry(entry);
  };
  const onDeleteEntry = id => e => {
    deleteSleepEntry(id);
  };
  return (
    <div className="sleepEntryList">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Start</th>
            <th>End</th>
            <th>Before sleep</th>
            <th>After wake up</th>
            <th>During the day</th>
          </tr>
        </thead>
      </Table>
      {user.sleepData.map(entry => (
        <div key={entry.id} className="sleepEntry">
          <div>
            <b>Start:</b> {moment(entry.start).format('HH:mm DD/MM/YYYY')}
          </div>
          <div>
            <b>End:</b> {moment(entry.end).format('HH:mm DD/MM/YYYY')}
          </div>
          <div>
            <b>Mood levels:</b>
          </div>
          <div>
            <b>Before sleep</b> {entry.bed_t_tracking}
          </div>
          <div>
            <b>After waking up</b> {entry.work_t_tracking}
          </div>
          <div>
            <b>During the day</b> {entry.average_rating}
          </div>
          <button onClick={onEditEntry(entry)}>Edit entry</button>
          <button onClick={onDeleteEntry(entry.id)}>Delete entry</button>
        </div>
      ))}
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(SleepEntryList);
