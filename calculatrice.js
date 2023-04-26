const BASE_URL = "http://localhost:3000"

class BaseCalculator
{
	constructor(output, history)
	{
		this.outputContainer = output
		this.historyContainer = history
		this.operationList = [];
		this.xhttp = new XMLHttpRequest();
		this.xhttp.onload = () => {
			console.log(this.xhttp.responseText)
		}
		this.date = Date.now()
	}

	btnAction(value)
	{
		this.outputContainer.innerText += value;
		this.operationList.push(this.outputContainer.innerText);
	}

	cancel()
	{
		this.outputContainer.innerText = "";
	}

	submit()
	{
		let val = this.outputContainer.innerText;
		try {
			let result = eval(val);
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

			this.historyContainer.prepend(resultDiv);

			this.outputContainer.innerText = result;
			this.operationList.push(this.outputContainer.innerText);

			this.xhttp.open("POST", BASE_URL + "/success-event", true);
			this.xhttp.setRequestHeader("Content-type", "application/json");
			this.xhttp.send(JSON.stringify({
				"timeTakenMs": Math.abs(new Date() - this.date)
			}));

			this.date = Date.now()
		} catch {
			this.outputContainer.innerText = "Wrong input";
			this.xhttp.open("POST", BASE_URL + "/error-event", true);
			this.xhttp.setRequestHeader("Content-type", "application/json");
			this.xhttp.send(JSON.stringify({
				"created_at": Date.now()
			}));

			this.date = Date.now()
		}
	}

	back()
	{
		this.operationList.pop(); // On enlève le dernier élément (élément actuel)
		this.outputContainer.innerText = (this.operationList.length !== 0) ? this.operationList[this.operationList.length - 1] : ""; // Si le tableau est vide, on met un texte vide car il n'y a aucun historique
	}
}

let baseCalculator = new BaseCalculator(document.getElementById("calc-current"), document.getElementById("calc-history"));
