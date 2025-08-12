const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const API_ENDPOINTS = {
  USERS: `${BASE_URL}/user.json`,
  PLANS: `${BASE_URL}/plans.json`
};
