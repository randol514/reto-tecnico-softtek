//Hooks
import { useState } from "react";

//Components
import PlanList from "../components/plan/PlanList";
import QuotationList from "../components/quotation/QuotationList";
import Back from "../components/ui/Back/Back";
import Menu from "../components/layout/Header/Menu";

//Services
import { useUsers } from "../services/api";

//Utils
import { getAgeFromBirthday } from "../utils/date";
import Loading from "../components/ui/Loading/Loading";

const Plans = () => {

  const { data, loading, error } = useUsers();
  const [quotationSelected, setQuotationSelected] = useState(null)

  if (loading) return <Loading />
  if (error) return <div>Error: {error.message}</div>
  if (!data) return null

  const userAge = getAgeFromBirthday(data?.birthDay || "")

  return (
    <div className="plans-page">
      <div className="plans-page__container wrapper-container">
        <Menu />
        <div className="plans-page__content">
          <div className="plans-page__back">
            <Back to={"/"} label={"Volver"} />
          </div>
          <div className="plans-page__top">
            <div className="plans-page__user">
              <div className="plans-page__user-title">
                <h1 className="plans-page__user-title-text">
                  {data.name} ¿Para quién deseas cotizar?
                </h1>
              </div>
              <div className="plans-page__user-text">
                Selecciona la opción que se ajuste más a tus necesidades.
              </div>
            </div>
            <div className="plans-page__quotations">
              <QuotationList setQuotationSelected={setQuotationSelected} />
            </div>
          </div>
           {quotationSelected && (
            <div className="plans-page__bottom">
              <PlanList userAge={userAge} quotationSelected={quotationSelected} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plans;
