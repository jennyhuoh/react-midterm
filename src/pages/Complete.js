import { useContext, useEffect } from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';
import CompleteDetail from '../components/CompleteDetail';
import { setBurgerDetail } from '../actions/index';
import { StoreContext } from '../store';
import burgerBuns from '../json/burgerBuns.json';


const {Header, Content, Footer } = Layout;

function Complete() {
    //const { dispatch } = useContext(StoreContext);
    // useEffect(( => setBurgerDetail(dispatch, match.)))
    return(
        <Layout className="container main-layout">
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1}} className="layout-header">
                    <AppHeader />
                </Header>
                <Content className="layout-content">
                    <CompleteDetail />
                </Content>
            </Layout>         
        </Layout>
    );
}

export default Complete;