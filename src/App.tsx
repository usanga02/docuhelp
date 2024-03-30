import Hero from "./components/layout/Hero"
import Navbar from "./components/layout/navbar"
import WriteWithDocuHelp from "./components/sections/WriteWithDocuHelp"
import Footer from "./components/sections/footer"
import GetStarted from "./components/sections/getStarted"
import UseDocuHelp from "./components/sections/useDocuHelp"
import WhatDocument from "./components/sections/whatDocument"
import WhyDocuhelp from "./components/sections/whyDocuhelp"

function App() {

  return (
    <div className="bg-slate-100 h-full">
      <Navbar />
      <Hero />
      <GetStarted />
      <WriteWithDocuHelp />
      <UseDocuHelp />
      <WhatDocument />
      <WhyDocuhelp />
      <Footer />
    </div>
  )
}

export default App
