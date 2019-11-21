import React, {Fragment} from 'react'

export function Lists(props) {
	const Lists = props.lists.map(list => 
				<li style={props.specific_style}>
					<a href={"/detail/"+list.id} style={props.specific_style}>
						<span class="badge" style={props.specific_style}>{list.id}</span> {list.name}
					</a>
					<button class="delete" title="delete hero" style={props.specific_style}>x</button>
				</li>
			);

	return (
		<Fragment>
			<ul class={props.ul_class}>
				{Lists}
			</ul>
		</Fragment>
	)
}