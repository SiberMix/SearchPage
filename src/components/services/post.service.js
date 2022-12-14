import axios from 'axios'

export const PostService = {
  async getPosts(searchTerm) {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return data
  }
}
