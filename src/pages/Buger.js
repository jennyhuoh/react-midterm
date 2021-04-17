import { useContext, useEffect } from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';
import BugerDetail from '../components/BurgerDetail';
import { setBurgerDetail } from '../actions/index';
import { StoreContext } from '../store';


const {Header, Content, Footer } = Layout;

function Burger() {
    const { dispatch } = useContext(StoreContext);
    // useEffect(( => setBurgerDetail(dispatch, match.)))
    return(
        <Layout className="container main-layout">
            {/* <Header style={{position: 'fixed', zIndex: 1}} className="layout-header">
                <AppHeader />
            </Header> */}
            <Content className="layout-content">
                <BugerDetail />
            </Content>
        </Layout>
    );
}

export default Burger;