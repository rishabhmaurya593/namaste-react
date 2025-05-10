import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: "Default User"
})

export {UserContext};