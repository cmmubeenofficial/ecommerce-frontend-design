function NavLinks({ heading, subLinks }) {
    return (
        <main className="nav-links-container flex flex-col gap-2">
            <h2 className="font-medium">{heading}</h2>
            <ul>
                {subLinks.map(({ id, label, href }) => (
                    <li key={id} className="text-[#8B96A5] leading-7">
                        <a href={href}>{label}</a>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default NavLinks