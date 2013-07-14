function it_can_create_a_random_num_is(){
    var total_exptected_number_count=0;
    for(var k=0;k<1000;k++){
        var random_num=random_a_num();
        if(is_four_digit_different(random_num)) {
            total_exptected_number_count++;
        }
    }
    return total_exptected_number_count>900;
}

function is_four_digit_different(number) {
    var same_counter=0;
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(number.charAt(i)==number.charAt(j)){
                same_counter++;
            }
        }
    }
    return same_counter==4;
}