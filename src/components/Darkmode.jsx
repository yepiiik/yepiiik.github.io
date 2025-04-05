import React, { useState, useEffect } from 'react'
import { isDarkThemePreferred } from '../config/base'

function Darkmode() {
  const [darkmode, setDarkmode] = useState(isDarkThemePreferred)

  useEffect(() => {
    document.querySelector('body').setAttribute('theme', darkmode ? 'dark' : 'light')
    console.log(darkmode)
  }, [darkmode])

  return (
    <></>
    // <button className='darkmode_btn' onClick={() => {setDarkmode(!darkmode); console.log(!darkmode)}}>Dark/Light</button>
  )
}

export default Darkmode