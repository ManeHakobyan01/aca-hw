function changeResult() {
    const input_value = document.getElementById("input-value").value;
    const converter_type = document.getElementById("converter-type").value;
    const result = document.getElementById("result");
    console.log(input_value, converter_type, result)
    if(converter_type === "AMDtoUSD") {
      result.innerText = input_value/490
    } else {
      result.innerText = input_value*490
    }
  }