students=[];
function submit(){

    for(i=1;i<=5;i++){
        temp=document.getElementById("ip_"+i).value;
        students.push("<h4>"+temp+"</h4>");
    }
    

    document.getElementById("output").innerHTML=students.join(" ");
    document.getElementById("btn_submit").style.display="none";
    document.getElementById("btn_Sort").style.display="inline";

}

function Sort(){
    students.sort();
    document.getElementById("output").innerHTML=students.join(" ");
    document.getElementById("btn_sort").style.display="none";
    
}