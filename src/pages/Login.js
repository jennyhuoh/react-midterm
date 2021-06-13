import { Layout } from 'antd';
import LoginCard from '../components/LoginCard';
import CartHeader from '../components/CartHeader';
import CartList from '../components/CartList';
import CartFooter from '../components/CartFooter';

const { Header, Content, Footer } = Layout;

function Login() {
    return(
        <Layout className="container main-layout">
            <Layout>
                <Header className="layout-header">
                    <CartHeader />
                </Header>
                <Content className="layout-content">
                    <CartList />
                    <LoginCard />
                </Content> 
                <Footer>
                    <CartFooter />
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Login;