import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

export const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
