import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTabId(tabId)
  }

  const activeTab = isActive ? 'tabActive' : ''

  return (
    <li className="tab-item">
      <button type="button" className={`tab ${activeTab}`} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
