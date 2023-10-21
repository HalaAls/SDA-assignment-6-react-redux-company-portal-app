import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { CompaniesDispatch, RootState } from '../types'
import { fetchCompany } from './companiesSlice'

const SingleCompany = () => {
  const { id } = useParams()
  const { singleCompany, isLoading, error } = useSelector(
    (state: RootState) => state.companiesReducer
  )
  const dispatch: CompaniesDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCompany(Number(id)))
  }, [dispatch, id])

  if (isLoading) {
    return <p>Company Data Is Loading</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      {singleCompany && (
        <article className="single-company">
          <img src={singleCompany.avatar_url} alt={singleCompany.login} />
          <div className="company-info">
            <p>{singleCompany.login}</p>
            <p>{singleCompany.description}</p>
            <p>{singleCompany.issues_url}</p>
            <p>{singleCompany.repos_url}</p>
          </div>
        </article>
      )}
    </div>
  )
}
export default SingleCompany
