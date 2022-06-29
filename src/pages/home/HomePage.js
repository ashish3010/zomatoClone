import React, {useState} from 'react'
import Footer from '../../Components/Common/Footer/Footer'
import Header from '../../Components/Common/Header/Header'
import TabOptions from '../../Components/Common/TabOptions/TabOptions'
import Delivery from '../../Components/Delivery/Delivery'
import DiningOut from '../../Components/DiningOut/DiningOut'
import Nightlife from '../../Components/Nightlife/Nightlife'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <div> <Delivery/> </div>;
      case "Dining Out":
        return <div><DiningOut/></div>;
      case "Nightlife":
        return <div><Nightlife/></div>;
      default:
        return <div><Delivery/></div>;
    }
  }
  return (
    <div>
      <Header/>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  )
}

export default HomePage