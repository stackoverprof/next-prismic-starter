import Link from '@components/_shared/Link';
import { SliceType } from '@core/prismic/client';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import useDebug from './../../core/hooks/useDebug';

interface Props {
	slice: SliceType
}

const HeroLanding = ({slice}: Props): JSX.Element => {
	useDebug(slice);
	
	return (
		<section className="flex-cc w-full">
			<div className="container flex-sc col">
				<h1 className="mb-4 mt-48 text-4xl font-bold text-center z-10">{RichText.asText(slice.primary.title)}</h1>
				<div className="css-force-537834 max-w-sm mb-8 text-center z-10">
					{RichText.render(slice.primary.description)}
					<style dangerouslySetInnerHTML={{__html: `
						.css-force-537834 p { 
							text-align: center;
						}
					`}}/>
				</div>
				
				<div className="flex-cc gap-4">
					{slice.items.map((item, i) => (
						<Link href={item.link_path} className={['px-4 py-2 text-white hover:bg-opacity-80', `bg-${item.color}`].join(' ')} key={i}>
							{RichText.asText(item.link_text)}
						</Link>
					))}
				</div>

			</div>
		</section>
	);
};

// css-force will only be needed to style explicit elements like inside RichText.render()

export default HeroLanding;
