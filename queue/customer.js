/**
 * 고객을 받아서 선입선출로 음식 주문을 처리하는 점원 클래스
 */
function Customer(name,order){
    this.name = name;
    this.order = order;
}

function Cashier(){
    this.customer = new Queue();
}

Cashier.prototype.addOrder = function (customer){
    this.customer.enqueue(customer);
}

Cashier.prototype.deliverOrder = function (){
    let finishedCustomer = this.customer.dequeue();
    console.log(`customer:${finishedCustomer.name}, order:${finishedCustomer.order}`)
}

let cashier = new Cashier();
let customer_1 = new Customer('jerry', 'buger');
let customer_2 = new Customer('josh', 'pizza');

cashier.addOrder(customer_1);
cashier.addOrder(customer_2);

cashier.deliverOrder();
