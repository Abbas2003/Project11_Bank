#!/usr/bin/env node
import inquirer from "inquirer";
class Customer {
    name;
    age;
    gender;
    mobileNum;
    userID;
    password;
    constructor(name, age, gender, mobileNum, userID, password) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.mobileNum = mobileNum;
        this.userID = userID;
        this.password = password;
    }
}
;
class BankAccount {
    customer;
    balance = 100;
    constructor(customer) {
        this.customer = customer;
        this.customer = customer;
    }
    // Method to check account balance
    checkBalance() {
        return this.balance;
    }
    // Method to credit (deposit) money to the account
    credit(amount) {
        this.balance += amount;
        console.log(`Credited $${amount}.\nNew balance: $${this.balance}`);
    }
    // Method to debit (withdraw) money from the account
    debit(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Debited $${amount}.\nNew balance: $${this.balance}`);
        }
        else {
            console.log(`Insufficient Balance\nCurrent Balance: $${this.balance}`);
        }
    }
}
;
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
    const customer = new Customer(customerInfo.name, customerInfo.age, customerInfo.gender, customerInfo.mobileNumber, customerInfo.userID, customerInfo.password);
    const account = new BankAccount(customer);
    return account;
}
;
export { Customer, BankAccount, createAccount };
