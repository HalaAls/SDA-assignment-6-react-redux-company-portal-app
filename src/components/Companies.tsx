import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ChangeEvent, useEffect } from 'react'

import { fetchCompaniesData, searchCompany } from './companiesSlice'
import { CompaniesDispatch, RootState } from '../types'
import SortCompanies from './SortCompanies'
import '../App.css'

const Companies = () => {
  const dispatch: CompaniesDispatch = useDispatch()

  const { companiesData, isLoading, error, searchTerm } = useSelector(
    (state: RootState) => state.companiesReducer
  )

  useEffect(() => {
    dispatch(fetchCompaniesData())
  }, [dispatch])
  if (isLoading) {
    return <p>Companies Data Are Loading</p>
  }
  if (error) {
    return <p>{error}</p>
  }
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCompany(event.target.value))
  }

  const filteredCompanies = searchTerm
    ? companiesData.filter((company) => company.login === searchTerm)
    : companiesData

  return (
    <div>
      <h2 className="heading">Companies Portal App</h2>
      <div className="actions">
        <input
          type="text"
          placeholder="Search By Company Name"
          onChange={handleSearch}
          value={searchTerm}
        />
        <SortCompanies />
      </div>
      <section className="companies">
        {filteredCompanies.length > 0 &&
          filteredCompanies.map((company) => {
            const { id, avatar_url, login, description } = company
            return (
              <article key={id} className="company">
                <img className="company-img" src={avatar_url} alt={login} />
                <h2>{id}</h2>
                <p>{login}</p>
                <Link to={`/SingleCompany/${id}`}>
                  <button>Read More</button>
                </Link>
              </article>
            )
          })}
      </section>
    </div>
  )
}
export default Companies
