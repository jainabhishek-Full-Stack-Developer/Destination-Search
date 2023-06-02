import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <h1 className="heading">Destination Search</h1>
        <div className="searchCard">
          <input
            type="search"
            placeholder="Search"
            className="searchInput"
            defaultValue={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="searchImage"
            alt="Search Icon"
          />
        </div>
        <ul className="cards">
          {searchResult.map(eachItem => (
            <DestinationItem
              destinationsListItem={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
