import React from "react"
import {ADS} from "../../Components/ADS/ADS"
import { Brand } from "../../Components/Brand/Brand"
import { Header } from '../../Components/Header/Header'
import {NewProduct} from "../../Components/NewProduct/NewProduct"
import { RecentProduct } from '../../Components/RecentProduct/RecentProduct'
import { Speciality } from "../../Components/Speciality/Speciality"
import { Footer } from '../../Components/Footer/Footer';

export function Home() {
  return (
    <>
    <Header/>
    <ADS/>
    <NewProduct/>
    <Speciality/>
    <Brand/>
    <RecentProduct/>
    <Footer/>
    </>
  )
}
