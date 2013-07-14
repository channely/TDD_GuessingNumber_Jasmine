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
        expect(it_can_create_a_random_num_is).toBeTruthy();
    });
    it('it shouldn not be 0 on first digit',function(){
        expect(it_is_0_the_first_digit_of(random_a_num())).toBeFalsy()
    });
});