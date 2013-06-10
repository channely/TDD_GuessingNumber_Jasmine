function compare_num(num1,num2){
        var similar_counts_of_num1_and_num2=0;
        var same_count_of_num1_and_num2=0;
        for(var i=0;i<4;i++){
            var num1_each_value=num1.charAt(i);
            var num2_each_value_to_judge_weather_are_same=num2.charAt(i);
            if(num1_each_value==num2_each_value_to_judge_weather_are_same){
                same_count_of_num1_and_num2++;
            }
            for(var j=0;j<4;j++){
                var num2_each_value=num2.charAt(j);
                if(num1_each_value==num2_each_value){
                    similar_counts_of_num1_and_num2++;
                }
            }
        }
        return same_count_of_num1_and_num2+'A'+(similar_counts_of_num1_and_num2-same_count_of_num1_and_num2)+'B';
}