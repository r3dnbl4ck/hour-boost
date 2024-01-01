<script>
	// let steamGuard = 'Not Provided';
    import { Icon, Pencil, User } from 'svelte-hero-icons'
	import UsersTable from '../components/UsersTable.svelte';

    export let form

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
                                <form action="#" method="POST">
                                    <input type="hidden" name="username" value={user.username}>
                                    <input type="hidden" name="password" value={user.password}>
                                    <UsersTable />
                                    <button class="outline secondary">Delete</button>
                                </form>
                            </td>
						</tr>
					{/each}
				</tbody>
			</table>
		</article>
	</div>
</main>

{form?.started}