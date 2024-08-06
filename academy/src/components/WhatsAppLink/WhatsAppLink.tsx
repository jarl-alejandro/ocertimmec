import React from 'react';

const WhatsAppLink = () => {
    const phoneNumber = '+593997877988';
    const message = `
	Hola, me gustaría obtener más información sobre los procesos de certificación y capacitación de OCCERTIMM.
`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappUrl}  className="WhatsAppLink" target="_blank" rel="noopener noreferrer">
            <SvgWhatsapp />
        </a>
    );
};

export default WhatsAppLink;


const SvgWhatsapp = () => {
    return (
        <svg
            className="prefix__muow-icon"
            width={30}
            height={30}
            fill="none"
        >
            <path
                d="M13.991.428C6.194.8.041 7.293.065 15.1a14.578 14.578 0 001.593 6.605L.104 29.25a.57.57 0 00.69.67l7.394-1.752a14.57 14.57 0 006.292 1.527c7.97.122 14.614-6.206 14.863-14.173C29.609 6.982 22.56.02 13.99.428zm8.824 22.733a11.39 11.39 0 01-8.108 3.358 11.35 11.35 0 01-5.103-1.195l-1.03-.513-4.533 1.074.954-4.633-.507-.993a11.337 11.337 0 01-1.246-5.205A11.39 11.39 0 016.6 6.947a11.486 11.486 0 018.108-3.358 11.39 11.39 0 018.107 3.358 11.39 11.39 0 013.358 8.107c0 3.035-1.212 5.961-3.358 8.107z"
                fill="#fff"
            />
            <path
                d="M21.814 18.23l-2.837-.815a1.057 1.057 0 00-1.046.276l-.693.706a1.033 1.033 0 01-1.124.238c-1.341-.544-4.164-3.053-4.885-4.308a1.033 1.033 0 01.082-1.145l.606-.784c.237-.307.287-.719.13-1.074l-1.193-2.699a1.058 1.058 0 00-1.652-.378c-.791.67-1.73 1.687-1.845 2.814-.201 1.988.651 4.493 3.874 7.5 3.723 3.476 6.705 3.935 8.646 3.465 1.101-.267 1.981-1.336 2.537-2.212.378-.597.08-1.39-.6-1.584z"
                fill="#fff"
            />
        </svg>
    )
}

