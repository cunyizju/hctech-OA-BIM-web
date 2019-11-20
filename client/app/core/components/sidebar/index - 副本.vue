<template lang="pug">
aside.nav(:class="{ mini: minimized }")
	//- .sidebar.sidebar-hide-to-small.sidebar-shrink.sidebar-gestures
		.nano
			.nano-content
				.logo
					a(href='index.html')
						// <img src="assets/images/logo.png" alt="" />
						span 恒城科技
				ul
					li.label 菜单
					li
						a(href='index.html')
							i.fa.fa-home.fa-fw
							|  首页
					li.label 功能
					li
						a(href='forge-table.html')
							i.fa.fa-desktop
							|  BIM总览
							span.sidebar-collapse-icon
					li
						a.sidebar-sub-toggle
							i.ti-bar-chart-alt
							|  施工数据 
							span.sidebar-collapse-icon.ti-angle-down
						ul
							li
								a(href='cost-control.html') 成本管控
							li
								a(href='material-tracking.html') 物料跟踪
							li
								a(href='construction-progress.html') 施工进度
							li
								a(href='quality-control.html') 质量控制
					li
						a.sidebar-sub-toggle
							i.fa.fa-file
							|  项目资料 
							span.sidebar-collapse-icon.ti-angle-down
						ul
							li
								a(href='design-files.html') 设计资料
							li
								a(href='construction-files.html') 施工资料
					li
						a.sidebar-sub-toggle
							i.fa.fa-crosshairs
							|  数字运维 
							span.sidebar-collapse-icon.ti-angle-down
						ul
							li
								a(href='digital-screen.html', target='_blank') 数字大屏
							li
								a(href='video-monitor.html', target='_blank') 视频监控
					li
						a.sidebar-sub-toggle
							i.fa.fa-cog
							|  系统设置 
							span.sidebar-collapse-icon.ti-angle-down
						ul
							li
								a(href='stuff-list.html') 组织结构
							li
								a(href='weekly-report.html') 电子周报
							li
								a(href='index.html') 退出
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