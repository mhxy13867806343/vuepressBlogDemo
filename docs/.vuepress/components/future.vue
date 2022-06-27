<template>
	<div>
		<ul>
			<li v-for="(a,b) in list" :key="b">
				<h4>{{a.name}}</h4>
				<div v-for="(a1,b1) in a.children" :key="b1">
					<h5>{{a1.name}}</h5>
					<img :src="a1.img">
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "future",
	data(){
		return {
			list:[
				{
					name:'视频类',
					children:[
						{
							name:'视频号二维码',
							img:require('./WechatIMG753.jpeg')
						}
					]
				}
			]
		}
	}
}
</script>

<style scoped>

</style>
