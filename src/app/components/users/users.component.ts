import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  //currentClasses = {};
  //currentStyles = {};

  constructor() { }

  ngOnInit() {

    //setTimeout(() => {

      this.users = [
        {
          firstName: 'John',
          lastName:'Doe',
          age: 30,
          address: {
            street: '50 main st',
            city: 'Boston',
            state: 'MA'
          },
          //image: 'https://www.lexibook.us/images/stories/virtuemart/product/DJA200_03.jpg',
          isActive: true,
          //balance: 100,
          registered:new Date('01/02/2018 08:30:00')
        },
        {
          firstName: 'Kevin',
          lastName:'Johnson',
          age: 34,
          address: {
            street: '20 school st',
            city: 'Lynn',
            state: 'MA'
          },
          //image: 'https://www.lexibook.us/images/stories/virtuemart/product/DJA200_02.jpg',
          isActive: false,
          //balance: 200,
          registered:new Date('03/11/2017 06:20:00')
        },
        {
          firstName: 'Karen',
          lastName:'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },
          //image: 'https://www.lexibook.us/images/stories/virtuemart/product/DJA200_01.jpg',
          isActive: true,
          //balance: 50,
          registered:new Date('11/02/2016 10:30:00')
        }
      ];

      this.loaded = true;

    //}, 2000);
          

      //this.showExtended = false;

      // this.addUser({
      //   firstName: 'David',
      //   lastName:'Jackson'
      
      // });

      //this.setCurrentClasses();
      //this.setCurrentStyles();

  } // ngOnInit()
  
  // setCurrentClasses(){
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd,
  //     'big-text': this.showExtended
  //   }
  // }

  // setCurrentStyles(){
  //   this.currentStyles = {
  //     'padding-top': this.showExtended ? '0' : '40px' 
  //   }
  // }

  addUser(user:User){
    this.users.push(user);
  }

  // fireEvent(e){
  //   console.log(e.type);
  // }



}
