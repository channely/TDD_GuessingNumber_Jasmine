function random_a_num(){
    for(var h=0;the_same_counter!=4;h++){
        var the_same_counter=0;
        var random_num = Math.random();
        random_num = random_num*1e17;
        random_num = random_num.toString();
        random_num = random_num.substr(3,4);
        for(var i=0;i<4;i++){
            for(var j=0;j<4;j++){
                if(random_num.charAt(i)==random_num.charAt(j)){
                    the_same_counter++;
                }
            }
        }
        if(the_same_counter==4){
            return random_num;
        }
    }
}