import React from "react";

function ButtonLink(propriedades) {
	return (
		<a className={propriedades.className} href={propriedades.href}>{propriedades.children}</a>
	);
}

export default ButtonLink;
