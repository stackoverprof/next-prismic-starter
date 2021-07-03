/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Prismic from '@prismicio/client';

const apiEndpoint = 'https://hybrid-new.prismic.io/api/v2';
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_TOKEN || '';

const client = Prismic.client(apiEndpoint, { accessToken });

export const queryByRoute = (route: string) => {
	return client.query(Prismic.Predicates.at('my.pages.route', route))
		.then(res => res.results[0].data)
		.catch(() => null);
};

export const queryLayout = async (layout: string) => {
	return client.query(Prismic.Predicates.at('my.layouts.uid', layout))
		.then(res => res.results[0].data)
		.catch(() => null);
};

export default client;


export interface SliceType {
	items: any[]
	primary: any
	slice_label?: any
	slice_type: string
}

export interface ContentType {
	html_title: string
	route: string
	body: SliceType[]
}

export interface LayoutContentType {
	main_links: { text: any, route: string }[]
	cta_text: any
	cta_route: string
	body: SliceType[]
}