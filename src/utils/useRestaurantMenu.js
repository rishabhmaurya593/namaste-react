import React, { useEffect, useState } from 'react'

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, []);

    const fetchMenu = async () => {
        // const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=984350&query=Biryani&submitAction=ENTER&source=collection")
        // const json = await data.json();
        // setResInfo(json.data.cards)
        // console.log(json.data.cards)

        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json();
        setResInfo(json.data)
    }
  
    return resInfo;
}

export default useRestaurantMenu
