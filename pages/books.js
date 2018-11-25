// @flow
import React from 'react'
import BookCard, {type Book} from '../components/Book'

const bookList = [{
        title: 'Book 1',
        content: 'Content 1',
    }, {
        title: 'Book 2',
        content: 'Content 2',
    }, {
        title: 'Book 3',
        content: 'Content 3',
    }]

type Props = {
    books: Array<Book>,
}

const Books = ({ books }: Props) => (
    <div>
        <h1>Books</h1>
        {bookList.map(b => (
            <p>{b.title}</p>
        ))}
    </div>
)

Books.getInitialProps = async ({ req }) => {
    console.log('initial props in Books')
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()

  return {
      books: bookList,
  }
}

export default Books
