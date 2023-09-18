#!/usr/bin/env node

import exp from "constants";
import inquirer from "inquirer";

class Customer {
  name: string;
  age: number;
  gender: string;
  mobileNum: number;
  userID: string;
  password: string;

  constructor(
    name: string,
    age: number,
    gender: string,
    mobileNum: number,
    userID: string,
    password: string
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.mobileNum = mobileNum;
    this.userID = userID;
    this.password = password;
  }
};

class BankAccount {
   private balance = 100;

    constructor(public customer: Customer) {
    this.customer = customer;
   }

  // Method to check account balance
   public checkBalance(): number {
    return this.balance;
   }

  // Method to credit (deposit) money to the account
   public credit(amount: number) {
    this.balance += amount;
    console.log(`Credited $${amount}.\nNew balance: $${this.balance}`);
   }

   // Method to debit (withdraw) money from the account
   public debit(amount: number) {
    if(amount <= this.balance) {
        this.balance -= amount;
        console.log(`Debited $${amount}.\nNew balance: $${this.balance}`)
    } else {
        console.log(`Insufficient Balance\nCurrent Balance: $${this.balance}`)
    } 
   }

};

async function createAccount() {

    const customerInfo = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your name:",
      },
      {
        type: "number",
        name: "age",
        message: "Enter your age:",
      },
      {
        type: "list",
        name: "gender",
        message: "Select your gender:",
        choices: ["Male", "Female", "Other"],
      },
      {
        type: "number",
        name: "mobileNumber",
        message: "Enter your mobile number:",
      },
      {
        type: "input",
        name: "userID",
        message: "Enter your User ID:",
      },
      {
        type: "password",
        name: "password",
        mask: "*",
        message: "Set your Password:",
      },
    ]);
  
    const customer = new Customer(
      customerInfo.name,
      customerInfo.age,
      customerInfo.gender,
      customerInfo.mobileNumber,
      customerInfo.userID,
      customerInfo.password
    );
  
    const account = new BankAccount(customer);
  
    return account;
};



export{Customer, BankAccount, createAccount}