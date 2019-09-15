var data;
var dataReady = false;

var input = document.getElementById("input_field");
var submitBtn = document.getElementById("submitBtn");

	$.ajax({
	  type: "GET",
	  url: "table.csv",
	  dataType: "text",
	  success: function(response)
	  {
		data = $.csv.toArrays(response);
    console.log("data loaded, length: ")
    console.log(data.length);
    dataReady = true;
		// generateHtmlTable(data);
	  }
	});


function showResult(){
  let r;
  let name = input.value;
  console.log(name);
  r = getTableNumber(name, data);
  r = textResult(r);
  console.log(r);
  document.getElementById('result').innerHTML = r;
}

function getTableNumber(input,data){
  let found = [];
  // loop through all names
  data.forEach((element)=>{
    element.forEach((name, index)=>{
      // if find, push name and table number to an array
      if (index != 0 && name.includes(input)){
        let f = {
          name: name,
          table: element[0]
        }
        found.push(f);
      }
    })
  })
  // return the array
  return found;
}

function textResult(found){
  let r;
  if (found.length > 0){
    r = "查询结果";
    found.forEach((element)=>{
      r = r + "<br>姓名：" + element.name + "，桌号：" + element.table;
  })
}else{
  r = "对不起，无查询结果，请询问前台。"
}
return r

}
