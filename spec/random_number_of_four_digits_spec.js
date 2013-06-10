describe('lay out a random number',function(){
    it('it should be with four digits in it',function(){
        expect(random_a_num().length).toEqual(4);
    });
    it('it should be a random number',function(){
        var random_num1=random_a_num();
        var random_num2=random_a_num();
        expect(random_num1==random_num2).toBeFalsy();
    });
    it('it shouldn not have two same numbers within it',function(){
        var total_exptected_number_count=0;
        for(k=0;k<1000;k++){
            var random_num=random_a_num();
            if(is_four_digit_different(random_num)) {
               total_exptected_number_count++;
            }
        }
        expect(total_exptected_number_count).toEqual(1000);
    });

    function is_four_digit_different(number) {
        var same_counter=0;
        for(i=0;i<4;i++){
            for(j=0;j<4;j++){
                if(number.charAt(i)==number.charAt(j)){
                    same_counter++;
                }
            }
        }
        return same_counter==4;
    }
});