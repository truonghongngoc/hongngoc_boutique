import { pathname } from '@src/routers/pathname'
import React from 'react'
import { LoginPage } from '@src/components/pages/LoginPage'
import { HomePage } from '@src/components/pages/HomePage'
import { RegisterPage } from '@src/components/pages/RegisterPage'
import { VerifyPage } from '@src/components/pages/VerifyPage'

export const routers = [
  {
    path: pathname.login.path,
    element: <LoginPage />,
  },
  {
    path: pathname.home.path,
    element: <HomePage />,
  },
  {
    path: pathname.register.path,
    element: <RegisterPage />,
  },
  {
    path: pathname.verify.path,
    element: <VerifyPage />,
  },
]
