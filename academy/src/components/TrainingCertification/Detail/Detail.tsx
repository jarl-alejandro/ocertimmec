"use client";

import {useState} from "react";
import classNames from "classnames";

export default function Detail() {
    const [tab, setTab] = useState("main1");

    const onChangeTab = (tab: string) => {
        setTab(tab);
    }

    return (
        <div className="row">
            <div className="col-12">
                {/* Tabs START */}
                <ul
                    className="nav nav-pills nav-pills-bg-soft px-3"
                    id="course-pills-tab"
                    role="tablist"
                >
                    {/* Tab item */}
                    <li className="nav-item me-2 me-sm-4" role="presentation">
                        <button
                            onClick={() => onChangeTab("main1")}
                            className={classNames("nav-link mb-0", {
                                "active": tab === "main1"
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
                            Overview
                        </button>
                    </li>
                    {/* Tab item */}
                    <li className="nav-item me-2 me-sm-4" role="presentation">
                        <button
                            onClick={() => onChangeTab("main2")}
                            className={classNames("nav-link mb-0", {
                                "active": tab === "main2"
                            })}
                            id="course-pills-tab-2"
                            data-bs-toggle="pill"
                            data-bs-target="#course-pills-2"
                            type="button"
                            role="tab"
                            aria-controls="course-pills-2"
                            aria-selected="false"
                            tabIndex={-1}
                        >
                            Reviews
                        </button>
                    </li>
                    {/* Tab item */}
                    <li className="nav-item me-2 me-sm-4" role="presentation">
                        <button
                            onClick={() => onChangeTab("main3")}
                            className={classNames("nav-link mb-0", {
                                "active": tab === "main3"
                            })}
                            id="course-pills-tab-3"
                            data-bs-toggle="pill"
                            data-bs-target="#course-pills-3"
                            type="button"
                            role="tab"
                            aria-controls="course-pills-3"
                            aria-selected="false"
                            tabIndex={-1}
                        >
                            FAQs{" "}
                        </button>
                    </li>
                    {/* Tab item */}
                    <li className="nav-item me-2 me-sm-4" role="presentation">
                        <button
                            onClick={() => onChangeTab("main4")}
                            className={classNames("nav-link mb-0", {
                                "active": tab === "main4"
                            })}
                            id="course-pills-tab-4"
                            data-bs-toggle="pill"
                            data-bs-target="#course-pills-4"
                            type="button"
                            role="tab"
                            aria-controls="course-pills-4"
                            aria-selected="true"
                        >
                            Comment
                        </button>
                    </li>
                </ul>
                <div className="tab-content pt-4 px-3" id="course-pills-tabContent">
                    <div
                        className={classNames("tab-pane fade", {
                            "active show": tab === "main1"
                        })}
                        id="course-pills-1"
                        role="tabpanel"
                        aria-labelledby="course-pills-tab-1"
                    >
                        <h5 className="mb-3">Course Description</h5>

                    </div>

                    <div
                        className={classNames("tab-pane fade", {
                            "active show": tab === "main2"
                        })}
                        id="course-pills-2"
                        role="tabpanel"
                        aria-labelledby="course-pills-tab-2"
                    >
                        <div className="row mb-4">
                            <h5 className="mb-4">Our Student Reviews</h5>
                        </div>
                    </div>

                    <div
                        className={classNames("tab-pane fade", {
                            "active show": tab === "main3"
                        })}
                        id="course-pills-3"
                        role="tabpanel"
                        aria-labelledby="course-pills-tab-3"
                    >
                        <h5 className="mb-3">Frequently Asked Questions</h5>
                    </div>
                    <div
                        className={classNames("tab-pane fade", {
                            "active show": tab === "main4"
                        })}
                        id="course-pills-4"
                        role="tabpanel"
                        aria-labelledby="course-pills-tab-4"
                    >
                        <div className="row mb-4">
                            <div className="col-12">
                                <h5 className="mb-4">Ask Your Question</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
