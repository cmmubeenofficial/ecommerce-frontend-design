import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialIcons({ icon }) {
    return (
        <>
            <a href='/' className="text-white bg-[#BDC4CD] w-7.5 h-7.5 rounded-full flex justify-center items-center"><FontAwesomeIcon icon={icon} /></a>
        </>
    )
}

export default SocialIcons