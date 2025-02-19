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
    SiHtml5, SiJavascript, SiAxios, SiCreatereactapp,
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
import { HiOutlineChartPie } from 'react-icons/hi'

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

        case 'apexcharts':
            return <HiOutlineChartPie />
        case 'axios':
            return <SiAxios />
        case 'create-react-app':
            return <SiCreatereactapp />
        case 'figma':
            return <SiFigma />
        case 'git':
            return <SiGit />
        case 'mui':
            return <SiMui />
        case 'react':
            return <SiReact />
        case 'redux toolkit':
        case 'rtk query':
            return <SiRedux />
        case 'typescript':
            return <SiTypescript />
        case 'vite':
            return <SiVite />
        case 'webstorm':
            return <SiWebstorm />

        case 'publishing':
            return <SiHtml5 />
        case 'javascript':
            return <SiJavascript />
        case 'career':
            return <MdWork />

        default:
            return <SlQuestion />
    }
}

export default Icon