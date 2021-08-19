import React from 'react';
import useClearance from '@core/hooks/useClearance';
import { useLayout } from '@core/contexts';
import AlertHandler from '@components/_shared/AlertHandler';
import SEOTags from '@components/_shared/SEOTags';
import { LayoutContentType } from '@core/prismic/client';
import RenderSlice from '@components/_slices/_renderslice';

interface Props {
	children: React.ReactNode
	content: LayoutContentType
	title?: string
	className?: string
	style?: React.CSSProperties
}

const DynamicLayout = ({children, content, title, className, style}: Props): JSX.Element => {
	const { alert_value, resetAlert } = useLayout();
	const [clearance, upperRef, lowerRef] = useClearance();

	const childrenPosition = content.body.findIndex(slice => slice.slice_type === 'children');

	return (
		<>
			<SEOTags title={title} />

			<header ref={upperRef}>
				{content.body.slice(0, childrenPosition).map((slice, i) => (
					<RenderSlice slice={slice} key={i}/>
				))}
			</header>

			<main style={{minHeight: clearance, ...style}} className={className}>
				{children}
			</main>

			<footer ref={lowerRef}>
				{content.body.slice(childrenPosition + 1).map((slice, i) => (
					<RenderSlice slice={slice} key={i}/>
				))}
			</footer>

			{alert_value && <AlertHandler type={alert_value.type} message={alert_value.message} handleClose={resetAlert} key={Math.random()}/>}
		</>
	);
};

export default DynamicLayout;
