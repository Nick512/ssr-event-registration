<form>
	<div class="form-group">
		<label for="username">Username</label>
		<input
			type="username"
			class="form-control"
			id="username"
			aria-describedby="Username"
			placeholder="Enter username"
		/>
	</div>
	<div class="form-group">
		<label for="password">Password</label>
		<input type="password" class="form-control" id="password" placeholder="Password" />
	</div>
	<div class="form-group d-flex justify-content-center">
		<button type="submit" class="btn btn-primary w-50">Login</button>
	</div>
</form>

<style>
	form {
		width: 25%;
	}
	.form-group {
		width: 100%;
		padding-top: 20px;
	}
</style>
