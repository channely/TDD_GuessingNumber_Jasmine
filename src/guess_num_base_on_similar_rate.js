function start_this_game(){
    localStorage.a_fixed_num = random_a_num();
    localStorage.guess_times = 0;
    document.getElementById("display").value='****';
    document.getElementById("num_input").value='';
}
function guess_it(){
    localStorage.guess_times++;
    localStorage.a_guessed_num = document.getElementById("num_input").value;
    result = compare_num(localStorage.a_fixed_num,localStorage.a_guessed_num);
    if(result=='4A0B'){
        document.getElementById("display").value="Clever!It's'"+localStorage.a_fixed_num+"',total'"+localStorage.guess_times+"'times.";
    }else{
        document.getElementById("display").value=result;
    }
}