<template>
	<div id='app'> 
		<div>
			<router-view></router-view>
		</div>
		<div>
			<Main></Main>
		</div>
	</div>
</template>

<script>
	import Main from '@/views/main/index.vue';
	export default{
		components:{
			Main
		}
	}
</script>

<style>
	@import url("common/style.css");
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	}
	#logo{
		width:500px;
	    height:600px;
		position: fixed;
		top:0;bottom:0;right:0;left:0;
		margin:auto;
	}
</style>
