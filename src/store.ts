import { configureStore } from '@reduxjs/toolkit'

import companiesSlice from './components/companiesSlice'

const store = configureStore({
  reducer: {
    companiesReducer: companiesSlice
  }
})
export default store
