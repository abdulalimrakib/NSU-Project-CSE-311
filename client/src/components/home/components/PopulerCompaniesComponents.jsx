import React from 'react'

const PopulerCompaniesComponents = ({item}) => {
    const {title, openPositions, icon, location} = item
  return (
    <div>
        <div>
            <div>
                {icon}
            </div>
            <div>
                <h4>{title}</h4>
                <p>{location}</p>
            </div>
        </div>
        <div>
            <h3>Open Position {openPositions}</h3>
        </div>
    </div>
  )
}

export default PopulerCompaniesComponents