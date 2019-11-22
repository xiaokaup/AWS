import React, {Fragment} from 'react'

export function Cards(props) {
	const cards = props.cards.map(card => 
				<a className="col-1-4"
					href={"/detail/"+card.id}
					style={props.specific_style}
					key={card.id}
				>
					<div className="module hero">
						<h4>{card.name}</h4>
					</div>
				</a>
			);

	return (
		<Fragment>
			{cards}
		</Fragment>
	)
}