let elemetsMap = [];


const btnCreate = () => {
 
let elementName = document.getElementById("elements");
let inelement = document.getElementById("inelements");
let adia = document.getElementById("id");
let width = document.getElementById("width");
let height = document.getElementById("height");
let color = document.getElementById("color");

  elemetsMap.push({
      id: adia.value,
      elementName: elementName.value,
      inelement:inelement.value,
      width: width.value,
      height: height.value,
      color: color.value,
      codetxt: "<" + elementName.value + ">" + "</" + elementName.value + ">"
    });
    
  
    console.log(elemetsMap[0],elemetsMap[1]);
  
    let yenieleman=document.createElement(elementName.value);
    yenieleman.setAttribute("id",adia.value);
    yenieleman.style.background=color.value;
    yenieleman.style.width=width.value+"px";
    yenieleman.style.height=height.value+"px";
    document.getElementById(inelement.value).appendChild(yenieleman);
  
    creatMap();
    clearInput()
  };
  
  function creatMap()
  {
      let ul = document.getElementById("elementMap");
            let li = document.createElement("li");
            li.classList="elementItem"
            ul.appendChild(li);
            let buton=document.createElement("button");
            buton.setAttribute("onclick","selectElement(this)");
          buton.value=elemetsMap[elemetsMap.length-1].id;
          buton.innerHTML=elemetsMap[elemetsMap.length-1].id;
          li.appendChild(buton);
            
  }
  
  const selectElement=(select)=>
  {
    document.getElementById("inelements").value=select.value;


    

  }


  
  function clearInput()
  {
    document.getElementById("inelements").value="in element ID?";
    document.getElementById("id").value="";
    document.getElementById("width").value="";
    document.getElementById("height").value="";
    document.getElementById("color").value="";
  }