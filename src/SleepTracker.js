import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import SleepEntryForm from './components/SleepEntryForm'

export default function SleepTracker() {
  return (
    <div className="sleepTracker">
      <Login />
      <Register />
      <SleepEntryForm />
    </div>
  )
}
