import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/locations' >Locations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
export default NavBar;