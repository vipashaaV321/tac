const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tac',
    password: 'vips',
    port: 3201,
});
const getacctype = (req, res) => {
    pool.query('select * from accounttype order by acid asc', (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
}

const addsignup = (req, res) => {
    const {name,contact,email,acid,username,password } = req.body;
    pool.query('insert into signup(name,contact,email,acid,username,password) values ($1,$2,$3,$4,$5,$6)', [name,contact,email,acid,username,password], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`User Added..with ID: ${result.id}`);
        console.log('signup details added');
    });
}

const getsignup= (req, res) => {
    pool.query('select * from signup order by sid asc', (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
}
const getsignupbyid = (req, res) => {
    const sid = parseInt(req.params.sid);
    pool.query('select * from signup where sid=$1', [sid], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
        console.log('data will be edited')
        console.log(result.rows)

    });
}
const updatesignup = (req, res) => {
    const sid = parseInt(req.body.sid);
    const { name,contact,email,acid,username,password } = req.body;
    pool.query('update courses set name=$1,contact=$2,email=$3,acid=$4,username=$5,password=$6 where sid=$7',
        [name,contact,email,acid,username,password,sid],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User Updated by ID:-${sid}`);
        }
    )
}
const deletesignup= (req, res) => {
    const sid = parseInt(req.params.sid);
    pool.query('delete from signup where sid=$1', [sid], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).send(`user deleted by id:-${sid}`);
        console.log("hello");
    })
}

const getlogin= (req, res) => {
    const { username,password } = req.body;
    pool.query('select * from signup where username=$1 and password=$2', [username,password], (error, result) => {
        if (error) {
            throw error;
        }
        res.send({status:201,msg:'login successfully',data:result.rows});
        console.log(result.rows);
    });
}

const getuserprofilebyid= (req, res) => {
    const sid = parseInt(req.params.sid);
    pool.query('select * from signup where sid=$1', [sid], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(201).json(result.rows);
        console.log(result.rows);
        console.log("profile generated of"+result.username)
    });
}
const addcontactdetails = (req, res) => {
    const {name,email,contact,message,date } = req.body;
    pool.query('insert into contactdetails(name,email,contact,message,date) values ($1,$2,$3,$4,$5,$6)', [name,email,contact,message,date], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`contact details..with ID: ${result.id}`);
        console.log('contact msg details added');
    });
}

const getcontactdetails= (req, res) => {
    pool.query('select * from contactdetails order by cid desc', (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
}

const deletecontactdetails= (req, res) => {
    const cid = parseInt(req.params.cid);
    pool.query('delete from contactdetails where cid=$1', [cid], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).send(`contact msg deleted  by id:-${cid}`);
        console.log("hello");
    })
}


module.exports = {
    getacctype,
    addsignup,
    getsignup,
    getsignupbyid,
    updatesignup,
    deletesignup,
    getlogin,
    getuserprofilebyid,
    addcontactdetails,
    getcontactdetails,
    deletecontactdetails
}
