import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from "./Screens/home/Home";
import Artical from "./Screens/artical/Artical";
import Layout from './Layout';
import store from './Store/store';
import ScrollToTop from './ScrollTop/ScrollTop';

const AppRoute = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop />
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/artical/:id' element={<Artical />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>

    )
}

export default AppRoute;
