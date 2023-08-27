import './scss/style.scss';
import { templateAccordion } from './templateAccordion';

const eventHandler = () => {
	templateAccordion();
};

document.addEventListener('DOMContentLoaded', () => {
	eventHandler();
});
