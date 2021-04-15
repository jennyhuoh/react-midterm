import { Layout } from 'antd';
import AppHeader from '../components/Header';
import Introduction from '../components/Intruduction';
import AppFooter from '../components/Footer';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function Home() {
    return (
        <Layout className="container main-layout">
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1}} className="layout-header">
                    <AppHeader />
                </Header>
                <Content>
                    <Introduction />
                </Content>
                <Footer className="layout-footer">
                    <AppFooter />
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;