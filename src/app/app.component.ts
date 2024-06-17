import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  calNumber: string = 'anyValue';
  firstNumber: number = 0;
  secondNumber: number = 0;
  calValue: number = 0;
  funcT: any = 'NoFunction';

  onClickValue(val: string, type:any){
    if(type == 'number'){
      this.onNumberClick(val);
    }else if(type == 'function'){
      this.onFunctionClick(val);
    }
  }
  onNumberClick(val: string){
    if(this.calNumber != 'anyValue'){
      this.calNumber = this.calNumber + val;
    }else{
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }
  onFunctionClick(val: string){
    if(val == 'c'){
      this.clearAll();
    }
    if(val == 'NoFunction'){
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'anyValue';
      this.funcT  = val;
    }else if(this.funcT != 'NoFunction'){
      this.secondNumber = this.calValue;
      //lets do the calculation
      this.valueCalculate(val);
    }
  }
  valueCalculate(val: string){
    if(this.funcT == '+'){
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(Total, val);
      
    }if(this.funcT == '-'){
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(Total, val);
      
    }if(this.funcT == '*'){
      const Total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(Total, val);
      
    }if(this.funcT == '-'){
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(Total, val);
      
    }if(this.funcT == '/'){
      const Total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(Total, val);
      
    }if(this.funcT == '%'){
      const Total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(Total, val);
      if(val == '='){
        this.onEqualPress();
      }
    }

  }
  totalAssignValues(Total: number, val: string){
    this.calValue = Total;
    this.firstNumber = Total;
    this.calNumber = 'anyValue';
    this.funcT = val;
    if(val == '='){
      this.onEqualPress();
    }
  }
  onEqualPress(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'anyValue';
  }
  clearAll(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'anyValue';
    this.calValue = 0;
  }

}
