import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-cont">
      <img src={imageUrl} className="img" alt={appName} />
      <h1 className="head">{appName}</h1>
    </li>
  )
}

export default AppItem
