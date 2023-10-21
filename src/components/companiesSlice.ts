import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { CompaniesState } from '../types'

export const fetchCompaniesData = createAsyncThunk('companies/fetchCompaniesData', async () => {
  const response = await fetch('https://api.github.com/organizations')
  if (!response.ok) {
    throw new Error('Network Error')
  }
  const data = await response.json()
  return data
})

export const fetchCompany = createAsyncThunk('companies/fetchCompany', async (id: number) => {
  try {
    const response = await fetch(`https://api.github.com/orgs/${id}`)
    if (!response.ok) {
      throw new Error('Network Error')
    }
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
})

const initialState: CompaniesState = {
  companiesData: [],
  isLoading: false,
  error: null,
  searchTerm: '',
  singleCompany: null
}

const companiesSlice = createSlice({
  name: 'companies',
  initialState: initialState,
  reducers: {
    searchCompany: (state, action) => {
      state.searchTerm = action.payload
    },
    sortCompanies: (state, action) => {
      const sortingCompanies = action.payload
      if (sortingCompanies === 'login') {
        state.companiesData.sort((a, b) => a.login.localeCompare(b.login))
      } else if (sortingCompanies === 'id') {
        state.companiesData.sort((a, b) => a.id - b.id)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompaniesData.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCompaniesData.fulfilled, (state, action) => {
        state.companiesData = action.payload
        state.isLoading = false
      })
      .addCase(fetchCompaniesData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Error Exist'
      })
      .addCase(fetchCompany.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCompany.fulfilled, (state, action) => {
        state.isLoading = false
        state.singleCompany = action.payload
      })
      .addCase(fetchCompany.rejected, (state, action) => {
        state.error = action.error.message || 'Error Exist'
        state.isLoading = false
      })
  }
})
export const { searchCompany, sortCompanies } = companiesSlice.actions
export default companiesSlice.reducer
