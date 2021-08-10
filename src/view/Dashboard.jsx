import React, { Component } from 'react'
import FilterListOutlinedIcon
    from '@material-ui/icons/FilterListOutlined';

import '../assets/css/Dashboard.css'
import Friend from '../components/Friend'
import Pagination from '../components/Pagination'
import {
    getData,
    addFriend,
    addFavourite,
    deleteFriend
} from '../service/service'

export default class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            friends: [],
            pages: 0,
            currentPage: 0,
            pageSize: 4,
        }
    }

    componentDidMount() { this.updateStates(); }

    updateStates = () => {
        this.setState({
            friends: getData().reverse(),
            pages: Math.ceil(getData().length / this.state.pageSize),
        })
    }

    handleAddFriend = (e) => {
        let regex = RegExp(/^[a-zA-Z ]{3,35}$/);
        if (e.charCode === 13 && regex.test(e.target.value)) {
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

    handleDelete = (name) => {
        if (window.confirm(`Are you sure, you want to remove ${name}`)) {
            deleteFriend(name);
            this.updateStates();
            this.handlePageClick(0);
        }
    }

    handleSearch = (name) => {
        let newList = getData().filter(friend => {
            return friend.name.toLowerCase().includes(name.toLowerCase());
        })
        this.setState({
            friends: newList,
            pages: Math.ceil(newList.length / this.state.pageSize),
        })
        this.handlePageClick(0);
    }

    handleFilter = () => {
        let newList = getData().sort((a) => {
            return a.fav === true ? 1 : -1
        });
        this.setState({
            friends: newList.reverse(),
            pages: Math.ceil(newList.length / this.state.pageSize),
        });
        this.handlePageClick(0);
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
                        placeholder="Enter your friend's name"
                        onKeyPress={(e) => this.handleAddFriend(e)}
                        className="dashboard__input"
                    />
                   
                    <input
                        type="text"
                        placeholder="Search ..."
                        onChange={(e) => this.handleSearch(e.target.value)}
                        className="dashboard__search"
                    />

                    <button
                        onClick={this.handleFilter}
                        className="dashboard__filter"
                    >
                        <FilterListOutlinedIcon />
                    </button>

                    {this.state.friends
                        .slice(this.state.currentPage * this.state.pageSize,
                            (this.state.currentPage + 1) * this.state.pageSize)
                        .map((friend, index) => {
                            return <Friend
                                key={index}
                                name={friend.name}
                                fav={friend.fav}
                                handleFav={(name) => this.handleFavourite(name)}
                                handleDelete={(name) => this.handleDelete(name)}
                            />
                        })
                    }
                    {this.state.pages > 1 ?
                        <Pagination
                            pagesCount={this.state.pages}
                            currentPage={this.state.currentPage}
                            handlePage={(index) => this.handlePageClick(index)}
                        /> : null}
                </div>
            </div>)
    }
}
