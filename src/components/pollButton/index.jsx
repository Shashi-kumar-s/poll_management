import React from 'react'

const PollButton = (props) => {
    const{value,buttonstyle,type}=props
  return (
    <button className={buttonstyle}  type={type}>{value}</button>
  )
}

export default PollButton