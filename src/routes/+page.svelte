<script>
	// let steamGuard = 'Not Provided';
    import { Icon, Pencil } from 'svelte-hero-icons'

	let users = [
		{
			username: 'smoqi',
			password: '*******',
			// steamGuard: steamGuard
		},
		{
			username: 'madcentt',
			password: '*******',
			// steamGuard: steamGuard
		},
		{
			username: 'boosterUnit',
			password: '*******',
			// steamGuard: steamGuard
		}
	];
</script>

<main>
	<div class="container">
		<hr />
		<h3>unitks booster /</h3>

		<article>
			<h5>My Accounts</h5>
			<table>
				<thead>
					<tr>
						<th scope="col">Username</th>
						<th scope="col">Password</th>
						<th scope="col">Steam Guard</th>
						<th scope="col">#</th>
					</tr>
				</thead>
				<tbody>
					{#each users as user}
						<tr>
							<th scope="row">{user.username}</th>
							<td>{user.password} <Icon src="{Pencil}" size="20" /></td>
							<td><button class="secondary">Enter Steam Guard</button></td>
							<td>
                                <button class="primary">Start</button>
								<button class="outline secondary">Delete</button>
                            </td>
						</tr>
					{/each}
				</tbody>
			</table>
		</article>
	</div>
</main>
