function isEven(){
    let isEven=true;
    for(let i=1;i<=n;i++)
    isEven=!isEven;

    return isEven;
}

let n=101;
if (isEven(n)){
    console.log("Even");

}
else{
    console.log('Odd');
}