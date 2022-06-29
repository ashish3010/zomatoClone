import React from 'react'
import ExploreSection from '../Common/ExploreSection/ExploreSection';
import {restaurants} from '../../data/restaurants'
import Filters from '../Common/Filters/Filters'
import './Delivery.css'
import DeliveryCollections from './DeliveryCollections/DeliveryCollections';
import TopBrands from './TopBrands/TopBrands';

const deliveryFilters = [
  {
    id: 1,
    icon: <i class="fa-solid fa-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    icon: <i class="fa-solid fa-arrow-down-short-wide absolute-center"></i>,
    title: "Delivery Time",
    
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
      <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection list={restaurantList} collectionName= 'Deivery Restaurants in Banglore' />
    </div>
  )
}

export default Delivery