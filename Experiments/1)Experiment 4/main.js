function calRes(){
    let n=document.getElementById("subjects").value;
    let total =0;
    for(let i=1;i<=n;i++){
        let marks=parseFloat(prompt("Enter the marks of subject  "+i));
        total=total+marks;
    }
    let grade;
    let average;
    let result;
    average=total/n;
    if(average>=90){
        grade="A";
    }
    else if(average>=80){
        grade="B";
    }
    else if(average >=70){
        grade="C";
    }
    else if(average>=60){
        grade="D";
    }
    else {
        grade="E";
    }
    if(average>=40){
        result="Pass";
    }
    else{
        result="Fail";
    }
    document.getElementById("result").innerHTML="Total Marks: "+total+"<br>"+"Average Marks: "+average.toFixed(2)+"<br>"
    +"Grade: "+grade+"<br>"+"Result: "+result+"<br>";
}