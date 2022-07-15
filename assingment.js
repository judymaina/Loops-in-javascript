var kiosk=[
    {
        name:"Orange",
        price:30,
    },

    {
        name:"Mango",
        price:15,
    },
    {
        name:"Avocado",
        price:40,
    }]
function getTotalCost(name,quantity){
    let a=kiosk.find(item=>item.name===name)
    console.log(`${quantity}${name}for KES ${a.price*quantity}`)
}
getTotalCost("Orange",2)

class kioskCalc{
    constructor(fruit,quantity){
        this.fruit=fruit
        this.quantity=quantity
        this.fruitPriceList={"Orange":30,"mango":15,"avocado":40};
        this.getTotalCost=function(){
            return`${quantity}${fruit}for KES ${quantity*this.price}`
        }
    }
}
kioskCalc.prototype.price=30;
var kiosk=new kioskCalc('mango',2);
console.log(kiosk.getTotalCost());

