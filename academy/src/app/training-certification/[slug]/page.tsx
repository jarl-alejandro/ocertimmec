
type PageProps = {
    params: {
        slug: string
    }
}

export default function TrainingCertificationDetail(props: PageProps) {
    return (
        <h1>Detalle: { props.params.slug }</h1>
    )
}
