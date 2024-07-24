interface Props {
    register: any;
    errors?: any;
}


export default function Training(props: Props) {
    return (
        <div className="table-responsive">
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th>Nombre del curso</th>
                    <th>Nombre de la institución que impartió el curso</th>
                    <th>Fechas del curso</th>
                    <th>Horas del Curso</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course1NameCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course1InstitutionName')}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            className="form-control"
                            {...props.register('course1DateCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="type"
                            className="form-control"
                            {...props.register('course1HourCourse')}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course2NameCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course2InstitutionName')}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            className="form-control"
                            {...props.register('course2DateCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course2HourCourse')}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course3NameCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course3InstitutionName')}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            className="form-control"
                            {...props.register('course3DateCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course3HourCourse')}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}
