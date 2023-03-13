let container = document.getElementById("calc-current");

function btnAction(value)
{
	container.innerText += value;
}

function cancel()
{
	container.innerText = "";
}

function submit()
{
	let val = container.innerText;
	try {
		let result = eval(val);
		let history = document.getElementById("calc-history");
		let resultDiv = document.createElement("div");

		resultDiv.classList.add("history-element")
		resultDiv.innerHTML = `
		<div class="elem-calc">
			${val}
		</div>
		<div class="elem-equal">
			=
		</div>
		<div class="elem-result">
			${result}
		</div>`;

		history.prepend(resultDiv);

		container.innerText = result;
	} catch {
		container.innerText = "Wrong input";
	}



}
