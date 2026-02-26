import { useState } from "react"
import { navLinksData } from "./navLinksData"

function NavLinks() {
    const [activeId, setActiveId] = useState("electronics") // default / future route id

    return (
        <ul>
            {navLinksData.map(({ id, title }) => (
                <li
                    key={id}
                    onClick={() => setActiveId(id)}
                    className={`
                    leading-10.25 cursor-pointer rounded-md px-2
                    transition
                    hover:bg-gray-100
                    ${activeId === id ? "bg-[#E5F1FF] font-medium text-[#1C1C1C]" : "text-[#505050]"}
                `}
                >
                    <a href="/">{title}</a>
                </li>
            ))}
        </ul>
    )
}

export default NavLinks