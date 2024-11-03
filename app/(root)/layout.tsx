import MyStreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'

const RootLayout = ({children} : { children: ReactNode}) => {
  return (
    <main>
      <MyStreamVideoProvider>
        {children}
      </MyStreamVideoProvider>
    </main>
  )
}

export default RootLayout