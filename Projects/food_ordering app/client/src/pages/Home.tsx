import CarouselHome from "../components/CarouselHome"
import FoodSuggetions from "../components/FoodSuggetions"
import Restaurants from "../components/Restaurants"
import { CAROUSEL_OFFERS_IMG } from "../utils/mockData"

const Home = () => {
  return (
    <div className="w-full flex justify-center mx-auto min-h-screen ">
      <div className="w-10/12 mx-auto">
          

          <FoodSuggetions />

          <Restaurants />

          <CarouselHome data={CAROUSEL_OFFERS_IMG}/>

      </div>
    </div>
  )
}

export default Home