import style from './SearchField.module.scss'
import { BsSearch } from 'react-icons/bs'
import LogoImage from '../img/bear-svgrepo-com.svg'

const SearchField = () => {
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
          <input type='text' placeholder='Enter Search Term' />
        </div>
      </label>
    </div>
  )
}
export default SearchField
