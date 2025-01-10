import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  const renderLeftNavBar = () => (
    <section className="left-navbar">
      <h2 className="section-heading">Left Navbar Menu</h2>
      <ul className="left-nav-list">
        {[1, 2, 3, 4].map(num => (
          <li key={num}>Item {num}</li>
        ))}
      </ul>
    </section>
  )

  const renderRightNavbar = () => (
    <section className="right-navbar">
      <h2 className="section-heading">Right Navbar Menu</h2>
      <div className="right-nav-list">
        {[1, 2].map(num => (
          <p key={num}>Ad {num}</p>
        ))}
      </div>
    </section>
  )

  const renderContent = () => (
    <setion className="content">
      <h2 className="section-heading">Content</h2>
      <p className="content-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </setion>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-component">
            {showLeftNavbar && renderLeftNavBar()}
            {showContent && renderContent()}
            {showRightNavbar && renderRightNavbar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
