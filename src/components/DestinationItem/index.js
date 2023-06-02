import './index.css'

const DestinationItem = props => {
  const {destinationsListItem} = props
  const {name, imgUrl} = destinationsListItem
  return (
    <li className="cardList">
      <img src={imgUrl} alt={name} className="cardImg" />
      <p className="cardPara">{name}</p>
    </li>
  )
}
export default DestinationItem
