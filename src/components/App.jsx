import SearchField from './search-field/SearchField'
import style from './App.module.scss'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PostService } from './services/post.service'
import Result from './Result/Result'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const { data, isLoading, isSuccess, refetch } = useQuery(
    ['get posts', searchTerm],
    () => PostService.getPosts(),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      select: data =>
        data.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }
  )

  return (
    <div className={style.main}>
      {isLoading && isSuccess ? (
        <div>Loading....</div>
      ) : data?.length ? (
        <Result posts={data} />
      ) : (
        <SearchField
          setSearchTerm={setSearchTerm}
          refetch={refetch}
          searchTerm={searchTerm}
        />
      )}
    </div>
  )
}
export default App
