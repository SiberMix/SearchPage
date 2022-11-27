import style from './SearchField.module.scss'
import { BsSearch } from 'react-icons/bs'
import LogoImage from '../img/bear-svgrepo-com.svg'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PostService } from '../services/post.service'

const SearchField = ({ setSearchTerm, refetch, searchTerm }) => {
  const handleEnterSearch = e => {
    if (e.key === 'Enter') {
      refetch()
    }
  }
  return (
    <div>
      <img
        src={LogoImage}
        alt=''
        width={100}
        style={{ margin: '0 auto', display: 'block', paddingBottom: '10px' }}
      />

      <label className={style.field}>
        <BsSearch color='#424242' />
        <div>
          <input
            type='text'
            placeholder='Enter Search Term'
            onKeyDown={handleEnterSearch}
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
          />
        </div>
      </label>
    </div>
  )
}
export default SearchField
