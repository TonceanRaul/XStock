import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import Section from "./Section";
import Heading from "./Heading";

const Roadmap = () => (
    <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="roadmap"
    >
        <Heading className="md:max-w-md lg:max-w-2xl" title="Our Roadmap" />

        <VerticalTimeline>
            {experiences.map((experience, key) => (
                <VerticalTimelineElement
                    contentStyle={{
                        background: "#1d1836",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(35,247,221)",
                    }}
                    date={experience.date}
                    iconStyle={{
                        background: experience.iconBg,
                    }}
                    icon={
                        <div className="flex justify-center items-center w-full h-full">
                            <img
                                src={experience.icon}
                                alt={experience.date}
                                className="w-[60%] h-[60%] object-contain"
                            />
                        </div>
                    }
                >
                    <div>
                        <h3 className="text-white text-[24px] font-bold">
                            {experience.title}
                        </h3>
                        <p
                            className="text-secondary text-[16px] font-semibold"
                            style={{ margin: 0 }}
                        >
                            {experience.name}
                        </p>
                    </div>

                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        {experience.points.map((point, index) => (
                            <li
                                key={index}
                                className="text-white-100 text-[14px] pl-1 tracking-wider"
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </Section>
);

export default Roadmap;
