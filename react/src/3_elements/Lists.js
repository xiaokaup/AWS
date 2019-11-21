import React, {Fragment} from 'react'

export function Lists(props) {
	const Lists = props.lists.map(list => 
				<li style={props.style}>
					<a href={"/detail/"+list.id} style={props.style}>
						<span class="badge" style={props.style}>{list.id}</span> {list.name}
					</a>
					<button class="delete" title="delete hero" style={props.style}>x</button>
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