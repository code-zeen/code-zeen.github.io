import { SiMui, SiReact, SiRedux, SiTypescript, SiVite } from 'react-icons/si'
import { SlQuestion } from 'react-icons/sl'
import { MdOutlineLocationOn, MdOutlineMail, MdPerson2, MdSmartphone } from 'react-icons/md'

function Icon({ name }: { name: string }) {
    const disabled = '#b4b4b4'
    switch (name) {
        case 'email':
            return <MdOutlineMail color={disabled} />
        case 'location':
            return <MdOutlineLocationOn color={disabled} />
        case 'phone':
            return <MdSmartphone color={disabled} />
        case 'test':
            return <MdPerson2 color={disabled} />


        case 'mui':
            return <SiMui />
        case 'react':
            return <SiReact />
        case 'redux':
            return <SiRedux />
        case 'typescript':
            return <SiTypescript />
        case 'vite':
            return <SiVite />
        default:
            return <SlQuestion />
    }
}

export default Icon