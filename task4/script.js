const link = document.querySelector('a');

link.addEventListener('click', (event)=>{
	event.preventDefault();
	const text = prompt();
	link.textContent = text;
});