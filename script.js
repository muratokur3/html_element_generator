let elemetsMap = [];

let elementName = document.getElementById("elements");
let inelement = document.getElementById("inelement");
let adia = document.getElementById("id");
let width = document.getElementById("width");
let height = document.getElementById("height");
let color = document.getElementById("color");
alert(elementName.value,inelement.value)

const btnCreate = () => {
    elemetsMap.push({
    id: adia.value,
    elementName: elementName.value,
    inelement:inelement.value,
    width: width.value,
    height: height.value,
    color: color.value,
    codetxt: "<" + elementName.value + ">" + "</" + elementName.value + ">",
  });
  

  console.log(elemetsMap[0]);

  let yenieleman=document.createElement(elementName.value);
  yenieleman.setAttribute("id",adia.value);
  yenieleman.style.background=color.value;
  yenieleman.style.width=width.value+"px";
  yenieleman.style.height=height.value+"px";
  document.getElementById("browser").appendChild(yenieleman);

  eklenecekyer();
};

function eklenecekyer()
{
    let eklenecekyer=document.getElementById("eklenecekyer")
    let select = document.getElementById("inelements");
    eklenecekyer.appendChild(select);
    for (let i = 0; i < elemetsMap.length; i++)
     {
          let option = document.createElement("option");
          option.text=elemetsMap[i].elementName;
          option.value=elemetsMap[i].elementName;
          select.appendChild(option);
      }
}

