import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { works } from './works';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            works: works,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value });
    }
    render() {
        const filterWorks = this.state.works.filter(work => {
            return work.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList works={filterWorks} />
                </Scroll>
            </div>
        );
    }
}
export default App;