import {
    SiMui,
    SiReact,
    SiRedux,
    SiTypescript,
    SiVite,
    SiWebstorm,
    SiGit,
    SiGithub,
    SiFigma,
    SiHtml5, SiJavascript
} from 'react-icons/si'
import { SlQuestion } from 'react-icons/sl'
import {
    MdLocationSearching,
    MdOutlineLocationOn,
    MdOutlineMail,
    MdPerson2,
    MdSmartphone,
    MdWork
} from 'react-icons/md'

function Icon({ name }: { name: string }) {
    const disabled = '#b4b4b4'
    switch (name.toLowerCase()) {
        case 'email':
            return <MdOutlineMail color={disabled} />
        case 'location':
            return <MdOutlineLocationOn color={disabled} />
        case 'person':
            return <MdPerson2 color={disabled} />
        case 'personality':
            return <MdLocationSearching color={disabled} />
        case 'phone':
            return <MdSmartphone color={disabled} />
        case 'github':
            return <SiGithub />

        case 'figma':
            return <SiFigma />
        case 'git':
            return <SiGit />
        case 'mui':
            return <SiMui />
        case 'react':
            return <SiReact />
        case 'redux toolkit':
            return <SiRedux />
        case 'typescript':
            return <SiTypescript />
        case 'vite':
            return <SiVite />
        case 'webstorm':
            return <SiWebstorm />

        case 'publishing':
            return <SiHtml5 />
        case 'javaScript':
            return <SiJavascript />
        case 'career':
            return <MdWork />

        default:
            return <SlQuestion />
    }
}

export default Icon