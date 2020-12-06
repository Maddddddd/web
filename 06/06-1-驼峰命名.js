function nameConversion(text){
    var textList = text.split('');
    for(let i = 0;i < textList.length;i++){
    if(textList[i] == '-'){
        textList.splice(i,1);
        textList[i] = textList[i].toUpperCase();
    }
}
    var str = textList.join();
    var strHump = (str.replace(/,/g, ""));
    return strHump;
}
var strHump = nameConversion('can-enter-volunteer-organization');
console.log(strHump);