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



export default function Detail({ type } : { type: TypeCourse }) {
    const tabs = type === TypeCourse.Certificate ? tabsCertificate : tabsTraining;
    const [tab, setTab] = useState(tabs[0].value);
    const tabDetails: TabDetail[] = type === TypeCourse.Certificate ? [
        { value: 'requirements', component: <Requirements /> },
        { value: 'skills', component: <Skills /> },
        { value: 'competence-units', component: <CompetenceUnits /> },
        { value: 'description', component: <Description /> },
        { value: 'note', component: <Note /> },
    ] : [
        { value: 'content', component: <Content /> },
        { value: 'include', component: <Include /> },
    ]

    const onChangeTab = (tab: string) => {
        setTab(tab);
    }

    return (
        <div className="row">
            <div className="col-12">
                {/* Tabs START */}
                <Tabs
                    tabs={tabs}
                    onChangeTab={onChangeTab}
                    tab={tab}
                />

                <article className="tab-content pt-4 px-3" id="course-pills-tabContent">
                    {tabDetails.map(item => (
                        <TabDetailContent tabSelected={tab} tab={item.value} key={item.value}>
                            { item.component }
                        </TabDetailContent>
                    ))}
                </article>
            </div>
        </div>
    )
}
