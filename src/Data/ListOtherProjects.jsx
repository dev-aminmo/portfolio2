import { FaAppStore } from "react-icons/fa";
import { PiGooglePlayLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const ListOtherProjects = [
    {
        id: "04",
        title: "Master thesis",
        subDesc: "A system that aim to evacuate people during natural disasters in the most effective way by using a multi-agent system.",
        imgUrl: '',
        projectUrl: "",
        tags: {
            tags1: "Java",
            tags2: "JADE",
            tags3: "JavaFx",
            tags4: "Multi-agent system"
        },
        bnts: {
            bntWeb: {
                link:'https://drive.google.com/file/d/1OdijHG5akxdGJ8x_QycCm5Efa5tu6lK5/view?usp=sharing',
                icon: <CgWebsite/>
            },
        },
        desc: {
            line1: "-Implementing and testing the max-sum algorithm using Java, JavaFx, Jade and OpenStreetMap",
            line2: "-The max-sum algorithm to determine the optimal decisions with minimal number of messages passed between the agents.",
  
        },

    },
]