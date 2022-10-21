// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails, isActive, setActiveTabId} = props
  const {displayText, tabId} = eachTabDetails

  const onClickTabItems = () => {
    setActiveTabId(tabId)
  }
  const tabItemsClassName = isActive ? 'btn-button active' : 'btn-button'

  return (
    <li className="tab-list-container">
      <button
        className={tabItemsClassName}
        type="button"
        onClick={onClickTabItems}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
