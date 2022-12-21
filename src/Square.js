import React from 'react'

const Square = ({ colorValue }) => {
  return (
    <section
        className="Square"
        style={{backgroundColor: colorValue}}
        >
        <p>
            {colorValue ? colorValue:"listempty"}
        </p>
    </section>
  )
}
Square.defaultProps = { 
    colorValue:"listempty"
}

export default Square