import logo from './logo.png';
import './App.css';
import React from "react";
import Home from './View/Home/Main';
import ExtractionSecret from './View/ExtractionSecret/0_Main';

import EmbeddingImage from './View/EmbeddingImage/Main';
import { Layout, Menu, Breadcrumb } from 'antd';
import { SelectOutlined, FilterOutlined } from '@ant-design/icons';
import Typography from '@mui/material/Typography';
import Carousel from './Components/Carousel'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { display } from '@mui/system';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <a color="inherit" href="https://gitlab.com/ncu111522119/adc-project2" target={"_blank"}>
        ADC Project2 小馬隊 - 資訊隱藏與隱寫術 網頁實作
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function App(props) {
  const { Header, Content, Footer } = Layout;
  const [currentURL, setCurrentURL] = React.useState(window.location.pathname.split("/")[1]);
  // const currentURL  =  ;;
  // console.log(currentURL);
  return (
    <>
      <Layout className="layout">
        <BrowserRouter>
          <Header>

            <Link to="/" onClick={() => setCurrentURL("")}>
              <div className="logo" style={{
                width: "150px",
                height: "60px",
                margin: "5px 24px 16px 0",
                float: "left",
                color: "white",
                textAlign: 'left',
                fontSize: "30px",
                
                
              }}>
                {/* <image style={{ "height": "150px", "width": "150px" }} src={logo} /> */}
                {/* <SelectOutlined></SelectOutlined> */}
                <img style={{ "height": "40px", display:"inline-block" }} src={logo} />
                <span style={{ lineHeight: "35px", color: "white", marginTop: 0, fontFamily:"標楷體", display:"inline-block",verticalAlign: "text-top", }}>    小馬隊</span>
              </div>
            </Link>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px', color: "white", fontSize: "18px", }}
            >
              <Link to="/EmbeddingImage" style={{"color":"white"}} onClick={() => setCurrentURL("EmbeddingImage")}><Menu.Item > <SelectOutlined /> Embedding Image</Menu.Item></Link>
              <Link to="/ExtractionSecret" style={{"color":"white"}} onClick={() => setCurrentURL("ExtractionSecret")}><Menu.Item><FilterOutlined /> Extration Secret</Menu.Item></Link>
            </Menu>
          </Header>
          {(currentURL==="")?<Carousel />:""}
          <Content style={{ padding: '0 50px' }}>
          
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>{currentURL}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 850 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/EmbeddingImage" element={<EmbeddingImage />} />
                <Route path="/ExtractionSecret" element={<ExtractionSecret />} />
              </Routes>
            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Copyright />
          </Footer>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
