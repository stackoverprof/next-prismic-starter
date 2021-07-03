import React from 'react';
import { useRouter } from 'next/router';
import { ContentType, LayoutContentType, queryByRoute, queryLayout } from '@core/prismic/client';
import MainLayout from '@components/_layouts/MainLayout';
import RenderSlice from '@components/_slices';
import client from '@core/prismic/client';
import Prismic from '@prismicio/client';
import useDebug from './../core/hooks/useDebug';

interface Props {
	content: ContentType
	layoutContent: LayoutContentType
}

const PrismicPage = ({ content, layoutContent }: Props): JSX.Element => {
	const router = useRouter();

	useDebug(content);
	useDebug(layoutContent);
	
	return (
		<MainLayout content={layoutContent} title={content.html_title} key={router.asPath}>
			{content.body.map((slice, i) => (
				<RenderSlice slice={slice} key={i}/>
			))}
		</MainLayout>
	);
};


export const getStaticProps = async (context: { params: { slugs: string[] } }): Promise<any> => {
	const { slugs } = context.params;
	const route = '/' + slugs.join('/');
    
	const content = await queryByRoute(route);
	const layoutContent = await queryLayout('main-layout');
    
	return {
		props: { content, layoutContent },
	};
};


export const getStaticPaths = async (): Promise<any> => {
	const docs = await client
		.query(Prismic.Predicates.at('document.type', 'pages'))
		.then(res => res.results);
        
	const paths = docs.filter(doc => doc.data.route !== '/').map((doc) => {
		const slugs = doc.data.route.split('/').filter(item => item);
		return { params: { slugs } };
	});    
    
	return {
		paths: paths,
		fallback: false
	};
};

export default PrismicPage;
