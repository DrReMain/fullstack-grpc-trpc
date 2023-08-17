// import dynamic from 'next/dynamic'

import Component from "./component";

// const Component = dynamic(() => import('./component'), { ssr: false })

export default async function Home() {
    return (
        <Component/>
    )
}
