import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import {
    MainLayout,
    FullLayout,
} from './layouts'

// pages
import NotFound from 'pages/notFound';
import Nfts from 'pages/NFTs';
import ERC20 from 'pages/ERC20';
import HouseDetails from 'pages/HouseDetails';

export default function Router() {

    return useRoutes([
        {
            path: '/house',
            element: <MainLayout />,
            children: [
                // { path: 'app', element: <Dashboard /> },
                { path: 'nfts', element: <Nfts /> },
                { path: 'erc20', element: <ERC20/>}
            ]
        },
        {
            path: '/item',
            element: <MainLayout />,
            children: [
                { path: ':contract/:tokenID', element: <HouseDetails /> },
            ]
        },
       
        {
            path: '/',
            element: <FullLayout />,
            children: [
                { path: '/', element: <Navigate to='/house/nfts' /> },
                { path: '404', element: <NotFound /> },
                { path: '*', element: <Navigate to='/404' /> }
            ]
        },
        { path: '*', element: <Navigate to='/404' replace /> }
    ])
}
