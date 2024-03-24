"use client";

import React, {useState} from "react";
import classNames from "classnames";
import Tabs from "@/components/TrainingCertification/Detail/Tabs";
import {TypeCourse} from "@/core/domain/TypeCourse";
import Include from "@/components/TrainingCertification/Detail/Include";
import Content from "@/components/TrainingCertification/Detail/Content";
import Description from "@/components/TrainingCertification/Detail/Description";
import CompetenceUnits from "@/components/TrainingCertification/Detail/CompetenceUnits";
import Skills from "@/components/TrainingCertification/Detail/Skills";
import Requirements from "@/components/TrainingCertification/Detail/Requirements";
import Note from "@/components/TrainingCertification/Detail/Note";
import TabDetailContent from "@/components/TrainingCertification/Detail/TabDetailContent";
import {TrainingCertificate} from "@/core/domain/TrainingCertification";

export interface Tab {
    label: string;
    value: string;
}
export interface TabDetail {
    value: string;
    component: React.ReactNode
}

const tabsCertificate: Tab[] = [
    { label: 'Requisitos', value: 'requirements' },
    { label: 'Competencias', value: 'skills' },
    { label: 'Unidades de competencia', value: 'competence-units' },
    { label: 'Descripción', value: 'description' },
    { label: 'Nota', value: 'note' },
];
const tabsTraining: Tab[] = [
    { label: 'Contenido', value: 'content' },
    { label: 'Incluye', value: 'include' },
];


export default function Detail({ type, courseDetail } : { type: TypeCourse, courseDetail: TrainingCertificate }) {

    const tabs = type === TypeCourse.Certificate ? tabsCertificate : tabsTraining;
    const [tab, setTab] = useState(tabs[0].value);
    const tabDetails: TabDetail[] = type === TypeCourse.Certificate ? [
        { value: 'requirements', component: <Requirements requirements={courseDetail.requirements} /> },
        { value: 'skills', component: <Skills competition={courseDetail.competition} /> },
        { value: 'competence-units', component: <CompetenceUnits competitionUnits={courseDetail.competitionUnits} /> },
        { value: 'description', component: <Description description={courseDetail.description} /> },
        { value: 'note', component: <Note note={courseDetail.note} /> },
    ] : [
        { value: 'content', component: <Content content={courseDetail.content} /> },
        { value: 'include', component: <Include materials={courseDetail.materials} /> },
    ]

    const onChangeTab = (tab: string) => {
        setTab(tab);
    }

    return (
        <div className="row">
            <div className="col-12">
                <Tabs
                    tabs={tabs}
                    onChangeTab={onChangeTab}
                    tab={tab}
                />

                <article className="tab-content pt-4 px-3" id="course-pills-tabContent">
                    {tabDetails.map(item => (
                        <TabDetailContent tabSelected={tab} tab={item.value} key={item.value}>
                            <section className="mt-0 pt-0">
                                {item.component}
                            </section>
                        </TabDetailContent>
                    ))}
                </article>
            </div>
        </div>
    )
}
