import { Component, OnInit, Inject } from '@angular/core';
import { MatIconRegistry, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-dialog-pay',
  templateUrl: './dialog-pay.component.html',
  styleUrls: ['./dialog-pay.component.scss']
})
export class DialogPayComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogPayComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar) { }
  detail: any[];
  numBtnArr: any[] = [];
  showInfo: boolean = false;
  calcResult: string = '0';
  total: any;
  recevied: number = 0;
  payType: string = '现金';
  currentTypeNum: number = 3;

  ngOnInit() {
    console.log(this.data)
    this.detail = [];
    let num = ['7', '8', '9', 'C', '4', '5', '6', '←', '1', '2', '3', '-', '0', '*', '/', '+', '.', 'ENTER(=)'];
    for (let i = 0; i < num.length; i++) {
      if (num[i] === 'ENTER(=)') {
        this.numBtnArr.push({ title: num[i], rowspan: 1, colspan: 3 });
      } else {
        this.numBtnArr.push({ title: num[i], rowspan: 1, colspan: 1 })
      }
    }

    document.addEventListener('keyup', (e) => {
      switch (e.key) {
        case '1':
          if (this.calcResult != '0') {
            this.calcResult += '1';
          } else {
            this.calcResult = '1';
          }
          break;
        case '2':
          if (this.calcResult != '0') {
            this.calcResult += '2';
          } else {
            this.calcResult = '2';
          }
          break;
        case '3':
          if (this.calcResult != '0') {
            this.calcResult += '3';
          } else {
            this.calcResult = '3';
          }
          break;
        case '4':
          if (this.calcResult != '0') {
            this.calcResult += '4';
          } else {
            this.calcResult = '4';
          }
          break;
        case '5':
          if (this.calcResult != '0') {
            this.calcResult += '5';
          } else {
            this.calcResult = '5';
          }
          break;
        case '6':
          if (this.calcResult != '0') {
            this.calcResult += '6';
          } else {
            this.calcResult = '6';
          }
          break;
        case '7':
          if (this.calcResult != '0') {
            this.calcResult += '7';
          } else {
            this.calcResult = '7';
          }
          break;
        case '8':
          if (this.calcResult != '0') {
            this.calcResult += '8';
          } else {
            this.calcResult = '8';
          }
          break;
        case '9':
          if (this.calcResult != '0') {
            this.calcResult += '9';
          } else {
            this.calcResult = '9';
          }
          break;
        case '0':
          if (this.calcResult != '0') {
            this.calcResult += '0';
          }
          break;
        case '+':
          this.calcResult += '+';
          break;
        case '-':
          this.calcResult += '-';
          break;
        case '/':
          this.calcResult += '/';
          break;
        case '*':
          this.calcResult += '*';
          break;
        case '.':
          this.calcResult += '.';
          break;
        case 'Enter':
          try {
            this.calcResult = eval(this.calcResult);
          } catch (err) {
            this.snackBar.open('您的输入有误，请核对', null, {
              duration: 2000,
            });
          }
          break;
        case 'Backspace':
          if (this.calcResult != '0') {
            this.calcResult = this.calcResult.substring(0, this.calcResult.length - 1);
            if (this.calcResult.length === 0) {
              this.calcResult = '0';
            }
          }
          break;
        case 'c':
        case 'C':
          this.calcResult = '0';
          break;
        default:
          this.snackBar.open('您的输入有误，请核对!', null, {
            duration: 2000,
          });
      }
    });
  }

  payTypeClick(type: string, num: number): void {
    this.calcResult = '0';
    this.payType = type;
    this.currentTypeNum = num;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteItem(): void {
    this.calcResult = '0';
    this.detail.pop();
    this.recevied = this.calcTotalRecive(this.detail);
  }

  clearItem(): void {
    this.calcResult = '0';
    this.detail = [];
    this.recevied = this.calcTotalRecive(this.detail);
  }

  calcTotalRecive(data: any[]): number {
    let res = 0;
    data.forEach(e => {
      res += e.price;
    })
    return res;
  }

  onNumBtnClick(e: any, num: string, scroll: any): void {
    if (e.screenX) {
      if (num == 'ENTER(=)') {
        console.log('=')
        try {
          this.calcResult = eval(this.calcResult);
          this.detail.push({ name: this.payType, price: this.calcResult });
          this.recevied = this.calcTotalRecive(this.detail);
          scroll.scrollTop = scroll.scrollHeight + 50;
        } catch (err) {
          this.snackBar.open('您的输入有误，请核对!', null, {
            duration: 2000,
          });
        }
      } else if (num == 'C') {
        this.calcResult = '0';
      } else if (num == '←') {
        if (this.calcResult != '0') {
          this.calcResult = this.calcResult.substring(0, this.calcResult.length - 1);
          if (this.calcResult.length === 0) {
            this.calcResult = '0';
          }
        }
      } else {
        if (this.calcResult == '0') {
          this.calcResult = num;
        } else {
          this.calcResult += num;
        }
      }
    }
  }
}
