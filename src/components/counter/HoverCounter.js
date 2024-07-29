import React from 'react'
import withCounter from '../../hoc/withCounter'

function HoverCounter({count,countHandler}) {
  return (
    <fieldset>
        <legend>Mouse Hover counter example</legend>
      <h3>Count : {count}</h3>
      <button onMouseOver={countHandler}>Hover here</button>
    </fieldset>
  )
}

export default withCounter(HoverCounter,5)
