import '../styles/globals.css'
import React from "react";
import {Nav, Provider} from '../components/index'

export const metadata = {
  title: 'Prompt List',
  description: 'Discover & Share AI Prompts',
}
export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    {/*// @ts-ignore*/}
    <Provider>
      <div className={"main"}>
        <div className={"gradient"}/>
      </div>
      <main className={"relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6"}>
        <Nav/>
        {children}
      </main>
    </Provider>
    </body>
    </html>
  )
}
