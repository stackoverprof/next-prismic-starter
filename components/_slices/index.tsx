import { SliceType } from '@core/prismic/client';
import React from 'react';
import HeroLanding from './HeroLanding';

interface Props {
	slice: SliceType
}

const RenderSlice = ({ slice }: Props): JSX.Element => {
	switch (slice.slice_type) {
		case 'hero_landing':
			return <HeroLanding slice={slice} />;
		default:
			return <div>No Component for {slice.slice_type}</div>;
	}
};

export default RenderSlice;
