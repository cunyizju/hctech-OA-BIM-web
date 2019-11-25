<template lang="pug">
.sidebar.sidebar-hide-to-small.sidebar-shrink.sidebar-gestures
	.nano
		.nano-content
		.logo
			span 恒城科技
		ul
			li.label 菜单
				i.fa.fa-home.fa-fw
				|  首页
				span.sidebar-collapse-icon
			li.label 功能
			li
			a.sidebar-sub-toggle
				i.ti-cloud
				|  设计服务 
				span.sidebar-collapse-icon.ti-angle-down
			li
				i.fa.fa-desktop
				|  BIM总览
				span.sidebar-collapse-icon
			li
			a.sidebar-sub-toggle
				i.fa.fa-cog
				|  系统设置 
				span.sidebar-collapse-icon.ti-angle-down

</template>


<script>
	import {realconsole} from './sidebar.js';
	export default {
		methods: {method1:function(){
			realconsole();
		}}
	};
	
</script>

<style>
	@import "./sidebar.css";
</style>