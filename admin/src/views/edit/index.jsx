import './style.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import AppBase from '../../components/AppBase';
import Form from './Form/Form';

const EditCertificate = () => {
	const { id } = useParams();

	return (
		<AppBase>
			<div className="Inscription">
				<section className="Inscription-contained">
					<Form inscripcionId={id} />
				</section>
			</div>
		</AppBase>
	);
};

export default EditCertificate;
