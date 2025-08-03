//Components
import Button from "../ui/Button/Button"

//Images
import imagePlanHome from "../../assets/images/plans/plan-home.svg"
import imagePlanHomeClinical from "../../assets/images/plans/plan-home-clinical.svg"

//Redux
import { useDispatch } from "react-redux"
import { setPlan } from "../../features/plan/planSlice"

//Routing
import { useNavigate } from "react-router-dom"

const PlanCard = ({plan}) =>{
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const handleSelectPlan = () => {
    dispatch(setPlan(plan))
    navigate("/resumen");
  }

  return(
    <div className="plan-card">
      <div className="plan-card__top-bottom">
        <div className="plan-card__top">
          <div className="plan-card__details">
            <div className="plan-card__title">
              <h3 className="plan-card__title-text">
                {plan.name} 
              </h3>
            </div>
            <div className="plan-card__cost">
              <div className="plan-card__cost-label">Costo del plan</div>
              <div className="plan-card__cost-amount">${plan.price} al mes</div>
            </div>
          </div>
          <div className="plan-card__icon">
            {plan.name === "Plan en Casa y Clínica" ? (
              <img src={imagePlanHomeClinical} alt={plan.name} className="plan-card__icon-img" />
            ) : (
              <img src={imagePlanHome} alt={plan.name} className="plan-card__icon-img" />
            )}
          </div>
        </div>
        <div className="plan-card__bottom">
          <div className="plan-card__description">
            <ul className="plan-card__description-list">
              {plan.description.map((item, index) => (
                <li key={index} className="plan-card__description-list-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="plan-card__button">
        <Button variant="secondary" onClick={handleSelectPlan}>Seleccionar Plan</Button>
      </div>
    </div>
  )
}

export default PlanCard