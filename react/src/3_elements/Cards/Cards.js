import React, {Fragment} from 'react'
import './HorizontalCards.css'

export function Cards(props) {
	const cards = props.cards.map(card => 
				<a className="col-1-4"
					href={"/detail/"+card.id}
					style={props.specific_style}
					key={card.id}
				>
					<div className="module">
						<h4>{card.name}</h4>
					</div>
				</a>
			);

	return (
		<div className="horizontalCards">
			<div className={"grid grid-pad"}>
				{cards}
			</div>
		</div>
	)
}