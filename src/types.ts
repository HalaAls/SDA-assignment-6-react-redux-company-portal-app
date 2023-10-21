import { ThunkDispatch } from '@reduxjs/toolkit'

import companiesSlice, { fetchCompaniesData, fetchCompany } from './components/companiesSlice'

type Company = {
  login: string
  id: number
  node_id: string
  url: string
  repos_url: string
  events_url: string
  hooks_url: string
  issues_url: string
  members_url: string
  public_members_url: string
  avatar_url: string
  description: null
}

export type CompaniesState = {
  companiesData: Company[]
  isLoading: boolean
  error: string | null
  searchTerm: string
  singleCompany: Company | null
}

export type RootState = {
  companiesReducer: ReturnType<typeof companiesSlice>
}

type FetchCompaniesPendingAction = ReturnType<typeof fetchCompaniesData.pending>
type FetchCompaniesFulfilledAction = ReturnType<typeof fetchCompaniesData.fulfilled>
type FetchCompaniesRejectedAction = ReturnType<typeof fetchCompaniesData.rejected>

type FetchCompanyPendingAction = ReturnType<typeof fetchCompany.pending>
type FetchCompanyFulfilledAction = ReturnType<typeof fetchCompany.fulfilled>
type FetchCompanyRejectedAction = ReturnType<typeof fetchCompany.rejected>

type searchCompanyAction = {
  type: 'companies/searchCompany'
  payload: string
}

type sortCompanyAction = {
  type: 'companies/sortCompanies'
  payload: string
}
export type CompaniesAction =
  | FetchCompaniesPendingAction
  | FetchCompaniesFulfilledAction
  | FetchCompaniesRejectedAction
  | FetchCompanyPendingAction
  | FetchCompanyFulfilledAction
  | FetchCompanyRejectedAction
  | searchCompanyAction
  | sortCompanyAction

export type CompaniesDispatch = ThunkDispatch<RootState, void, CompaniesAction>
