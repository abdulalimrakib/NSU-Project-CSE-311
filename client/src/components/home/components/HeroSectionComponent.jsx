import React from 'react'

const HeroSectionComponent = ({item}) => {
    const {title, subTitle, icon} = item
  return (
    <div>
        <div>
            <div>
                {icon}
            </div>
            <div>
                <h3>{title}</h3>
                <h4>{subTitle}</h4>
            </div>
        </div>
    </div>
  )
}

export default HeroSectionComponent