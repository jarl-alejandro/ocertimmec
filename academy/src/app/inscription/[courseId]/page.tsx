import React from "react";
import InscriptionForm from "@/components/Inscription/InscriptionForm";

interface RouterParams {
    courseId: string,
}

type PageProps = {
    params: RouterParams
}

export default function Inscription(props: PageProps) {
    return (
        <div className="container position-relative mt-4">
            <InscriptionForm />
        </div>
    )
}
