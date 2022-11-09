import React from 'react'

export default function HouseItem() {

    useEffect(() => {
      console.log(location.pathname)
    }, [])
    
    return (
        <div>HouseItem</div>
    )
}
