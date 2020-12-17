import React, { useEffect, useLayoutEffect, useState } from 'react'
import '../styles/app.css'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

