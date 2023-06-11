import React from 'react'

const MyRefs = React.forwardRef((props, ref) => {
  console.log(props);
  console.log(ref);
  
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
})

export default MyRefs
