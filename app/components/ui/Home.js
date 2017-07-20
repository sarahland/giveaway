import React from 'react'
import MainMenu from './MainMenu'
module.exports      = require('./Count');
exports.OnlineCount =  require('./OnlineCount');
exports.ViewCount =  require('./ViewCount');

const Home = () =>

<div className="home">
  <MainMenu className="home-page-menu"/>
  <div id="homebox"></div>

</div>

export default Home;
