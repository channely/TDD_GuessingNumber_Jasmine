describe('Input a number of 4 bits',function(){
    it("should warn 'You are win',when guess right on first time.",function(){
        expect(input_right_on_times_m_and_get_message_on_times_n('1','1')).toBe('You are win')
    })
    it("should warn 'You are wrong, 5 times left',when guess wrong on first time",function(){
        expect(input_right_on_times_m_and_get_message_on_times_n('6','1')).toBe('You are wrong, 5 times left')
    })
    it("should warn 'You are win',when guess right on third time",function(){
        expect(input_right_on_times_m_and_get_message_on_times_n('3','3')).toBe('You are win')
    })
    it("should warn 'You are wrong, 3 times left',when guess wrong on third time",function(){
        expect(input_right_on_times_m_and_get_message_on_times_n('6','3')).toBe('You are wrong, 3 times left')
    })
    it("should warn 'You are win',when guess right on 6rd time",function(){
        expect(input_right_on_times_m_and_get_message_on_times_n('6','6')).toBe('You are win')
    })
    it("should warn 'Game over',when guess right on 6rd time",function(){
        expect(input_right_on_times_m_and_get_message_on_times_n('9','6')).toBe('Game over')
    })
})