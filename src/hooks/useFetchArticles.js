import {useState, useEffect} from 'react'

export const useFetchArticles = () => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    const getGifts =  async() => {
        const url = `https://private-ce82ba-levotest.apiary-mock.com/items`;
    
        const resp = await fetch(url);
        const {items} = await resp.json();
        
        return items;
    }

    useEffect(() => {
        getGifts()
            .then( items => setstate({
                data: items,
                loading: false
            }));
    }, []);

    return state;
}