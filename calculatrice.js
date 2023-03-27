class BaseCalculator
{
	constructor(output, history)
	{
		this.outputContainer = output
		this.historyContainer = history
	}

	btnAction(value)
	{
		this.outputContainer.innerText += value;
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
		} catch {
			this.outputContainer.innerText = "Wrong input";
		}
	}
}

let baseCalculator = new BaseCalculator(document.getElementById("calc-current"), document.getElementById("calc-history"));
