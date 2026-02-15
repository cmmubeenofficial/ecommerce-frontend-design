import { v4 as uuidv4 } from 'uuid';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export const socialIconsData = [
    {
        id: uuidv4(),
        icon: faFacebookF,
    },
    {
        id: uuidv4(),
        icon: faLinkedinIn,
    },
    {
        id: uuidv4(),
        icon: faTwitter,
    },
    {
        id: uuidv4(),
        icon: faInstagram,
    },
    {
        id: uuidv4(),
        icon: faYoutube,
    },
]