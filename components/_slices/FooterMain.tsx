import React from 'react';
import { SliceType } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import Link from '@components/_shared/Link';
import { RichText } from 'prismic-reactjs';

interface Props {
	slice: SliceType
}

const FooterMain = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section className="flex-cc w-full">
			<div className="fixed bottom-0 w-full h-1/4 bg-cover flex-cc" style={{backgroundImage: 'url(https://svgshare.com/i/_H4.svg)', paddingBottom: 'env(safe-area-inset-bottom)'}}>
				<p className="flex-cc gap-1 text-lg">
					{RichText.asText(slice.primary.credits)}
					<Link href={slice.primary.link_path} target="_blank" className="font-bold underline">
						{RichText.asText(slice.primary.link_text)}
					</Link>
				</p>
			</div>
		</section>
	);
};

export default FooterMain;
