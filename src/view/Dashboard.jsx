import React, { Component } from 'react'
import '../assets/css/Dashboard.css'
import Friend from '../components/Friend'
import Pagination from '../components/Pagination'
import { getData, addFriend, addFavourite } from '../service/service'

export default class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            friends: [],
            pages: 0,
            currentPage: 0,
            pageSize: 4
        }
    }

    componentDidMount() {
        this.updateStates();
    }

    updateStates = () => {
        this.setState({
            friends: getData(),
            pages: Math.ceil(getData().length / this.state.pageSize),
        })
    }

    handleAddFriend = (e) => {
        if (e.charCode === 13) {
            addFriend(e.target.value);
            e.target.value = '';
            this.updateStates();
        }
    }

    handleFavourite = (name) => {
        addFavourite(name);
        this.updateStates();
    }

    handlePageClick = (index) => {
        this.setState({ currentPage: index });
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__card">
                    <div className="dashboard__card__header">
                        Friends List
                    </div>
                    <input
                        type="text"
                        placeholder="Enter your friend name"
                        onKeyPress={(e) => this.handleAddFriend(e)}
                    />
                    {this.state.friends
                        .slice(this.state.currentPage * this.state.pageSize,
                            (this.state.currentPage + 1) * this.state.pageSize)
                        .map((friend, index) => {
                            return <Friend
                                key={index}
                                name={friend.name}
                                fav={friend.fav}
                                handleFav={(name) => this.handleFavourite(name)}
                            />
                        })
                    }
                    <Pagination
                        pagesCount={this.state.pages}
                        handlePage={(index) => this.handlePageClick(index)}
                    />
                </div>
            </div>)
    }
}
