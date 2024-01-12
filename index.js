function calcAvg(){ 
    //scope
    // tìm tới thẻ input có id là avg1 
    // let, const 
    // let khai báo 1 biến có thể cập nhật giá trị 
    // const kahi báo 1 hằng số ko update in4 
    const scoreElement = document.getElementById("score"); 
    const resultElement =  document.getElementById("result"); 
    const avg1Element = document.getElementById("avg1"); 
    const avg1 = Number(avg1Element.value); 
   

    const avg2Element = document.getElementById("avg2"); 
    const avg2 = Number(avg2Element.value); 
    const avg = (avg1 + avg2 * 2) / 3; 
    resultElement.style.display = "block";
        scoreElement.textContent = avg.toFixed(1); 
}