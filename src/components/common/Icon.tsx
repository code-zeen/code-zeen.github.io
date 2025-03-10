import {
    SiAxios, SiClaude,
    SiFigma,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMui,
    SiNextdotjs,
    SiReact,
    SiRedux,
    SiStyledcomponents,
    SiSupabase, SiTailwindcss,
    SiTypescript,
    SiVite,
    SiWebstorm,
} from 'react-icons/si'
import {SlQuestion} from 'react-icons/sl'
import {
    MdLocationSearching,
    MdOutlineLocationOn,
    MdOutlineMail,
    MdOutlineSmartToy,
    MdPerson2,
    MdSmartphone,
    MdWork
} from 'react-icons/md'
import {HiOutlineChartPie} from 'react-icons/hi'
import {TbCircleLetterZFilled} from "react-icons/tb";

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
        case 'claudeai':
            return <SiClaude />
        case 'figma':
            return <SiFigma />
        case 'git':
            return <SiGit />
        case 'mui':
            return <SiMui />
        case 'next':
            return <SiNextdotjs />
        case 'react':
            return <SiReact />
        case 'redux toolkit':
        case 'rtk query':
            return <SiRedux />
        case 'styled-components':
            return <SiStyledcomponents />
        case 'supabase':
            return <SiSupabase />
        case 'tailwindcss':
            return <SiTailwindcss />
        case 'typescript':
            return <SiTypescript />
        case 'vite':
            return <SiVite />
        case 'webstorm':
            return <SiWebstorm />
        case 'zustand':
            return <TbCircleLetterZFilled />

        case 'publishing':
            return <SiHtml5 />
        case 'javascript':
            return <SiJavascript />
        case 'career':
            return <MdWork />
        case 'toyprojects':
            return <MdOutlineSmartToy />

        default:
            return <SlQuestion />
    }
}

export default Icon