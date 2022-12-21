import React from 'react'

const Input = ({colorValue, setColorValue}) => {
  return (
      <form onSubmit={(e) => e.preventDefault()}>
          <label>Add Color name:</label>
          <input
              autoFocus
              type="text"
              placeholder="Add color Name"
              required
              value={colorValue}
              onChange={(e) => setColorValue(e.target.value)}
          />


      </form>
  )
}

export default Input