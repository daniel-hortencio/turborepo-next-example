'use client'

import { Roboto } from '@next/font/google'

import 'shared/styles/global.css'

import WebsiteLayout from 'shared/components/layouts/WebsiteLayout'
import { ModalProvider } from 'shared/contexts/Modal'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${roboto.className} color- text-custom-gray-400`}>
        <ModalProvider>
          <WebsiteLayout>
            <main>{children}</main>
          </WebsiteLayout>
        </ModalProvider>
      </body>
    </html>
  )
}
