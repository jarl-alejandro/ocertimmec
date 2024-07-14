interface Props {
    register: any;
    errors?: any;
}


export default function PersonalData(props: Props) {
    return (
        <div className="table-responsive">
            <table className="table table-borderless">
                <tbody>
                <tr>
                    <td width="50%" className="table-title">AUTOIDENTIFICACION (Blanco, Mestizo, Indigena, Afrodecendiente)
                    </td>
                    <td width="40%">
                        <select className="form-select" {...props.register('experience3-autoidentificacion')}>
                            <option value="">-</option>
                            <option value="BLANCO">BLANCO</option>
                            <option value="MESTIZO">MESTIZO</option>
                            <option value="INDIGENA">INDIGENA</option>
                            <option value="AFRODECENDIENTE">AFRODECENDIENTE</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}
