'use client'

import { Roboto } from '@next/font/google'
import { FormProvider, useForm } from 'react-hook-form'

import { ToastProvider } from '../shared/contexts/Toast/ToastProvider'
import { ModalProvider } from '../shared/contexts/Modal'
import { Provider } from 'react-redux'
import { store } from 'shared/store'

import '../shared/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export default function RootLayout({ children }) {
  const methods = useForm()

  return (
    <html lang="pt-BR">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={roboto.className}>
        <Provider store={store}>
          <ToastProvider>
            <FormProvider {...methods}>
              <ModalProvider>
                <main>{children}</main>
              </ModalProvider>
            </FormProvider>
          </ToastProvider>
          <div id="toast" />
        </Provider>
      </body>
    </html>
  )
}
