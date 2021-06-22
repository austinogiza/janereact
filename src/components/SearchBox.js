import React, { useState } from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
const SearchBox = ({history}) => {
  const [search, setSearch] = useState(null)

  
  
const onSubmit = e =>{
  e.preventDefault()
  if(search.trim()){
    history.push(`/search/${search}`)
  }

}
  return (
    <>
       <Searchform onSubmit={onSubmit}>
              <Search type="text" name="search" value={search} onChange={e=> setSearch(e.target.value)} placeholder="Search"></Search>
              </Searchform>
    </>
  )
}

const Searchform = styled.form`
height: 50px;
width: 100%;
`
const Search = styled.input`
background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21L16.65 16.65" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
background-position: top 50% left 10px;
background-repeat: no-repeat;
background-size: 6%;
height: 40px;
width: 100%;
border-radius: 15px;
outline: none;
border: none;
margin: 8px 0;
padding: 8px 30px;
font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;

::placeholder{
        font-size: 15px;
        color: #cccccc;
        text-transform: capitalize;
        text-align: center;
}

:active,:focus,:hover{
    border: 2px solid ${themes.jane};
    outline: none;
}

@media only screen and (max-width:650px){
  display: none;
}
`




export default SearchBox
