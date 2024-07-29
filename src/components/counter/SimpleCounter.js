import React from 'react'
import withCounter from '../../hoc/withCounter'

function SimpleCounter({count,countHandler}) {
  return (
    <fieldset>
         <legend>Simple counter example</legend>
      <h3>Count : {count}</h3>
      <button onClick={countHandler}>Click me</button>
    </fieldset>
  )
}

export default withCounter(SimpleCounter,2)
