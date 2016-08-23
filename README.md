# Guessing-number-in-Jasmine
==============================

## Guessing number Game create long before in Jasmine

### step 1: Random a four bits number without repeating bit in it

### step 2: Compare the number input and the exist random number && return a result about the similarity

### step 3: Combine the two part create in step 1&2 and display the game in web broser simple

==============================
### that's all - Channely 20130610

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

Jasmine-TDD-guess_a_num

    problem: 
           1，边界问题 如何选case 
           2，变量的定义 长短 
           3，random case3有缺陷 
           4，random for 循环 
           5，少一个场景 
           6，学习最佳方案 最佳实践

    两数比较
    
    1-case选择原则 ：尽可能覆盖每一种情况 包括特殊情况 
    此例中 变量有三种 
           【1】数字位置 异位/同位 
           【2】相同位置上数字的异同 异/同 
           【3】不同位置上数字的异同 异/同
    
                       --------------相同（相同度A++)即：same++    
                      |
           ------>同位 --------------不同
      位置| 
           ------>异位 --------------相同（相似度B++)即：similar++ 
                      |
                       --------------不同
    
    【潜在规律：共同存在的数字个数C=A+B】 
    
    【穷举】
    1，划分粒度2 /4，2/4： 
           一半相等一半相等 1234 1234 
           一半相等一半相似 1234 1243 
           一半相等一半相异 1234 1278 
           一半相似一半相似 1234 4321 
           一半相似一半相异 1234 5643 
           一半相异一半相异 1234 6789 
    2，粒度1/4，1/4，2/4
           一半相似一位相同一位相异 1234 1943
       
==============================
### that's all - Channely 20130715

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
       
