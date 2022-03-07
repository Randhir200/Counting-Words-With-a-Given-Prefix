var prefixCount = function(words, pref) {
    let sc="";
    let c=0;
    for(let i=0;i<words.length;i++){
        for(let j=0;j<pref.length;j++){
            if(pref[j]==words[i][j]){
             sc=sc+pref[j];       
            }else{
            sc="";
            break
          }
        } 
        if(sc==pref){
          c=c+1;  
          sc="";  
        }
    }
    return c;
};
let words = ["pay","attention","practice","attend"];
let pref = "at";
console.log(prefixCount(words,pref));