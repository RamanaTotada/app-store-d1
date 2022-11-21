import './index.css'

const TabItem = props => {
  const {tabName, onChageApp, isActive} = props
  const {tabId, displayText} = tabName

  const filterApps = () => {
    onChageApp(tabId)
  }

  const isvisiable = isActive ? 'color' : ''
  return (
    <li>
      <button
        className={`button-style ${isvisiable}`}
        type="button"
        onClick={filterApps}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
