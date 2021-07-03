import React from 'react';
import Head from 'next/head';
import AlertHandler from '@components/_shared/AlertHandler';
import { useLayout } from '@core/contexts/index';
import RenderSlice from '@components/_slices';

interface Props {
	children?: React.ReactNode
	className?: string
	title?: string
	content
}

const MainLayout = ({children, content, className, title}: Props): JSX.Element => {
	const { mainAlert, resetMainAlert } = useLayout();

	return (
		<>
			<Head>
				{title && <title>{title} — Hybrid</title>}
			</Head>
			{mainAlert && <AlertHandler type={mainAlert.type} message={mainAlert.message} handleClose={resetMainAlert} key={mainAlert.message}/>}
			<main style={{minHeight: 'calc(100vh - 152px)'}} className={`w-full flex-sc col ${className}`}>
				{content.body?.slice(0, content.children_position ? content.children_position - 1 : 0).map((slice, i) => (
					<RenderSlice slice={slice} key={i}/>
				))}

				{children}

				{content.body?.slice(content.children_position ? content.children_position - 1 : 0).map((slice, i) => (
					<RenderSlice slice={slice} key={i}/>
				))}
			</main>
		</>
	);
};

export default MainLayout;
