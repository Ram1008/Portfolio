import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        
        { [ "home", "work", "about", "skills","testimonial", "contact"].map((item) =>(
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a href={`#${item}`}
          key = {`item-${item}`} 
          className='app__navigation-dot'
          style={active === item ? {backgroundColor: '#E8601B'}: {}}
          />
        ))

        }
      

    </div>
  )
}

export default NavigationDots