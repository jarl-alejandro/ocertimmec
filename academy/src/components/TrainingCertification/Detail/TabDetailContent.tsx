import classNames from "classnames";
import React from "react";

export default function TabDetailContent({ tab, tabSelected, children } : { tab: string, tabSelected: string, children: React.ReactNode }) {
    return (
        <div
            className={classNames("tab-pane fade", {
                "active show": tab === tabSelected
            })}
            id="course-pills-1"
            role="tabpanel"
            aria-labelledby="course-pills-tab-1"
        >
            {children}
        </div>
    )
}
