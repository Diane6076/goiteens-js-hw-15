//7

//Типів транзацкій всього два.
//Можна покласти або зняти гроші з рахунку.

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
 
//Кожна транзакція - це об'єкт з властивостями: id, type і amount
  
const account = {
balance: 0, // Поточний баланс рахунку
transactions: [], // Історія транзакцій

//Метод створює і повертає об'єкт транзакції.
//Приймає суму і тип транзакції.

createTransaction(amount, type) {
    const transaction = {
        id: account.transactions.length, 
        type,
        amount,
      }
      return transaction
},

//Метод відповідає за додавання суми до балансу.
//Приймає суму танзакції.
//Викликає createTransaction для створення об'єкта транзакції
// після чого додає його в історію транзакцій

deposit(amount) {
// let {createTransaction, balance, transactions} = this
const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
this.transactions.push(transaction)
this.balance += amount
   return console.log(`Рахунок поповнено ${amount}`);
},

//Метод відповідає за зняття суми з балансу.
//Приймає суму танзакції.
//Викликає createTransaction для створення об'єкта транзакції
//після чого додає його в історію транзакцій.
    
//Якщо amount більше, ніж поточний баланс, виводь повідомлення
//про те, що зняття такої суми не можливо, недостатньо коштів.

withdraw(amount) {
if (amount > this.balance) {
    console.log('Недостатньо коштів на рахунку')
    return;
}
// let {createTransaction, balance, transactions} = this
const transaction = this.createTransaction(amount, Transaction.WITHDRAW)
this.transactions.push(transaction)
this.balance -= amount
    return console.log(`З рахунку знято ${amount}`)
},
  
//Метод повертає поточний баланс

getBalance() {
    return console.log(`На вашому рахунку ${this.balance}`);
},
 
//Метод шукає і повертає об'єкт транзакції по id

getTransactionDetails(id) {
    // for (const i of this.transactions) {
    //     if (i.id === id) {
    //       return console.log(`Обєкт транзакції по id ${i}`);
    //     }
    //   }
      return account.transactions[id]
},

//Метод повертає кількість коштів
//певного типу транзакції з усієї історії транзакцій

getTransactionTotal(type) {
    let sum = 0
     for (const transaction of this.transactions) {
       if (transaction.type === type) {
         sum += transaction.amount
       }
     }
     return sum
    },
}

account.deposit(500)
   account.withdraw(100)
   account.deposit(300)
   account.getBalance()
   account.deposit(600)
   account.withdraw(800)
   account.getBalance()
   
   console.log(account.getTransactionDetails(1))
   console.log(account.getTransactionDetails(4))
   
   
   console.log(account.getTransactionTotal(Transaction.WITHDRAW))
   console.log(account.getTransactionTotal(Transaction.DEPOSIT))