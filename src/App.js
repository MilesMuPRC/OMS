import { Layout } from 'antd';
import React from 'react';
import './App.css';
// import Login from './pages/Login'
import MobilesList from './pages/MobilesList'
import MobileInfo from './pages/MobileInfo'
import CartList from './pages/CartList'
import { Route, Routes } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
      <div />
      <p className='lightColor'>Mob Online</p>
    </Header>
    <Content>
      <div className="site-layout-content">
          <Routes>
            <Route exact path='/' element={<MobilesList />} />
            <Route path='/CartList' element={<CartList />} />
            <Route path='/MobileInfo' element={<MobileInfo />} />
          </Routes>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Online Mobile Store ©2022 Created by Nagarro
    </Footer>
  </Layout>
);

export default App;


// import { Link } from 'react-router-dom'

// export default function App() {
//   return (
//       <div className="App">
//           <Link to='/home'>Home</Link>
//           <Link to='/mobiles'>Mobiles</Link>
//       </div>
//   );
// }