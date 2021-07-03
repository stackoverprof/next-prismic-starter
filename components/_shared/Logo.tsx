import React from 'react';

interface Props {
	className?: string;
	width?: number;
}

const Logo = ({ className, width = 162 }: Props): JSX.Element => {
	return (
		<img src="/brand/logo-full.svg" width={width} className={className} alt="Skillset's logo" />
	);
};

export default Logo;
