export function templateAccordion() {
	const items = document.querySelectorAll('.js-accordion');

	items.forEach((item) => {
		const button = item.querySelector(
			'.js-accordion-toggle'
		) as HTMLButtonElement;
		const content = item.querySelector('.js-accordion-content') as HTMLElement;

		button.addEventListener('click', function () {
			const expanded = button.getAttribute('aria-expanded') === 'true';

			button.setAttribute('aria-expanded', (!expanded).toString());
			content.classList.toggle('is-active');

			if (!expanded) {
				content.removeAttribute('aria-hidden');
			} else {
				content.setAttribute('aria-hidden', 'true');
			}
		});
	});
}
