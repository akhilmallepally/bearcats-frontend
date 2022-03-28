import Header from "../components/Header"
import PostCard from "../components/Card"
import Footer from "../components/Footer"
import Head from "next/head"
const Index = () => {
  return (
    <div>
      <Head>
      
        <title>
        
          5B - Bearcat events
        </title>
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
        </Head>
      <Header />
      
      <PostCard />
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default Index
