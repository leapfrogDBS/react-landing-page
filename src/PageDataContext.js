import React, { createContext, useEffect, useState } from "react"
import axios from 'axios';

const PageDataContext = createContext()

function PageDataContextProvider(props) {

    const [pageData, setPageData] = useState(null)

    useEffect(() => {
        axios
            .get('http://localhost/headlessWP/wp-json/acf/v3/pages?slug=landing-page')
            .then((res) => {
                setPageData(res.data[0].acf)
            })
            .catch((error) => console.error(error))
    }, [])

  if (!pageData) return <p>Loading...</p>

    return (
        <PageDataContext.Provider value={pageData}>
            {props.children}
        </PageDataContext.Provider>
    )
}

export {PageDataContextProvider, PageDataContext}