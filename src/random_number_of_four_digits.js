function random_a_num(){
    for(var h=0;the_same_counter!=4;h++){
        var random_num = Math.random();
        random_num = random_num*1e17;
        random_num = random_num.toString();
        random_num = random_num.substr(3,4);
        if(random_num.substr(0,1)=='0'){
            continue
        }else{
            var the_same_counter = get_the_similar_counter(random_num);
        }
        if(the_same_counter==4){
            return random_num;
        }
    }
}

function get_the_similar_counter(random_num){
    var the_same_counter=0;
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(random_num.charAt(i)==random_num.charAt(j)){
                the_same_counter++;
            }
        }
    }
    return the_same_counter
}