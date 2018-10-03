var array=[1,2,3];
((data)=>{
    for(var i=0;i<data.length;i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
})(array);



((data)=>{
    for(var i=0;i<data.length;i++){
        setTimeout((local=>{
            return ()=>{
                console.log(local);
            }
        })(i),1000)
    }
})(array);
