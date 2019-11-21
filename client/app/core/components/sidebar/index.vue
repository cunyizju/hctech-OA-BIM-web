<template lang="pug">
aside.nav(:class="{ mini: minimized }")
	.menu
		.title {{ "General" | i18n }}
		ul
			router-link(tag="li", to="/design")
				a(:title="_('设计服务')")
					span.icon
						i.fa.fa-bank
					span.label {{ "设计服务" | i18n }} 
				
					router-link(tag="li", to="/design/general")
						a(:title="_('基本信息')")
							span.icon
								i.fa.fa-anchor
							span.label {{ "基本信息" | i18n }}
			

					router-link(tag="li", to="/design/frontpage")
						a(:title="_('项目首页')")
							span.icon
								i.fa.fa-bookmark
							span.label {{ "项目首页" | i18n }}

					router-link(tag="li", to="/design/progress")
						a(:title="_('进程概览')")
							span.icon
								i.fa.fa-calendar
							span.label {{ "进程概览" | i18n }}

					router-link(tag="li", to="/design/filesmanager")
						a(:title="_('资料管理')")
							span.icon
								i.fa.fa-archive
							span.label {{ "资料管理" | i18n }}

					router-link(tag="li", to="/design/dwgcompare")
						a(:title="_('图纸对比')")
							span.icon
								i.fa.fa-newspaper-o
							span.label {{ "图纸对比" | i18n }}

			router-link(tag="li", to="/counter")
				a(:title="_('Demo')")
					span.icon
						i.fa.fa-tasks
					span.label {{ "Demo" | i18n }}

			router-link(tag="li", to="/devices")
				a(:title="_('Devices')")
					span.icon
						i.fa.fa-tablet
					span.label {{ "Devices" | i18n }}

			router-link(tag="li", to="/posts")
				a(:title="_('Posts')")
					span.icon
						i.fa.fa-comments
					span.label {{ "Posts" | i18n }}

		.title {{ "Profile" | i18n }}
		ul
			li
				a(href="/logout", :title="_('Logout')")
					span.icon
						i.fa.fa-sign-out
					span.label {{ "Logout" | i18n }}

	.footer
		.copyright &copy; 
		| service@hc-archtech.com
		| 浙ICP备19031611号-1
		| Copyright, 2019
</template>

<script>

	export default {
		props: [
			"minimized"
		]
	};
	
</script>

<style lang="scss">
</style>