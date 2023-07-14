
TypeScript Compiler Compile TS code Into javaScript code " this called Transpilation .
how About the New Features : WORKAROUND . 

for do compile : tsc name_file.ts
for make your compilar in watching you can use : tsc -w name_of_file_.ts

for create init file in typescript you can use : tsc -init . 

## type and signature of data  : 
-- boolean , any , number , string . 
### for any type you can use : 
    let variable :(string |number|boolean) this sentax is equals to let variable :any 

### type annotation with Functions with function : 

"noImplicitAny": true : Enable error reporting for expressions and declarations with an implied 'any' type. 

"noImplicitReturns": true : Enable error reporting for codepaths that do not explicitly return in a function.

"noUnusedParameters": true, : Raise an error when a function parameter isn't read.

"noUnusedLocals": true,  Enable error reporting when local variables aren't read. 


### function optional and default : 

    function showData(name:string="Un" , age:number=0, country?:string="Un"){
        return `${name}--${age}--${country}`
    }


country is option parametre . 

-- you can do option with default value like : country?:string="un"  this is false santex . 
-- and option paremetre you should get in last of variable of paremtre of function .

## data alias : 
type st = string ; make st like alias of string type 
type standnum = string |number ; 

## void and never  : 

void function return undefind

never it means that function don't return and don't have ( infinity ) 

so for knonw this problem ("allowUnreachableCode": false Disable error reporting for unreachable code. )

##  Type assertions ; 




