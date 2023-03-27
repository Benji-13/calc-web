class BaseCalculator
{
	constructor(output, history)
	{
		this.outputContainer = output
		this.historyContainer = history
		this.operationList = [];
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
		} catch {
			this.outputContainer.innerText = "Wrong input";
		}
	}

	back()
	{
		this.operationList.pop(); // On enlève le dernier élément (élément actuel)
		this.outputContainer.innerText = (this.operationList.length !== 0) ? this.operationList[this.operationList.length - 1] : ""; // Si le tableau est vide, on met un texte vide car il n'y a aucun historique
	}
}

let baseCalculator = new BaseCalculator(document.getElementById("calc-current"), document.getElementById("calc-history"));
