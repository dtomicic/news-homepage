import Nav from "./Nav"

const Layout = ({children, open, toggleMenu}) => {
  return (
    <>
        <Nav open={open} toggleMenu={toggleMenu}/>
        {children}
    </>
  )
}
export default Layout