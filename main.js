#!/usr/bin/env node
import inquirer from "inquirer";
import { createAccount } from "./classes.js";
console.log("\t\tWelcome to the Bank App!");
console.log("\t\t========================");
// Main function to interact with the bank app
async function main() {
    const account = await createAccount();
    while (true) {
        const choice = await inquirer.prompt({
            type: "rawlist",
            name: "action",
            message: "What would you like to perform?",
            choices: ["Check Balance", "Deposit Money", "Withdraw Money", "Exit"],
        });
        if (choice.action === "Check Balance") {
            console.log(`Your current balance: $${account.checkBalance()}`);
            break;
        }
        else if (choice.action === "Deposit Money") {
            const dep = await inquirer.prompt({
                type: "number",
                name: "deposite",
                message: "Enter amount of money:",
            });
            console.log(account.credit(dep.deposite));
            break;
        }
        else if (choice.action === "Withdraw Money") {
            const wdraw = await inquirer.prompt({
                type: "number",
                name: "withdraw",
                message: "Enter amount of money:",
            });
            console.log(account.debit(wdraw.withdraw));
        }
        else if (choice.action === "Exit") {
            console.log("<Thanks>");
        }
        else {
            console.log("Invalid input");
        }
    }
    process.exit();
}
await main();
