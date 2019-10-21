import React, { useState } from 'react'

const SleepEntryForm = props => {
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <div>
      <h1>Sleep Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Time you went to bed:</label>
        <input type="time" placeholder="Time you went to bed" />
        <br />

        <label>Time you woke up:</label>
        <input type="time" placeholder="Time you woke up" />
        <br />

        <label>
          How tired were you at bedtime?
          <input type="radio" name="tired" value="1" />1
          <input type="radio" name="tired" value="2" />2
          <input type="radio" name="tired" value="3" />3
          <input type="radio" name="tired" value="4" />4
        </label>
        <br />

        <label>
          How tired were you when waking up
          <input type="radio" name="wake" value="1" />1
          <input type="radio" name="wake" value="2" />2
          <input type="radio" name="wake" value="3" />3
          <input type="radio" name="wake" value="4" />4
        </label>
        <br />

        <label>
          How tired were you during the day
          <input type="radio" name="day" value="1" />1
          <input type="radio" name="day" value="2" />2
          <input type="radio" name="day" value="3" />3
          <input type="radio" name="day" value="4" />4
        </label>
        <br />
        <button>Add sleep entry</button>
      </form>
    </div>
  )
}

export default SleepEntryForm
