<template lang="pug">
aside.nav(:class="{ mini: minimized }")
	.sidebar.sidebar-hide-to-small.sidebar-shrink.sidebar-gestures
	.nano
		.nano-content
		ul
			li.label 菜单
			li
			a(href='index.html')
				i.fa.fa-home.fa-fw
				|  首页
				span.sidebar-collapse-icon
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
				a(href='construction-progress.html') 施工进度
				li
				a(href='material-tracking.html') 物料追踪
				li
				a(href='quality-safety.html') 质量安全
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