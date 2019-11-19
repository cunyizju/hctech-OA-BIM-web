<template lang="pug">
    .container
        section
				h2
					span.number 3.
					span.text Buttons
				fieldset
					legend Normal buttons
					.content.flex.align-center.justify-space-around.buttons
						button.button Normal
						button.button.primary Primary
						button.button.success 
							i.icon.fa.fa-check
							| Success
						button.button.warning Warning
						button.button.danger Danger
						button.button.outline Outline
						button.button.loading Loading
</template>