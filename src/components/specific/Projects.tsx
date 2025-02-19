import {Stack} from "../styled/Stack.ts";
import Icon from "../common/Icon.tsx";

import {MdArrowRightAlt} from "react-icons/md";
import {useState} from "react";
import ImageSlide from "../styled/ImageSlide.tsx";
import Chip from '../styled/Chip.tsx'
import {projects} from "../../content/projects.ts";
import {TabEnum} from "../../types/enums.ts";

function Projects() {
    const [ currentTab, setCurrentTab ] = useState<keyof typeof TabEnum>(TabEnum.Career)
    const buttons = (Object.keys(TabEnum) as Array<keyof typeof TabEnum>).map(tab => tab)

    const handleClick = (params: keyof typeof TabEnum) => {
        setCurrentTab(params)
    }

    return (
        <Stack>
            <Stack row alignItems="center">
                {buttons.map(b => (
                    <button onClick={() => handleClick(b)} className={b === currentTab ? b : undefined}>{b}</button>
                ))}
            </Stack>

            {projects.map(p => p.type === currentTab && (
                <>
                    <Stack px={20} py={8} spacing={8}>
                        <Stack>
                            <Stack row spacing={12} alignItems="center">
                                <div className={p.type + ' circle-icon'}>
                                    <Icon name={p.type} />
                                </div>
                                <span>{p.type}</span>
                                <span className="tertiary small">{p.date}</span>
                            </Stack>
                            <span className="tertiary small">{p.location}</span>
                        </Stack>

                        <Stack row alignItems="center" spacing={12}>
                            <p className="title">{p.title}</p>
                            <span className="contribution">기여도 {p.contribution}%</span>
                        </Stack>
                        <Stack row>
                            {p.stacks && p.stacks.map(stack => (
                                <Chip key={stack} text={stack} startIcon={<Icon name={stack} />}/>
                            ))}
                        </Stack>
                        <Stack py={8}>
                        <p className="secondary" dangerouslySetInnerHTML={{ __html: p.description}} />
                        </Stack>
                        <Stack row spacing={12} alignItems="center">
                            <img src={p.thumbnailOne} className="thumbnail" />
                            {p.thumbnailTwo && (
                                <>
                                    <MdArrowRightAlt size="2em" />
                                    <img src={p.thumbnailTwo} className="thumbnail" />
                                </>
                            )}
                        </Stack>
                        <Stack row spacing={12}>
                            {p.urlEn && <a href={p.urlEn} target="_blank">영어 버전</a>}
                            {p.urlKr && <a href={p.urlKr} target="_blank">한국어 버전</a>}
                        </Stack>
                        {p.imageSlide && <ImageSlide imageSlide={p.imageSlide} />}
                    </Stack>
                    <hr style={{ width: "100%" }} />
                </>
            ))}

        </Stack>
    )
}

export default Projects