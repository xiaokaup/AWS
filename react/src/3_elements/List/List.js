import React, {Fragment} from 'react'
import './BadgeList.css'

export function Lists(props) {
	const List = props.list.map(element => 
				<li style={props.specific_style} key={element.id}>
					<a href={"/detail/"+element.id} style={props.specific_style}>
						<span className="badge" style={props.specific_style}>{element.id}</span> {element.name}
					</a>
					<button className="delete" title="delete hero" style={props.specific_style} onClick={event => props.handleDeleteHero(event, element.id)}>x</button>
				</li>
			);

	return (
		<Fragment>
			<ul className={props.ul_class}>
				{List}
			</ul>
		</Fragment>
	)
}