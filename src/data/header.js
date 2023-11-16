import { DiLinux } from 'react-icons/di'
import { DiMozilla } from 'react-icons/di'
import { DiProlog } from "react-icons/di";
import { AiOutlineRightCircle } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiNaver } from "react-icons/si";

export const menuText = [
    {
        title: "애니메이션 유튜버",
        icon: <DiLinux />,
        src: "/"
    },
    {
        title: "오늘의 추천 애니",
        icon: <DiMozilla />,
        src: "/today"
    },
    {
        title: "리뷰 유튜버 추천",
        icon: <DiProlog />,
        src: "/youtuber"
    }
];

export const keywordText = [
    {
        title: "아카캉",
        icon: <AiOutlineRightCircle />,
        src: "/search/아카캉",
    },
    {
        title: "애니집합소",
        icon: <AiOutlineRightCircle />,
        src: "/search/애니집합소",
    },
    {
        title: "애니 다락방",
        icon: <AiOutlineRightCircle />,
        src: "/search/애니 다락방",
    },
    {
        title: "미애니마니아",
        icon: <AiOutlineRightCircle />,
        src: "/search/미애니마니아",
    },
    {
        title: "료핸 다이어리",
        icon: <AiOutlineRightCircle />,
        src: "/search/료핸 다이어리",
    },
    {
        title: "이리와뷰",
        icon: <AiOutlineRightCircle />,
        src: "/search/이리와뷰",
    },
    {
        title: "모두의 명작",
        icon: <AiOutlineRightCircle />,
        src: "/search/모두의 명작",
    },
    {
        title: "작은방 덕후",
        icon: <AiOutlineRightCircle />,
        src: "/search/작은방 덕후",
    },
    {
        title: "유니애니",
        icon: <AiOutlineRightCircle />,
        src: "/search/유니애니",
    },
    {
        title: "덕양소",
        icon: <AiOutlineRightCircle />,
        src: "/search/덕양소",
    }
];

export const snsText = [
    {
        tilte: "github",
        src: "https://github.com/L-jy16/react-youtube",
        icon: <SiGithub />
    },
    {
        tilte: "Instagram",
        src: "https://www.instagram.com/jiyoung1159",
        icon: <SiInstagram />
    },
    {
        tilte: "Naver",
        src: "https://blog.naver.com/dlwldud0106",
        icon: <SiNaver />
    },
];