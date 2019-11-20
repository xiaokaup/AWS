import React, {Fragment} from 'react'

export function Cards(props) {
	const cards = props.cards.map(card => 
				<a class="col-1-4"
					href={"/detail/"+card.id}>
					<div class="module hero">
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