//Services
import { usePlans } from "../../services/api"

//Components
import Loading from "../ui/Loading/Loading"
import PlanCard from "./PlanCard"

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const PlanList = ({ userAge, quotationSelected  }) =>{
  const { data, loading, error } = usePlans()

  if (loading) return <Loading />
  if (error) return <div>Error: {error.message}</div>

  const filteredPlans = data?.list
  ?.filter((plan) => plan.age >= userAge)
  ?.map((plan) => {
    if (quotationSelected === "Para alguien más") {
      return {
        ...plan,
        price: plan.price * 0.95, 
      }
    }
    return plan
  })

  return(
    <>
      <div className="plans-list">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          navigation={{
            nextEl: ".js-plans-list-next",
            prevEl: ".js-plans-list-prev",
          }}
          watchOverflow={true}
          pagination={{
            el: ".js-plans-list-fraction",
            type: "fraction",
          }}
          breakpoints={{
            385: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
        {filteredPlans?.map((plan) => (
          <SwiperSlide key={plan.name}>
            <PlanCard 
            plan={plan}
            />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
      <div className="plans-list__navigation">
        <div className="plans-list__prev js-plans-list-prev icon-down">
        </div>
        <div className="plans-list__fraction js-plans-list-fraction"></div>
        <div className="plans-list__next js-plans-list-next icon-down">
        </div>
      </div>

    </>
  )
}

export default PlanList