import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Topbar from './components/topbar'
import Contents from './components/contents'
import Footer from './components/foorter'
import ContentX from './components/contents'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Topbar />
      <ContentX/>
      <Footer />
    </>
  )
}
