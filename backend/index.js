const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const port = 4000;

//Middleware
app.use(express.json());
app.use(cors());

//API to connect with MongodB
const MONGO_URI = "mongodb+srv://mw8867861:P%40kistan11@cluster0.gdd8q.mongodb.net/SanaSafinaz(Clone)";
mongoose.connect(MONGO_URI, {

})
    .then(() => console.log("Connection Successful ✅"))
    .catch((err) => console.log("Database connnection error ❌", err))
app.get('/', (req, res) => {
    res.send('Welcome to Backend Panel of SanaSafinaz Ecommerce Store');
})

//Product Schema
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,   
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    back_image:{
        type: String,
        required:true
    }
    ,
    img_main: {
        type: String,
        required: true
    },
    img1: {
        type: String
    },
    img2: {
        type: String
    },
    img3: {
        type: String
    },
    img4: {
        type: String
    },
    img5: {
        type: String
    },
    description: {
        type: String
    },
    disclaimer: {
        type: String
    },
    delivery_note: {
        type: String
    },
    how_it_work: {
        type: String
    },
    dimension:{
        type:String
    },
    material:{
        type:String
    },
    Category: {
        type: String
    },
    sub_category:{
        type:String
    },
    old_price: {
        type: Number
    },
    new_price: {
        type: Number,
        requred: true
    },
    available: {
        type: String,
        required: true,
        default: true
    }


});

const productSchema2 = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    fabric: {
        type: String,
        required: true
    },
    cut: {
        type: String
    },
    slip: {
        type: String
    },
    dupatta: {
        type: String
    },
    trouser: {
        type: String
    },
    old_price: {
        type: String,
        required: true
    },
    new_price: {
        type: String,
        required: true
    },

    size: {
        type: String
    },
    disclaimer: {
        type: String
    },
    available: {
        type: String,
        required: true
    },
    img_main: {
        type: String,
        required: true
    },
    img1: {
        type: String
    },
    img2: {
        type: String
    },
    img3: {
        type: String
    },
    img4: {
        type: String
    },
    img5: {
        type: String
    }
})

const new_Orders= new mongoose.Schema({
    id:{
        type: Number,
        required:true
    },
    user_id:{
        type: String,
    },
    item:{
        type: Array,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        required:true
    },
    total:{
        type: Number,
        required:true
    }
},{timestamps:true})


const Product = mongoose.model('Accessories', productSchema);
const Clothing = mongoose.model('Clothing' , productSchema2);
const Orders= mongoose.model('Order', new_Orders );

//API for add Accessories
app.post('/addAccessories', async (req, res) => {
    try {
        const last_product = await Product.findOne({}).sort({ id: -1 });

        let id = last_product ? last_product.id + 1 : 1;

        const new_Product = new Product({
            id: id,
            
            name:req.body.name,
            title: req.body.title,

            back_image:req.body.back_image,
            img_main: req.body.img_main,
            img1:req.body.img1,
            img2:req.body.img2,
            img3:req.body.img3,
            img4:req.body.img4,
            img5:req.body.img5,

            description: req.body.description,
            disclaimer: req.body.disclaimer,
            dimension:req.body.dimension,
            material:req.body.material,

            delivery_note: req.body.delivery_note,
            how_it_work: req.body.how_it_work,
            Category: req.body.Category,
            sub_category:req.body.sub_category,

            old_price: req.body.old_price,
            new_price: req.body.new_price,
            available: req.body.available,

        })

        await new_Product.save();
        console.log("Product saved successfuly in dB:", new_Product);
        res.status(200).json({
            success: true,
            message: "Product added Successfuly",
            product: new_Product
        });
    }
    catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json({ success: false, message: "Failed to add Product" });

    }
})

//API to remove Product
app.post('/remAccessories', async (req, res) => {
    try {
        const result = await Product.findOneAndDelete({ id: req.body.id });
        if (result) {
            console.log("Product deleted", result);
            res.status(200).json({
                success: true,
                message: "The product is removed",
                title: result.title
            })

        }
        else {
            console.log("Something went wrong");
            res.status(500).json({
                success: false,
                message: "The product is not removed"
            })
        }
    }
    catch (error) {
        console.log("Error occuring in removing product", error);
        res.status(500).json({
            success: false,
            message: "The error is: " + error
        })
    }
})

//API to list all products
app.get('/all-Accessories', async (req, res) => {
    try {
        let products = await Product.find({});
        console.log("All products:\n", products);
        res.json(products)
    }
    catch (error) {
        console.error("error in fetching products");
        res.status(500).json({
            success: false,
            message: "Error in fetching products"
        })
    }
})







