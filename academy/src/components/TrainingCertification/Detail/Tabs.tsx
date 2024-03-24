import classNames from "classnames";
import {Tab} from "@/components/TrainingCertification/Detail/Detail";

interface TabsProps {
    onChangeTab: (tab: string) => void,
    tab: string,
    tabs: Tab[]
}

export default function Tabs ({ onChangeTab, tab, tabs } : TabsProps) {
    return (
        <ul
            className="nav nav-pills nav-pills-bg-soft px-3"
            id="course-pills-tab"
            role="tablist"
        >
            {tabs.map(item => (
                <li className="nav-item me-2 me-sm-4" key={item.value} role="presentation">
                    <button
                        onClick={() => onChangeTab(item.value)}
                        className={classNames("nav-link mb-0", {
                            "active": tab === item.value
                        })}
                        id="course-pills-tab-1"
                        data-bs-toggle="pill"
                        data-bs-target="#course-pills-1"
                        type="button"
                        role="tab"
                        aria-controls="course-pills-1"
                        aria-selected="false"
                        tabIndex={-1}
                    >
                        {item.label}
                    </button>
                </li>
            ))}
        </ul>

    )
}
