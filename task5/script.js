const submitMy = document.querySelector("button[type=submit]"),
	textMy = document.querySelector("input[type=text]"),
	alertText = document.querySelector("#duplicateField");

submitMy.addEventListener('click', (event)=>{
	event.preventDefault();
	let text = textMy.value;
	textMy.value = "";
	alertText.textContent = text;
});
