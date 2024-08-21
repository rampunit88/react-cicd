import React from 'react'
import Header from '../../components/header/Header';

function Layout(props) {
  return (
    <div className='bg-slate-500'>
      <Header/>
      {props.children}
    </div>
  )
}

export default Layout
