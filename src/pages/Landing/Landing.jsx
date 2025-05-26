import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Header from '../../components/Header/Header'
import Video from '../../components/Video/Video'

export default function Landing() {
  return (
    <>
    <Topbar />
    <main class="max-w-6xl mx-auto mt-8 p-4">
      <Header />
      <Video />
    </main>
    </>
  )
}
