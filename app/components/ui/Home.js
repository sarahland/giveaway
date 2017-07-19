import React from 'react'
import MainMenu from './MainMenu'
// import Navbar from '../'


const Home = () =>
    <div className="home">
        <MainMenu className="home-page-menu"/>
        <div id="homebox"></div>
    </div>

export default Home
// const navbarInstance = (
//   <Navbar>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#">Brand</a>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>
//     <Navbar.Collapse>
//       <Navbar.Form pullLeft>
//         <FormGroup>
//           <FormControl type="text" placeholder="Search" />
//         </FormGroup>
//         {' '}
//         <Button type="submit">Submit</Button>
//       </Navbar.Form>
//     </Navbar.Collapse>
//   </Navbar>
// )
//
// ReactDOM.render(navbarInstance, mountNode);
// export default navbarInstance
