import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navDiv">
      <div className="nav-content">
        <div className="nav-mobile-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo"
            />
          </Link>
          <ul className="nav-mobile-icons">
            <li>
              <Link to="/">
                <AiFillHome className="nav-item-mobile-link" />
              </Link>
            </li>
            <li>
              <Link to="/jobs">
                <BsFillBriefcaseFill className="nav-item-mobile-link" />
              </Link>
            </li>
            <li>
              <button
                className="nav-mobile-btn"
                onClick={onClickLogout}
                type="button"
              >
                <FiLogOut />
              </button>
            </li>
          </ul>
        </div>

        <div className="nav-desktop-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo"
            />
          </Link>
          <ul className="listDiv">
            <li className="list-item">
              <Link to="/" className="link-style">
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/jobs" className="link-style">
                Jobs
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)
