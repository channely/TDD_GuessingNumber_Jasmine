function input_right_on_times_m_and_get_message_on_times_n(last_time,get_message_times){
    last_time = JSON.parse(last_time)
    get_message_times = JSON.parse(get_message_times)

    document.getElementById('start_game_button').click();
    var the_fixed_num = JSON.parse(localStorage.getItem('a_fixed_num'))


    for(var i=0;i<last_time-1;i++){
        document.getElementById('num_input').value=JSON.stringify(the_fixed_num).split('').reverse().join('');
        document.getElementById('compute_result_button').click();
        if(JSON.parse(localStorage.getItem('guess_times'))==get_message_times){
            return document.getElementById('alert_message').value
        }
    }

    document.getElementById('num_input').value=the_fixed_num;
    document.getElementById('compute_result_button').click();
    if(JSON.parse(localStorage.getItem('guess_times'))==get_message_times){
        return document.getElementById('alert_message').value
    }

}