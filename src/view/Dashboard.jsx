import React, { Component } from 'react'
import '../assets/css/Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__card">
                    <div className="dashboard__card__header">
                        Friends List
                    </div>
                    <input type="text" placeholder="Enter your friend name" />
                </div>
            </div>)
    }
}
