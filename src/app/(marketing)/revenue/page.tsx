
"use client"
import axios from "axios"
import { useEffect } from "react"

const customer = () => {
    useEffect(() => {
        const FetchData = async () => {
            const res = await axios("http://localhost:3000/components", { method: "post" })
            return res.data
        }
        FetchData()


    }, [])

    return (

        <div>

            <h1>this the login</h1>

        </div>

    )

}
export default customer 
