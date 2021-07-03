import PrismicPage from './[...slugs]';
import { queryByRoute, queryLayout } from '@core/prismic/client';

export const getStaticProps = async (): Promise<any> => {
	const content = await queryByRoute('/');
	const layoutContent = await queryLayout('main-layout');
    
	return {
		props: { content, layoutContent }
	};
};

export default PrismicPage;
