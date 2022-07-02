var nav = document.getElementById("myNav");
var links = document.getElementsByClassName("link");
for(i=0; links.length>i; i++){
    links[i].addEventListener("click",function(){
        let current = document.getElementsByClassName("active")[0];
        current.className = current.className.replace("active","")
        this.className += " active";
    });
}

let timeDiv = document.getElementById("date11");
timeDiv.innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;



let arrow = document.getElementById("arrow22");
window.onscroll = function(){
    if(window.scrollY >= 600){
        arrow.style.display = "block";
    }else {
        arrow.style.display = "none"; 
    }
};
arrow.addEventListener("click", function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior: "smooth",
    });
});

// contact me part

function save() {
    var id = $("#UserID").val();
    var nameVal = $("#Name").val();
    var ageVal = $("#Age").val();
    var department = $("#Department").val();
    var data = { "department": department, "name": nameVal, "age": ageVal };
    //first insert
        $.ajax({
            accepts: "application/json",
            type: 'POST', //Request
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "https://mahmoudrabass-default-rtdb.firebaseio.com/users.json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            },
            error: function () {
                console.log("Error");
            }
        })
    }

function show() {
    $.ajax({

        accepts: "application/json",
        type: 'GET', //Request
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "https://mahmoudrabass-default-rtdb.firebaseio.com/users.json",
        success: function (data) {
            $("#data>tbody").empty();
            console.log(data)
            for (var item in data) {
                var row = `<tr>
                <td>${data[item].name}</td>
                <td>${data[item].age}</td>
                <td>${data[item].department}</td>
                <td>
                    Thank you
                </td>
                </tr>`;
                $("#data>tbody").append(row);
            }
        },
        error: function () {
            console.log("Error");
        }
    })
}