//API for add Clothing
app.post('/addClothing', async (req, res) => {
    try {
        const last_product = await Clothing.findOne({}).sort({ id: -1 });

        let id = last_product ? last_product.id + 1 : 1;

        const new_Product = new Clothing({
            id: id,
            
            title: req.body.title,

            img_main: req.body.img_main,
            img1:req.body.img1,
            img2:req.body.img2,
            img3:req.body.img3,
            img4:req.body.img4,
            img5:req.body.img5,

            description : req.body.description,
            color:req.body.color,
            fabric:req.body.fabric,
            category:req.body.category,
            cut:req.body.cut,
            slip:req.body.slip,
            dupatta:req.body.dupatta,
            trouser:req.body.trouser,
            old_price:req.body.old_price,
            new_price:req.body.new_price,
            size:req.body.size,
            disclaimer:req.body.disclaimer,
            available:req.body.available

        })

        await new_Product.save();
        console.log("Product saved successfuly in dB:", new_Product);
        res.status(200).json({
            success: true,
            message: "Product added Successfuly",
            product: new_Product
        });
    }
    catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json({ success: false, message: "Failed to add Product" });

    }
})

//API to remove Clothing
app.post('/remClothing', async (req, res) => {
    try {
        const result = await Clothing.findOneAndDelete({ id: req.body.id });
        if (result) {
            console.log("Product deleted", result);
            res.status(200).json({
                success: true,
                message: "The product is removed",
                title: result.title
            })

        }
        else {
            console.log("Something went wrong");
            res.status(500).json({
                success: false,
                message: "The product is not removed"
            })
        }
    }
    catch (error) {
        console.log("Error occuring in removing product", error);
        res.status(500).json({
            success: false,
            message: "The error is: " + error
        })
    }
})

//API to list all Clothing
app.get('/all-Clothings', async (req, res) => {
    try {
        let products = await Clothing.find({});
        console.log("All products:\n", products);
        res.json(products)
    }
    catch (error) {
        console.error("error in fetching products");
        res.status(500).json({
            success: false,
            message: "Error in fetching products"
        })
    }
})





app.post('/checkout', async (req, res) => {
    try {
        const last_order = await Orders.findOne({}).sort({ id: -1 });

        let id = last_order ? last_order.id + 1 : 1;

        const new_Order = new Orders({
            id: id,
            user_id:'TBD',
            date: new Date(Date.now()).toLocaleDateString('us-en',{year:'numeric',month:'2-digit' , day:'2-digit' }),
            total:req.body.total,
            status: "Pending",
            item:req.body.item

        })

        await new_Order.save();
        console.log("New Order Recieved:", new_Order);
        res.status(200).json({
            success: true,
            message: "New Order Recieved",
            Orders: new_Order
        });
    }
    catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json({ success: false, message: "Failed to add Product" });

    }
})

app.get('/all-orders', async (req, res)=>{
    try{
        let orders = await Orders.find({});
        console.log("All Orders:\n", orders);
        res.json(orders)
    }
    catch(error)
    {
        console.error("Some error there");
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders"
        })
    }
})

app.get('/all-pending-orders', async (req, res)=>{
    try{
        let pendingOrders = await Orders.find({status:'Pending'});
        console.log("All Pending Orders:\n", pendingOrders);
        res.json(pendingOrders);
    }
    catch(error)
    {
        console.error("Some error there");
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders"
        })
    }
})

app.post('/update-status', async (req, res) => {
    const { id } = req.body; // Extract order ID from the request body

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Order ID is required"
        });
    }

    try {
        // Find the order and update its status to 'dispatch'
        const updatedOrder = await Orders.findOneAndUpdate(
            { id }, // Find the order by its ID
            { status: 'Dispatch' }, // Update the status field to 'dispatch'
            { new: true } // Return the updated document
        );

        if (updatedOrder) {
            console.log("Order updated successfully:", updatedOrder);
            res.status(200).json({
                success: true,
                message: `Order ID ${id} status updated to 'dispatch'`,
                updatedOrder
            });
        } else {
            console.log("Order not found with ID:", id);
            res.status(404).json({
                success: false,
                message: `Order with ID ${id} not found`
            });
        }
    } catch (error) {
        console.error("Error in updating order status:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update order status",
            error: error.message
        });
    }
});

app.get('/all-dispatch-orders', async (req, res)=>{
    try{
        let pendingOrders = await Orders.find({status:"Dispatch"});
        console.log("All Dispatch Orders:\n", pendingOrders);
        res.json(pendingOrders);
        
    }
    catch(error)
    {
        console.error("Some error there");
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders"
        })
    }
})

app.post('/remOrder', async (req, res) => {
    try {
        const result = await Orders.findOneAndDelete({ id: req.body.id });
        if (result) {
            console.log("Order deleted", result);
            res.status(200).json({
                success: true,
                message: "The Order is removed",
                title: result.id
            })

        }
        else {
            console.log("Something went wrong");
            res.status(500).json({
                success: false,
                message: "The Order is not removed"
            })
        }
    }
    catch (error) {
        console.log("Error occuring in removing Order", error);
        res.status(500).json({
            success: false,
            message: "The error is: " + error
        })
    }
})


app.listen(port, () => {
    console.log(`Server is runnig on port: ${port}`);
})
