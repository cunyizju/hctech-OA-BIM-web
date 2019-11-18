<template lang="pug">
	.container
		.guide
			section
				h2
					.content.flex.align-center.justify-space-around.buttons
						span.number 1.
						span.text 项目概况
						button.button(style='align:right')
								i.fa.fa-edit

				.form-group
					.content.flex.align-center.justify-space-around.buttons
						label(for='text5') 项目名称
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 建筑面积
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 耐火等级
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
				.form-group
					.content.flex.align-center.justify-space-around.buttons
						label(for='text5') 建设单位
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 占地面积
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 人防等级
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
				.form-group
					.content.flex.align-center.justify-space-around.buttons
						label(for='text5') 设计部门
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 建筑高度
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 防水等级
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
			section
				h2
					span.number 2.
					span.text 结构专业概况
				.form-group
					.content.flex.align-center.justify-space-around.buttons
						label(for='text5') 结构形式
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 抗震等级
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 设防烈度
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
				.form-group
					.content.flex.align-center.justify-space-around.buttons
						label(for='text5') 基础形式
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 有关超限
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 场地类别
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
				.form-group(style='margin-left: 0.7%;')
					.content.flex.align-center.center-space-around.buttons
						label(for='text5') 抗渗等级
						textarea.form-control#text5(style='width: 27%; margin-left: 1.4%;', type='text', placeholder='', rows=1)
			section
				h2
					span.number 3.
					span.text 电气专业概况
				.form-group
					.content.flex.align-center.justify-space-around.buttons
						label(for='text5') 负荷等级
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 供电电源
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 防雷级别
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
				.form-group
					.content.flex.align-center.justify-space-around.buttons
						label(for='text5') 照度标准
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 接地形式
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 配电方式
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
				.form-group(style='margin-left: 0.7%;')
					.content.flex.align-center.center-space-around.buttons
						label(for='text5') 弱电系统
						textarea.form-control#text5(style='width: 27.5%; margin-left: 1.0% ;margin-right: 1.0%;', type='text', placeholder='', rows=1)
						label(for='text5') 系统指标
						textarea.form-control#text5(style='width: 27.5%; margin-left: 1.5%;', type='text', placeholder='', rows=1)
			section
				h2
					span.number 4.
					span.text 暖通专业概况
				.form-group
					.content.flex.align-center.justify-space-around.buttons
						label(for='text5') 供冷冷源
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 供热热源
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 空调面积
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
				.form-group(style='margin-left: 0.7%;')
					.content.flex.align-center.center-space-around.buttons
						label(for='text5') 制冷负荷
						textarea.form-control#text5(style='width: 27.5%; margin-left: 1.0% ;margin-right: 1.0%;', type='text', placeholder='', rows=1)
						label(for='text5') 通风系统
						textarea.form-control#text5(style='width: 27.5%; margin-left: 1.5%;', type='text', placeholder='', rows=1)
			section
				h2
					span.number 5.
					span.text 给排水专业概况
				.form-group
					.content.flex.align-center.justify-space-around.buttons
						label(for='text5') 给水方式
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 市政水压
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
						label(for='text5') 给水系统
						textarea.form-control#text5(style='width: 27%', type='text', placeholder='', rows=1)
				.form-group(style='margin-left: 0.7%;')
					.content.flex.align-center.center-space-around.buttons
						label(for='text5') 排水系统
						textarea.form-control#text5(style='width: 27.5%; margin-left: 1.0% ;margin-right: 1.0%;', type='text', placeholder='', rows=1)
						label(for='text5') 消防系统
						textarea.form-control#text5(style='width: 27.5%; margin-left: 1.5%;', type='text', placeholder='', rows=1)

</template>

<script>
	export default {

		methods: {
			getTypographyInfo(elType) {
				if (this.$el) {
					let element = this.$el.querySelector(elType);
					if (element) {
						let style = window.getComputedStyle(element, null);
						return style.fontFamily.split(",")[0] + " " + style.fontWeight + ", " + style.fontSize;
					}
				}
			}
		}
	};

</script>

<style lang="scss" scoped>
	@import "../../../scss/themes/blurred/variables";

	.container {
		padding: 0 1rem;
	}

	section {
		&:not(:last-child) {
			margin-bottom: 40px;
		}

		> h2 {
			font-size: 1.5rem;
			margin-bottom: 20px;
			padding: 8px 10px;
			
			background-color: rgba(darken($backgroundColor, 10%), 0.6);
			border: 1px solid darken($backgroundColor, 8%);
			border-radius: 8px;
			
			.number {
				color: #888;
			}
			
			.text {
				margin-left: 4px;
				font-weight: $fontLight;
				text-transform: uppercase;
			}
			
			clear: both;
			
		} // .title

	} //. section	

	.buttons {
		margin-bottom: 20px;
	}

	.list {
		> * {
			margin-bottom: 20px;
		}
	}

	.panels {
		align-items: flex-start;
		.panel, .card {
			margin: 20px;
		}

		.card {
			max-width: 350px;
		}
	}

	.colors {
		$boxSize: 150px;

		.box {
			width: $boxSize;
			height: $boxSize + 20px;

			border: 1px solid darken($backgroundColor, 10%);
			border-radius: 6px;

			margin: 5px 20px;
			padding: 2px;
			
			.caption {
				float: left;
				width: 100%;
				text-align: center;
			}

			.main {
				float: left;
				width: 100%;
				height: $boxSize - 60px;
			} // .main
			
			.light {
				float: left;
				width: 50%;
				height: 30px;
				
			} // .light

			.dark {
				float: right;
				width: 50%;
				height: 30px;
				
			} // .dark
			
			.code {
				float: left;
				width: 100%;
				position: relative;
				margin-top: 5px;
				
				&:after {
					position: absolute;
					top: 0; bottom: 0;
					left: 0; right: 0;
					margin: auto;
					width: 100%;
					text-align: center;
					font-family: "Consolas";
					color: White;
				}
			} // .code

			$colors: $color1, $color2, $color3, $color4, $color5;

			$colors-light: $color1-light, $color2-light, $color3-light, $color4-light, $color5-light;
			$colors-dark: $color1-dark, $color2-dark, $color3-dark, $color4-dark, $color5-dark;

			@for $i from 1 through 5 {

				$c: nth($colors, $i);

				&.box#{$i} { 
					.main { background-color: $c; } 
					.light { background-color: nth($colors-light, $i); }
					.dark { background-color: nth($colors-dark, $i); }
					.code:after {	content: "" + $c; }

				} // box
				
			} // for
			
		} // .box
		
	} // .colors
</style>