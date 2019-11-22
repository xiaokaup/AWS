import React, {Fragment} from 'react'

export function Lists(props) {
	const Lists = props.lists.map(list => 
				<li style={props.specific_style} key={list.id}>
					<a href={"/detail/"+list.id} style={props.specific_style}>
						<span className="badge" style={props.specific_style}>{list.id}</span> {list.name}
					</a>
					<button className="delete" title="delete hero" style={props.specific_style} onClick={event => props.handleDeleteHero(event, list.id)}>x</button>
				</li>
			);

	return (
		<Fragment>
			<ul className={props.ul_class}>
				{Lists}
			</ul>
		</Fragment>
	)
}