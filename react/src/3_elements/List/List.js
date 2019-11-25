import React, {Fragment} from 'react'
import './BadgeList.css'

export function Lists(props) {
	const List = props.list.map(element => 
				<li style={props.specific_style} key={element.id}>
					<a href={"/detail/"+element.id}>
						<span className="badge">{element.id}</span> {element.name}
					</a>
					<button className="delete" title="delete hero" onClick={event => props.handleDeleteHero(event, element.id)}>x</button>
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