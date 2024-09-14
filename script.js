const taskInput = document.getElementById("name");
  const listcontainer = document.getElementById("list-container");

  function addTask(){
    if(taskInput.value===''){
      alert("You should write something");
    }
    else{
      let li=document.createElement("li");
      li.innerHTML=taskInput.value;
      listcontainer.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      listcontainer.append(span);
    }
    taskInput.value="";
    save();
  }
  listcontainer.addEventListener("click",function(value){
    if(value.target.tagName==="LI"){
     value.target.classList.toggle("done");
     save();
    }
    else if(value.target.tagName==="SPAN"){
      value.target.parentElement.remove();
      save();
    }
  },false);
  function save(){
    localStorage.setItem("data",listcontainer.innerHTML)
  }


