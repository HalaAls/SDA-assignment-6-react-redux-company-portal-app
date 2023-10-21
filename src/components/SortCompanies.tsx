import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { sortCompanies } from './companiesSlice'

const SortCompanies = () => {
  const dispatch = useDispatch()
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortCompanies(event.target.value))
  }

  return (
    <div>
      <label htmlFor="sort"> Sort By: </label>
      <select className="select-options" name="sort" id="sort" onChange={handleOptionChange}>
        <option value="id" defaultValue="id">
          ID
        </option>
        <option value="login">Login</option>
      </select>
    </div>
  )
}
export default SortCompanies
