import '../styles/globals.css'
import React from "react";

export const metadata = {
  title: 'Prompt List',
  description: 'Discover & Share AI Prompts',
}
export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <div className={"main"}>
      <div className={"gradient"}/>
      <main className={"relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6"}>
        {children}
      </main>
    </div>
    </body>
    </html>
  )
}
