import bcrypt from 'bcryptjs';

const users=[
    {
        name:'Admin User',
        email:'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'Chandler Bing',
        email:'chandler@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
    {
        name:'Joey Tribiyani',
        email:'joey@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:false,
    }
];

export default users;