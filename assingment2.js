class Mkulima{
    constructor(){
        this.farms = [];
        this.groceryVendor = [];
        this.product = [];
        this.addFarm = (farmId, farmName, farmer, phone, address) => {
            this.farms.push({farmId,farmName,farmer,phone,address})
        }
        this.removeFarm = (farmId) => {
            let specific = this.farms.find(item => item.farmId ===farmId);
            let farmIndex = this.farms.indexOf(specific);
            this.farms.splice(farmIndex, 1); 
        }
        this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
            let GodownFarm = this.farms.find(item => item.farmId ===farmId)
            GodownFarm.farmId =newFarmId;
            GodownFarm.farmName =newFarmName;
            GodownFarm.farmer =newFarmerName;
            GodownFarm.phone =newPhone;
            GodownFarm.address =newAddress;
        }
        this.getFarm = (Id)=>{
            console.log(this.farms.find(object=>object.farmId===Id))
        }
        this.addProduct = (productId, goodsName, price) => {
            this.product.push({productId,goodsName,price})

        }
        this.removeProduct = (productId) => {
            let specific = this.product.find(item => item.productId ===productId);
            let productIndex = this.product.indexOf(specific);
            this.product.splice(productIndex, 1); 
        }
        this.updateProduct = function(productId,newProductId,newProductName,newPrice){
            let godownProduct = this.product.find(item => item.productId ===productId)
            godownProduct.productId =newProductId;
            godownProduct.goodsName = newProductName;
            godownProduct.price = newPrice;
        }
        this.getProduct = (Id)=>{
            console.log(this.product.find(object=>object.productId===Id))
        }
        this.printProducts = ()=>{
            console.log(this.product)
        }
        this.calculateOrderCost = (productId,quantity)=>{
            let godownProduct = this.product.find(object=>object.productId===productId);
            console.log(`${quantity} ${godownProduct.goodsName} for KES ${quantity*godownProduct.price}`);
        }
    }
}

let farm1 = new Mkulima();
farm1.addFarm("456","Dago","Judy","0772782437", "2NK45");
farm1.addFarm("200","Lando","Wanjiru","0720034567", "2NK32");
farm1.addFarm("109","mcheto","Wainiaina","0797239759", "2NK43");
console.log(farm1.farms);

farm1.removeFarm("200");
console.log(farm1.farms);

farm1.updateFarm("109","234","Dando","Mercy","071254678", "2NK23");

farm1.getFarm("234");

farm1.addProduct("200","corns",70);
farm1.addProduct("100","cotton",40);
farm1.addProduct("107","Soyabeans",30);
farm1.addProduct("102","Wheat",10);
console.log(farm1.product);

farm1.removeProduct("107");
console.log(farm1.product);

farm1.updateProduct("200","004","corns",70);
console.log(farm1.product);

farm1.getProduct("100");

farm1.printProducts();

farm1.calculateOrderCost("102",70); 