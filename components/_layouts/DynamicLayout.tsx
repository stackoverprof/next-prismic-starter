import React from 'react';
import Head from 'next/head';
import AlertHandler from '@components/_shared/AlertHandler';
import { useLayout } from '@core/contexts/index';
import RenderSlice from '@components/_slices/_renderslice';
import useClearance from '@core/hooks/useClearance';
import { LayoutContentType } from '@core/prismic/client';

interface Props {
	children: React.ReactNode
	content: LayoutContentType
	title?: string
	className?: string
}

const DynamicLayout = ({children, content, title, className}: Props): JSX.Element => {
	const { mainAlert, resetMainAlert } = useLayout();
	const [clearance, upperRef, lowerRef] = useClearance();

	const childrenPosition = content.body.findIndex(slice => slice.slice_type === 'children');

	return (
		<>
			<Head>
				{title && <title>{title} — Hybrid</title>}
			</Head>

			<header ref={upperRef}>
				{content.body.slice(0, childrenPosition).map((slice, i) => (
					<RenderSlice slice={slice} key={i}/>
				))}
			</header>

			<main style={{minHeight: clearance}} className={className}>
				{children}
			</main>

			<footer ref={lowerRef}>
				{content.body.slice(childrenPosition + 1).map((slice, i) => (
					<RenderSlice slice={slice} key={i}/>
				))}
			</footer>

			{mainAlert && <AlertHandler type={mainAlert.type} message={mainAlert.message} handleClose={resetMainAlert} key={Math.random()}/>}
		</>
	);
};

export default DynamicLayout;
