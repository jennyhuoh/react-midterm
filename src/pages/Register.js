import { Layout } from 'antd';
import RegisterCard from '../components/RegisterCard';
import CartHeader from '../components/CartHeader';
import CartList from '../components/CartList';
import AppFooter from '../components/Footer';

const { Header, Content, Footer } = Layout;

function Register() {
    return(
        <Layout className="container main-layout">
            <Layout>
                <Header className="layout-header">
                    <CartHeader />
                </Header>
                <Content className="layout-content">
                    <CartList />
                    <RegisterCard />
                </Content> 
                <Footer className="layout-footer">
                    <AppFooter />
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Register;