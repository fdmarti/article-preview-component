import './style.css';

const IconShare = document.querySelector('.icon-share');
const LinkList = document.querySelector('.link-list');

const removeShow = () => {
	LinkList!.classList.remove('show');
};

IconShare!.addEventListener('click', () => {
	LinkList!.classList.toggle('show');
});

LinkList!.addEventListener('click', removeShow);
