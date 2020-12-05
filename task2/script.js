const consoleLog = document.querySelector("#consoleLog"),
	consoleAlert = document.querySelector("#alert"),
	consolePrompt = document.querySelector("#prompt");
//console.log(consoleLog);

consoleLog.addEventListener('click', ()=>{alert('Метод для вывода сообщения в веб-консоль!')});

consoleAlert.addEventListener('click', ()=>{alert('Метод для вывода сообщения на экран!')});

consolePrompt.addEventListener('click', ()=>{alert('Метод для ввода сообщения!')});