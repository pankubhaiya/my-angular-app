import { CommonModule } from '@angular/common';
import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-itme-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './itme-list.component.html',
  styleUrl: './itme-list.component.css'
})
export class ItmeListComponent {

      name="pankaj"
      lastname = "jain"
      mobileNo = 9522189879
      isbtn = false
      inputval = "text"

     users = [
      {name:"pankaj",status:true},
      {name:"shubham",status:false},
      {name:"neha",status:true}
     ]

     handleButtonClick(): void {
      console.log('Button clicked!');
    }

    pageTitle: string = "Angular Data Binding Practice";
  a: number = 5;
  b: number = 7;
  disable: boolean = false;

  toggleChange(): void {
    this.disable = !this.disable;
  }

  sum(): number {
    return this.a + this.b;
  }

  sumPlusTen(): number {
    return this.sum() + 10;
  }

  imageUrl: string = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600";


  isError: boolean = false;
}
