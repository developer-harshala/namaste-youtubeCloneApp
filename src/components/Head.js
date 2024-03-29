import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <>
      <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
          <img
            className='h-8 cursor-pointer'
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII='
            alt='Menu'
            onClick={() => toggleMenuHandler()}
          />
          <a href='/'>
            <img
              className='h-8 mx-2'
              src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'
              alt='Youtube Logo'
            />
          </a>
        </div>
        <div className='col-span-10 px-10'>
          <input
            className='w-1/2 border border-gray-400 p-2 rounded-l-full'
            type='text'
          />
          <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
            🔍
          </button>
        </div>
        <div className='col-span-1'>
          <img
            className='h-8'
            src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
            alt='user'
          />
        </div>
      </div>
    </>
  )
}

export default Head
