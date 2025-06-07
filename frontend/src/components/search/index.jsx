
import React from 'react'
import Result from './Result'
import { Helmet } from 'react-helmet'

const SearchIndex = () => {
  return (
    <div>
       <Helmet>
      <title>Libro | Search Result</title>
      </Helmet>
<Result />
    </div>
  )
}

export default SearchIndex