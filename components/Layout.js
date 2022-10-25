import Nav from "./Nav"

const Layout = ({children}) => {
  return (
    <>
        <Nav>
            {children}
        </Nav>      
    </>
  )
}
export default Layout