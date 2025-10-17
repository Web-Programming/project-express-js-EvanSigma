var User=require('../models/users');
//var products=require('../../data/products.json');


const detail=async(req,res)=>{
    try{
        const userId=req.params.id;
        const user=await User.findById(userId);
        if(!user){
            return res.status(404).send("Produk tidak ditemukan!");
        }
        res.render("user-details",{
            title:user.name,
            user:[user] // kirim sebagai array
        });
    }
    catch(err){
        res.status(404).send("user tidak ditemukan!");
    }
}

//membuat rest api
const all = async (req, res) => {
 	try {
        const user = await User.find({}); 
        res.status(200).json(
            {
                status: true,
                message: "user berhasil diambil",
                data: user
            });
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Gagal memuat user"
        });
    }
}; 

//CRUD
const create=async(req,res)=>{
    try{
        //1. ambil data dari body
        const newUser=new User({
           name :req.body.name,
           email :req.body.email,
           password :req.body.password,
           address :req.body.address,
           isAdmin :req.body.isAdmin,
           createAt :req.body.createAt
        })
        //2. simpan ke mongoDB melalui model
        const user=await newUser.save();
        //3. kirim response sukses ke user
        res.status(200).json({
            status:true,
            message:"user berhasil ditambahkan",
            data: user
        })
    }catch(err){
        
     res.status(400).json({
         status:false,
         message:err.message
     });   
    }
};

//read one
const detailuser=async(req,res)=>{
    try{
        const userId=req.params.id;
        const user=await user.findById(userId);
        if(!user){
            return res.status(404).json({
                status:false,
                message:"user tidak ditemukan"
            });
        }
        res.status(200).json({
            status:true,
            message:"Detail user berhasil diambil",
            data:user
        });
    }catch(err){
        res.status(500).json({
            status:false,
            message:"Gagal memuat detail user"
        });
    }
};

//update
const update=async(req,res)=>{
try{
    const user=await user.findByIdAndUpdate(
        req.params.id,req.body,{
            new:true,
            runValidators:true
        }
        );
        if(!user){
            res.status(404).json({
                status:false,
                message:"user tidak ditemukan"
            });
        }
            res.status(200).json({
            status:true,
            message:"user berhasil diupdate",
            data:user
        });
}catch(err){
    
        res.status(500).json({
            status:false,
            message:"Gagal memuat detail user"
        });
    }


};
//delete
const remove=async(req,res)=>{

};
module.exports={index,detail,all,create,detailProduk,update,remove};