import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const data = {
        id:"1",
        title:"Bienvenue sur Code.io",
        body: "Blog communautaire Developpement Web."
    }

  return (
    <>
        <Banner image="banner/1.png" data={data}/>
    </>
  )
}
