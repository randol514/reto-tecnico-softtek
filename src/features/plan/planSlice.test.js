import planReducer, {setPlan} from './planSlice'

describe('planSlice', () => {
  const initialState = {plan: ""}

  it("deberia de elegirse el plan en casa correctamente", () =>{
    const planAction = setPlan({plan: "Plan en casa"})
    const newState = planReducer(initialState, planAction)
    expect(newState.plan).toBe('Plan en casa')
  })
})