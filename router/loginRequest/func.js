import bcrypt from 'bcrypt'
import LoginData from '../../schema/login.js';

export const signIn = async(req,res)=>{
    try{
        const {email,password,confirmPassword,text} = req.body;
        console.log(req.body)
        if(password == confirmPassword){
            const hashPassword = await bcrypt.hash(password,10);
            const result = await LoginData.findOne({email});
            if(!result){
                const data = await  new LoginData({email,password:hashPassword,confirmPassword, text});
                await data.save();
                
                console.log("signUp successfully");
                return res.status(201).json({data});

            }else{
                return res.status(205).json({message:"user account already exist"});
            }
        }


    }catch(err){
        console.log({"message":err})
    }
    

}
export const getdata = async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    try{

        const data = await LoginData.findById(id)
        if(data){
            const {email,text} = data
            res.status(200).json({email,text});
        }else{
            res.status(404).json({"message" :" not found"});  
        }
    }catch(err){
        console.log(err)
    }
}