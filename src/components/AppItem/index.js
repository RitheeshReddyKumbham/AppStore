import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-cont">
      <img src={imageUrl} className="img" alt={appName} />
      <p className="head">{appName}</p>
    </li>
  )
}

export default AppItem
