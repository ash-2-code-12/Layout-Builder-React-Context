import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="configuration-controller">
          <h1 className="controller-heading">Layout</h1>
          <div className="layout-control-list">
            <div className="control-box">
              <input
                id="showContent"
                onChange={onToggleShowContent}
                type="checkbox"
                checked={showContent}
              />
              <label htmlFor="showContent">Content</label>
            </div>
            <div className="control-box">
              <input
                id="showLeftNavbar"
                onChange={onToggleShowLeftNavbar}
                type="checkbox"
                checked={showLeftNavbar}
              />
              <label htmlFor="showLeftNavbar">Left Navbar</label>
            </div>
            <div className="control-box">
              <input
                id="showRightNavbar"
                onChange={onToggleShowRightNavbar}
                type="checkbox"
                checked={showRightNavbar}
              />
              <label htmlFor="showRightNavbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
