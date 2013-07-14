function start_this_game(){
    localStorage.a_fixed_num = random_a_num();
    localStorage.guess_times = 0;
    document.getElementById("display").value='****';
    document.getElementById("num_input").value='';
    document.getElementById("alert_message").value='Notice there,after "compute".';
}
function guess_it(){
    localStorage.guess_times++;
    localStorage.a_guessed_num = document.getElementById("num_input").value;
    result = compare_num(localStorage.a_fixed_num,localStorage.a_guessed_num);
    if(result=='4A0B'){
        document.getElementById("display").value="Clever!It's'"+localStorage.a_fixed_num+"',total'"+localStorage.guess_times+"'times.";
        document.getElementById("alert_message").value="You are win"
    }else{
        document.getElementById("display").value=result;
        if(localStorage.getItem("guess_times")=='6'){
            document.getElementById("alert_message").value="Game over"
        }else{
            var rest_time = 6-JSON.parse(localStorage.getItem('guess_times'))
            document.getElementById("alert_message").value="You are wrong, "+ rest_time +" times left"
        }
    }
}