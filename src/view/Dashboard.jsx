import React, { Component } from 'react'
import '../assets/css/Dashboard.css'
import Friend from '../components/Friend'
import Service from "../service/FriendService"

export default class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        this.setState({ friends: Service })
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__card">
                    <div className="dashboard__card__header">
                        Friends List
                    </div>
                    <input type="text" placeholder="Enter your friend name" />
                    {this.state.friends.map(friend => {
                        return <Friend name={friend.name} fav={friend.favourite} />
                    })
                    }
                </div>
            </div>)
    }
}
