import React from "react";

interface Props {
    register: any;
    errors?: any;
}

export default function CurrentEducation(props: Props) {
    return (
        <div className="table-responsive">
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th scope="col">Nivel de educación</th>
                    <th scope="col">Nombre Institución</th>
                    <th scope="col">País</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Título Obtenido</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="table-text">Primaria</td>
                    <td>
                        <input type="text" className="form-control" {...props.register('primaryInstitutionName')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('primaryCountry')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('primaryCity')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('primaryDegree')}/>
                    </td>
                </tr>
                <tr>
                    <td className="table-text">Secundaria</td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('secondaryInstitutionName')}
                        />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('secondaryCountry')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('secondaryCity')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('secondaryDegree')} />
                    </td>
                </tr>
                <tr>
                    <td className="table-text">Técnico, Tecnólogo o artesano</td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('technicalInstitutionName')}
                        />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('technicalCountry')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('technicalCity')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('technicalDegree')} />
                    </td>
                </tr>
                <tr>
                    <td className="table-text">Tercer nivel</td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('tertiaryInstitutionName')}
                        />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('tertiaryCountry')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('tertiaryCity')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('tertiaryDegree')} />
                    </td>
                </tr>
                <tr>
                    <td className="table-text">Cuarto Nivel</td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('quaternaryInstitutionName')}
                        />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('quaternaryCountry')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('quaternaryCity')} />
                    </td>
                    <td>
                        <input type="text" className="form-control" {...props.register('quaternaryDegree')} />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
