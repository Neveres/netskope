import React, { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

const HomePage = lazy(() => import('src/containers/HomePage'))
const Details = lazy(() => import('src/containers/Details'))

export enum PagePath {
  Root = '/',
  Details = '/details',
}

export const Routes = () =>
  useRoutes([
    {
      path: PagePath.Root,
      element: <HomePage />,
    },
    {
      path: PagePath.Details,
      element: <Details />,
    },
    {
      path: '*',
      element: <Navigate to={PagePath.Root} replace />,
    },
  ])
