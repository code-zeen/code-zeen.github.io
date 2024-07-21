import { Stack } from "../styled/Stack.ts";
import Icon from "../common/Icon.tsx";
import happyPeople0 from "../../assets/projects-1-happypeople-0.png"
import happyPeople1 from "../../assets/projects-1-happypeople-1.png"
import mosh0 from "../../assets/projects-2-mosh-0.png"
import mosh1 from "../../assets/projects-2-mosh-1.png"
import recipes0 from "../../assets/projects-3-recipes-0.png"
import recipes1 from "../../assets/projects-3-recipes-1.png"
import { MdArrowRightAlt } from "react-icons/md";

function Projects() {
    const content = [
        {
            type: 'html',
            title: 'Basic',
            date: '2022 . 02',
            location: '그린컴퓨터아트학원',
            summary: 'Float, Position 이용한 정적 레아이웃 -해피피플',
            description: '첫 웹 리뉴얼 프로젝트 주제로 개선이 필요해 보이는 NGO 단체를 선정하였습니다. \n' +
                '빼곡하고 답답한 레이아웃을 여백과 아이콘을 사용하여 좀 더 여유롭고 효과적으로 정보가 눈에 들어올 수 있도록 디자인 하였습니다.',
            thumbnailOne: happyPeople0,
            thumbnailTwo: happyPeople1,
        },
        {
            type: 'html',
            title: 'Basic',
            date: '2022 . 03',
            location: '그린컴퓨터아트학원',
            summary: 'Flexbox를 이용한 반응형 레이아웃 -mosh!',
            description: '적응형 웹사이트인 모쉬를 flexbox와 grid를 이용해 반응형으로 리뉴얼 하였습니다. \n' +
                '타사 보온/보냉 텀블러와 차별화된 성능과 디자인 요소를 메인페이지에 슬라이드로 추가하여 이 브랜드만의 장점을 살렸습니다.',
            thumbnailOne: mosh0,
            thumbnailTwo: mosh1,
        },
        {
            type: 'html',
            title: 'Basic',
            date: '2022 . 04',
            location: '그린컴퓨터아트학원',
            summary: 'JavaScript를 활용한 masonry 레이아웃 -만개의레시피',
            description: '유저 컨텐츠에 의존하는 Pinterest의 masonry 레이아웃을 연구하여 적용해보았습니다. \n' +
                '적응형인 기존 웹사이트 또한 반응형으로 리뉴얼 하였습니다.',
            thumbnailOne: recipes0,
            thumbnailTwo: recipes1,
        },
    ]

    return (
        <Stack>
            {content.map(c => (
                <>
                    <Stack px={20} py={8} spacing={8}>
                        <Stack row spacing={12} alignItems="center">
                            <div className={c.type + ' circle-icon'}>
                                <Icon name={c.type} />
                            </div>
                            <span>{c.title}</span>
                            <span className="tertiary small">{c.date}</span>
                            <span className="tertiary small">{c.location}</span>
                        </Stack>
                        <p className="summary">{c.summary}</p>
                        <p className="secondary">{c.description}</p>
                        <Stack row spacing={12} alignItems="center">
                            <img src={c.thumbnailOne} className="thumbnail" />
                            <MdArrowRightAlt size="2em" />
                            <img src={c.thumbnailTwo} className="thumbnail" />
                        </Stack>
                    </Stack>
                    <hr style={{ width: "100%" }} />
                </>
            ))}
        </Stack>
    )
}

export default Projects