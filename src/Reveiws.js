import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import people from './data'

const Reveiws = () => {
  const [index, setIndex] = useState(0)
  const { name, image, job, text } = people[index]

  const validateIndex = (index) => {
    if (index > people.length - 1) {
      return 0
    }
    if (index < 0) {
      return people.length - 1
    }
    return index
  }

  const random = () => {
    const randomIndex = Math.floor(Math.random() * people.length)
    if (randomIndex === index) {
      random()
    }
    setIndex(randomIndex)
  }

  return (
    <article className='reveiws'>
      <div className='reveiws__image--container'>
        <img src={image} alt={job} className='reveiws__image' />
        <span className='reviews__icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='reveiws__name'>{name}</h4>
      <p className='reveiws__job'>{job}</p>
      <p className='reveiws__text'>{text}</p>
      <section className='reveiws__btn--container'>
        <button
          className='prev'
          onClick={() => setIndex(validateIndex(index - 1))}
        >
          <FaChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => setIndex(validateIndex(index + 1))}
        >
          <FaChevronRight />
        </button>
      </section>
      <button className='reveiws__surprise' onClick={random}>
        surprise me
      </button>
    </article>
  )
}

export default Reveiws
