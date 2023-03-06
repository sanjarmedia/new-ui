import {equals, filter, find, isEmpty, length, map, prop} from 'ramda';
import { useState, useEffect } from 'react'
import {News} from '../../components/News';
import {Pagination} from '../../components/Pagination';
import {news} from '../../data/news';

export default function BlogNews(){
  const [state, setState] = useState(null)
  const [list, setList] = useState(news)

  useEffect(() => {
    const filtereted = filter(item => {
      const topic = prop('topic', item)

      return find(item => equals(item, state), topic)
    }, news)

    if (isEmpty(filtereted)) {
      setList(news)
    } else {
      setList(filtereted)
    }
  }, [state])

  const activeButtonClassName = 'bg-primary text-white'
  const noActiveButtonClassName = 'bg-background-color text-secondary'
  const buttonClassName = 'z-10 font-medium px-5 py-2.5 rounded-3xl hover:bg-primary hover:text-white duration-300'
  return(
    <>
      <div className='relative z-10 mt-36 flex justify-start items-center overflow-x-auto'>
        <div className='whitespace-nowrap py-5 px-5 md:px-12 2xl:px-64 hover:scroll-hidden'>
          <button
            onClick={() => setState(null)}
            className={`${equals(state, null) ? activeButtonClassName : noActiveButtonClassName} ${buttonClassName}`}
          >
            Most Recent
          </button>

          <button
            onClick={() => setState('news')}
            className={`${equals(state, 'news') ? activeButtonClassName : noActiveButtonClassName} ${
              buttonClassName + ' ml-3'
            }`}
          >
            News
          </button>

          <button
            onClick={() => setState('product_updates')}
            className={`${equals(state, 'product_updates') ? activeButtonClassName : noActiveButtonClassName} ${
              buttonClassName + ' ml-3'
            }`}
          >
            Product updates
          </button>

          <button
            onClick={() => setState('how_tos')}
            className={`${equals(state, 'how_tos') ? activeButtonClassName : noActiveButtonClassName} ${
              buttonClassName + ' ml-3'
            }`}
          >
            How to’s
          </button>
        </div>
      </div>

      {map(
        item => (
          <News key={prop('id', item)} {...item} />
        ),
        list
      )}

      <Pagination length={length(news)} />
    </>
  )
}