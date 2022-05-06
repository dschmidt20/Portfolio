import './App.css';
import { Layout, Breadcrumb, Divider, BackTop } from 'antd';
import LandingScreen from './components/LandingScreen';
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects';


const { Header, Content, Footer } = Layout;

function App() {
  return(
  <Layout className="layout">
    
      <Breadcrumb style={{ margin: '0 0' }}>
       
      </Breadcrumb>
      <div className="site-layout-content">
        <LandingScreen />
        <Divider plain>About Me</Divider>
        <About />
        <Divider orientation='left'>Technologies I Use</Divider>
        <Tech />
        <Divider orientation='right'>My Projects</Divider>
        <Projects embedId='K1UxjTwdctY' />
        <Divider plain>Let's Get in Contact!</Divider>
      </div>
      <BackTop />
    <Footer style={{ textAlign: 'center' }}> ©2022 Created by Daniel Schmidt</Footer>
  </Layout>
  );
}

export default App;
