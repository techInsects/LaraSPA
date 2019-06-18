<template>
	<div>
		<div>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/task">Task</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {};
</script>