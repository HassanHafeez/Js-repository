var div;
        var box= document.getElementById("box");

    //    for (var i=0; i<5; i++) // every box give alert box # 5 that why we need to change it in let
        for (let i=0; i<5; i++)
        {
            div= document.createElement("div");
            div.onclick=  ()=>{
                alert("this is box # "+i);
            }
            box.appendChild(div);
        }