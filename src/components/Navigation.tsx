import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/Companies">
            Companies
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation
