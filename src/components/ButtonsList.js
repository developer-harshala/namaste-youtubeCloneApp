import React from 'react'
import Button from './Button'

const ButtonsList = () => {
  // method #2 Make List and map it to the button
  const list = [
    'All',
    'Music',
    'Cooking',
    'Study Skills',
    'Bollywood',
    'History',
    'Web Development',
    'Cakes',
    'Motivation',
    'Shark tank',
    'Live',
  ]
  const listData = list.map((btn) => <Button key={btn.id} name={btn} />)

  return (
    <>
      {/* method #1 send data through props */}
      {/* <div className='flex'>
        <Button name='All' />
        <Button name='Songs' />
        <Button name='Cooking' />
        <Button name='Study Skills' />
        <Button name='Web Development' />
        <Button name='Comedy' />
        <Button name='Mixes' />
        <Button name='Cakes' />
        <Button name='Motivation' />
        <Button name='Weddings' />
        <Button name='Live' />
      </div> */}

      <ul>{listData}</ul>
    </>
  )
}

export default ButtonsList
