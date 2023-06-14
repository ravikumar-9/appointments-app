// Write your code here
import {Component} from 'react'

import './index.css'

class Appointments extends Component {
  state: {
    appointmentName: '',
    appointmentDate: '',
    appointmentsList: [],

    isStarred: false,
  }

  render() {
    const {appointmentName, appointmentDate} = this.state

    return (
      <div className="bg-container">
        <div className="comments-app-container">
          <div className="description-container">
            <form className="comment-details" onSubmit={this.onAdd}>
              <h1 className="main-heading">Add Appointment</h1>
              <label className="title-label" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                className="input-title"
                id="title"
                placeholder="Title"
                value={appointmentName}
              />
              <label className="date-label" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                className="date-title"
                id="date"
                placeholder="dd/mm/yy"
                value={appointmentDate}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="appoint-img"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="appointments-starred">
            <p className="appointments-heading">Appointments</p>
            <button type="button" className="starred-button">
              Starred
            </button>
          </div>
          <ul className="appointments-container">{}</ul>
        </div>
      </div>
    )
  }
}

export default Appointments
