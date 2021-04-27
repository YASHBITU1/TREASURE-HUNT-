class Security {

    constructor(){

      


    }

    display(){
this.access1 = createInput("Code1")
this.access1.position(100,90);
this.access1.style('background','white');

this.button1 = createButton('Check');
this.button1.position(100,120);
this.button1.style('backgroud','lightgrey');

        this.button1.mousePressed(() => {
            if(system.athenticate(accessCode1,this.access1.value())){
              this.button1.hide();
              this.acess1.hide();
              score++;
            }
        })
authenticate(actualCode,enteredCode);{
    if(actualCode === enteredCode)
         return true
         else
         return false
}

    }
}