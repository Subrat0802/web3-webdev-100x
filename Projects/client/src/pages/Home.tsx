import CarouselHome from "../components/CarouselHome"
import FoodSuggetions from "../components/FoodSuggetions"
import { CAROUSEL_OFFERS_IMG } from "../utils/mockData"

const Home = () => {
  return (
    <div className="w-full flex justify-center mx-auto min-h-screen dark:bg-[#0f0f0f] dark:text-white">
      <div className="w-10/12 mx-auto">
          <CarouselHome data={CAROUSEL_OFFERS_IMG}/>

          <FoodSuggetions />
      </div>
    </div>
  )
}

export default Home