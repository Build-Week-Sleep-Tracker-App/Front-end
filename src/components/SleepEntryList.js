import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { Table } from 'react-bootstrap';

const SleepEntryList = ({ user, startEditSleepEntry, deleteSleepEntry }) => {
  const onEditEntry = entry => e => {
    startEditSleepEntry(entry);
  };
  const onDeleteEntry = id => e => {
    deleteSleepEntry(id);
  };
  return (
    <section className="sleepEntryList">
			<h1 className="text">Your sleep sessions</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Start</th>
            <th>End</th>
            <th>Before sleep</th>
            <th>After wake up</th>
            <th>During the day</th>
            <th>Edit entry</th>
            <th>Delete entry</th>
          </tr>
        </thead>
        <tbody>
          {user.sleepData.map(entry => (
            <tr key={entry.id}>
              <td>{moment(entry.start).format('HH:mm DD/MM/YYYY')}</td>
              <td>{moment(entry.end).format('HH:mm DD/MM/YYYY')}</td>
              <td>{entry.bed_t_tracking}</td>
              <td>{entry.work_t_tracking}</td>
              <td>{entry.average_rating}</td>
              <td>
                <button onClick={onEditEntry(entry)}><i className="icon-edit"></i></button>
              </td>
              <td>
                <button onClick={onDeleteEntry(entry.id)}><i className="icon-delete"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default connect(
  state => state,
  actionCreators
)(SleepEntryList);
