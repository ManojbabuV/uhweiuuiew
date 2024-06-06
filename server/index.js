 
//all connectione executed more producation

const express = require("express");
const oracledb = require("oracledb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
 
const app = express();
app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3015'],
  credentials: true,
};
app.use(cors(corsOptions));

async function connectDB() {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "custom",
      password: "custom",
      connectString: "dbfin:1521/FINMULTI",
      port: 1521
    });
    console.log("Successfully connected to Oracle Database");
    return connection;
  } catch (err) {
    console.error("Error connecting to Oracle Database:", err);
    throw err;
  }
}
app.post('/sign', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { emp_name, mobile, department, emp_email, password, emp_address, emp_designation } = req.body;
    const insert = "INSERT INTO custom.login (emp_name, mobile, department, emp_email, password, emp_address, emp_designation) VALUES (:emp_name, :mobile, :department, :emp_email, :password, :emp_address, :emp_designation)";
    const binds = { emp_name, mobile, department, emp_email, password, emp_address, emp_designation };
    await connection.execute(insert, binds, { autoCommit: true });
    res.send("User registered successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while registering the user." });
  }
});

app.post("/server", async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { emp_email, password } = req.body;
    const select = "SELECT * FROM custom.login WHERE emp_email = :emp_email AND password = :password";
    const selectParams = { emp_email, password };
    const result = await connection.execute(select, selectParams);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const token = jwt.sign({ userId: user.ID, emp_email: user.EMP_EMAIL }, '03f867b7e0c8a6d57033b1de49808a870120acad3429d940ecad412123f646b1b567f49b6bee71b00bbfc6f688da6596bce838843da8b061dab9f61c56da8e18', { expiresIn: '1h' });
      res.json({ message: "Login successful", token });
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send({ message: "An error occurred while logging in." });
  }
});
const verifyToken = (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader || !tokenHeader.startsWith("Bearer ")) {
    return res.status(403).send("Token is missing or invalid!");
  }
  const token = tokenHeader.replace("Bearer ", "");
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
}; 
app.get('/protected', verifyToken, (req, res) => {
  res.send("This is a protected route");
}); 

app.post('/unland', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { leave_type, employee_id, start_date, end_date, lev_reason, lev_approve } = req.body;
    const inserted = "INSERT INTO custom.leave (leave_type, employee_id, start_date, end_date, lev_reason, lev_approve) VALUES (:leave_type, :employee_id, :start_date, :end_date, :lev_reason, :lev_approve)";
    const bind = {leave_type, employee_id, start_date, end_date, lev_reason, lev_approve };
    await connection.execute(inserted, bind, { autoCommit: true });
    res.send("User leave applied successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while applying for leave."});
  }
}); 
app.post('/attend', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { employee_id, employee, checki, checko } = req.body;
    const inserted = "INSERT INTO custom.atten (employee_id, employee, checki, checko) VALUES (:employee_id, :employee, :checki, :checko)";
    const bind = { employee_id, employee, checki, checko };
    await connection.execute(inserted, bind, { autoCommit: true });
    res.send("User leave applied successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while applying for leave."});
  }
}); 
app.get('/getting', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const sqlQuery = 'SELECT * FROM custom.atten';
    const result = await connection.execute(sqlQuery);
    const attendance = result.rows.map((row) => { 
      return {
        id: row[0], 
        employee_id: row[1],
        employee: row[2],
        checki: row[3],
        checko: row[4] 
      };
    });
    console.log(attendance); 
    res.json({ attendance: attendance });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
// app.post("/onsite", express.static(__dirname + "/public"));
app.get('/onsite', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS onsiteCount FROM custom.atten WHERE employee='Onsite employee'";
    const result = await connection.execute(query);
    const onsiteCount = result.rows[0][0]; // Access the count value

    res.json({  onsitee: [{ onsiteCount }] }); // Send the desired output format
    console.log("Onsite employee Count :", onsiteCount);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/present', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(employee_id) AS presentCount FROM custom.atten";
    const result = await connection.execute(query);
    const presentCount = result.rows[0][0];  

    res.json({  sending: [{ presentCount }] }); 
    console.log("Present count :", presentCount);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

// app.put('/update/:id', async(req,res)=>{
//   let connection;
//   try{
//     const id = req.params.id;
//     const lev_status = req.body
//     connection = await connectDB();
//       const update = 'UPDATE custom.leave SET lev_status = :newStatus WHERE leave_id = :leaveId'; 
//       const code = {lev_status, id }
//      const result =  await connection.execute(update, code, {autoCommit: true}) 
// res.send(result.rows,"data upated")
     
//   }catch(err){
//     console.error('Error executing query:', err);
//   }
// })



app.post('/update-lev-status', async (req, res) => {
  const { employee_id, lev_status } = req.body;
  let connection;

  try {
    connection = await connectDB();
    const result = await connection.execute(
      `UPDATE employees SET lev_status = :lev_status WHERE employee_id = :employee_id`,
      { lev_status, employee_id },
      { autoCommit: true }
    );

    if (result.rowsAffected === 1) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Employee not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});
app.get('/getRecords', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const sqlQuery = 'SELECT * FROM custom.leave';
    const result = await connection.execute(sqlQuery);
    const employees = result.rows.map((row) => {
       
      return {
        id: row[0], 
        leave_type: row[1],
        employee_id: row[2],
        start_date: row[3],
        end_date: row[4], 
        lev_reason: row[5],
        lev_approve: row[6],
        lev_status: row[7],
      };
    });
    console.log(employees); 
    res.json({ employees: employees });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/sickl', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS onsiteCount FROM custom.leave WHERE leave_type='Sick leave'";
    const result = await connection.execute(query);
    const sickl = result.rows[0][0];  

    res.json({  sick: [{ sickl }] }); // Send the desired output format
    console.log("Onsite employee Count :", sickl);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/absent', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS absentCount FROM custom.leave WHERE start_date = TO_CHAR(SYSDATE, 'YYYY-MM-DD')";
    const result = await connection.execute(query);
    const absend = result.rows[0][0];  

    res.json({  absendu: [{ absend }] }); // Send the desired output format
    console.log("Onsite employee Count :", absend);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/casul', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS onsiteCount FROM custom.leave WHERE leave_type='Casual leave'";
    const result = await connection.execute(query);
    const casual = result.rows[0][0];  

    res.json({  casuall: [{ casual }] }); 
    console.log("Onsite employee Count :", casual);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/paided', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS onsiteCount FROM custom.leave WHERE leave_type='Paid leave'";
    const result = await connection.execute(query);
    const paid = result.rows[0][0];  

    res.json({  paidedl: [{ paid }] }); 
    console.log("Onsite employee Count :", paid);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

//in my code backend response only array type send and also without key valye to senning that the reason not fetching to the ui
 
app.post("/comment", async(req, res) => {
  let connection;
  try{
    connection = await connectDB()
  const {  employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno,bankName, startjoin,blood_G} = req.body; 
  const sql = "INSERT INTO custom.employee (employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno ,startjoin,bankName, blood_G) VALUES (:employee_name, :father_name, :employee_id, :personal_email, :work_email, :mobile, :gender, :dob, :marital_status, :location, :permanent, :employee_Ref, :remark, :department, :designation, :reporting, :pan_no, :aadhar, :bankac, :uanno, :pfno, :bankName, :startjoin ,:blood_G )";
  const values = [employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno, bankName,startjoin,blood_G];
  await connection.execute(sql, values, { autoCommit: true });
    res.send("User leave applied successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while applying for leave."});
  }
});
app.get('/setting', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const sqlQuery = 'SELECT * FROM custom.employee';
    const result = await connection.execute(sqlQuery);
    const details = result.rows.map((row) => { 
      return {
        id: row[0], 
        employee_name: row[1],
        designation: row[15],
        employee_id: row[3],
        work_email: row[5],
        mobile: row[6],
        reporting:row[16],
        startjoin:row[23],
        permanent:row[11]
      };
    });
    console.log(details); 
    res.json({ details: details });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});


// const storage = multer.memoryStorage(); // Store files in memory (you can adjust this)

// const upload = multer({ storage });
// app.post("/upload", upload.array("files", 5), async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const upload = req.files;
//     const file = 'INSERT INTO custom.uploadfile (upload) VALUES (:upload)';
//     const result = { upload };
//     const response = await connection.execute(file, result, { autoCommit: true });
//     res.status(200).send("Files uploaded successfully!");
//     res.send(response);
//   } catch (error) {
//     console.log(error, "error");
//   }
// });

// app.post('/count-employees', async (_req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const query = "SELECT COUNT(*) FROM custom.employee WHERE gender='Male'";
//     const result = await connection.execute(query);
//     const maleCount = result.rows[0].MALECOUNT;
//     res.send({ maleCount });
//     console.log(maleCount)
//   } catch (err) {
//     console.error("Error counting male employees:", err);
//     res.status(500).send({ message: "An error occurred while counting male employees." });
//   }
// });


app.get('/count', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno, bankName, startjoin, blood_G FROM custom.employee";  
    const result = await connection.execute(query);
    
    
    const comments = result.rows.map((row) => {
      return {
        employeeName: row[0],
        fatherName: row[1],
        employeeId: row[2],
        personalEmail: row[3],
        workEmail: row[4],
        mobile: row[5],
        gender: row[6],
        dob: row[7],
        maritalStatus: row[8],
        location: row[9],
        permanent: row[10],
        employeeRef: row[11],
        remark: row[12],
        department: row[13],
        designation: row[14],
        reporting: row[15],
        panNo: row[16],
        aadhar: row[17],
        bankAc: row[18],
        uanNo: row[19],
        pfNo: row[20],
        startjoin:row[21],
        bankName:row[22],
        blood_G:row[23],
      };
    });
    
    res.json({ comments: comments, count: comments.length });
    console.log("total: ",comments.length);  
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).send({ message: "An error occurred while fetching records." });
  } finally {
    if (connection) {
      try {
        await connection.close();  
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

app.post("/file", express.static(__dirname + "/public"));
app.get('/countemployees', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS maleCount FROM custom.employee WHERE gender='Male'";
    const result = await connection.execute(query);
    const maleCount = result.rows[0][0]; // Access the count value

    res.json({  gender: [{ maleCount }] }); // Send the desired output format
    console.log("Male count:", maleCount);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/femaleCount', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS femaleCount FROM custom.employee WHERE gender='Female'";
    const result = await connection.execute(query);
    const femaleCount = result.rows[0][0];  

    res.json({ fgender: [{ femaleCount }] });  
    console.log("Female count:", femaleCount);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
const PORT = process.env.PORT || 3015;
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Running backend server on port", PORT);
  } catch (err) {
    console.error("Error starting backend server:", err);
  }
});














































// working JWT:

// require('dotenv').config();
// const express = require("express");
// const oracledb = require("oracledb");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
 
// const app = express();
// app.use(express.json());
// app.use(cors());

// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://localhost:3015'],
//   credentials: true,
// };
// app.use(cors(corsOptions)); 
// async function connectDB() {
//   let connection;
//   try {
//     connection = await oracledb.getConnection({
//       user: process.env.DB_USER || "custom",
//       password: process.env.DB_PASSWORD || "custom",
//       connectString: process.env.DB_CONNECT_STRING || "dbfin:1521/FINMULTI"
//     });
//     console.log("Successfully connected to Oracle Database");
//     return connection;
//   } catch (err) {
//     console.error("Error connecting to Oracle Database:", err);
//     throw err;
//   }
// } 
// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
// } 
 

// app.post('/sign', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_name, mobile, department, emp_email, password, emp_address, emp_designation } = req.body;
     
//     const checkUserQuery = "SELECT COUNT(*) AS count FROM custom.login WHERE emp_email = :emp_email";
//     const checkUserParams = { emp_email };
//     const userCheckResult = await connection.execute(checkUserQuery, checkUserParams);

//     if (userCheckResult.rows[0][0] > 0) {
//       res.status(409).send({ message: "User already exists with this email." });
//       return;
//     } 
//     const insert = "INSERT INTO custom.login (emp_name, mobile, department, emp_email, password, emp_address, emp_designation) VALUES (:emp_name, :mobile, :department, :emp_email, :password, :emp_address, :emp_designation)";
//     const binds = { emp_name, mobile, department, emp_email, password, emp_address, emp_designation };
//     await connection.execute(insert, binds, { autoCommit: true }); 
//     const user = { name: emp_name };
//     const accessToken = generateAccessToken(user);
//     res.json({ accessToken: accessToken });
//   } catch (err) {
//     console.error("Error inserting user:", err);
//     res.status(500).send({ message: "An error occurred while registering the user." });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing connection:", err);
//       }
//     }
//   }
// });  
// app.get("/login", async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_email, password } = req.body;
//     const select = "SELECT emp_name FROM custom.login WHERE emp_email = :emp_email AND password = :password";
//     const selectParams = { emp_email, password };
//     const result = await connection.execute(select, selectParams); 
//     if (result.rows.length > 0) {
//       const user = { name: result.rows[0][0] };  
//       const accessToken = generateAccessToken(user);
//       res.json({ accessToken: accessToken });
//     } else {
//       res.status(401).send({ message: "Invalid credentials." });
//     }
//   } catch (err) {
//     console.error('Error executing query:', err);
//     res.status(500).send({ message: "An error occurred while logging in." }); 
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing connection:", err);
//       }
//     }
//   }
// }); 
// app.get('/posts', authenticateToken, (req, res) => {
//   res.json({ message: "Here are the posts", user: req.user });
// }); 
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1]; 
//   if (token == null) {
//     console.error('No token provided');
//     return res.sendStatus(401); 
//   } 
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) {
//       console.error('Token verification failed:', err);
//       return res.sendStatus(403); 
//     }
//     req.user = user;
//     next();
//   });
// } 
// const PORT = process.env.PORT || 3015;
// app.listen(PORT, async () => {
//   try {
//     await connectDB();
//     console.log("Running backend server on port", PORT);
//   } catch (err) {
//     console.error("Error starting backend server:", err);
//   }
// });


// require('dotenv').config();
// const express = require("express");
// const oracledb = require("oracledb");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://localhost:3015'],
//   credentials: true,
// };
// app.use(cors(corsOptions));

// async function connectDB() {
//   try {
//     const connection = await oracledb.getConnection({
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       connectString: process.env.DB_CONNECT_STRING
//     });
//     console.log("Successfully connected to Oracle Database");
//     return connection;
//   } catch (err) {
//     console.error("Error connecting to Oracle Database:", err);
//     throw err;
//   }
// }

// function generateAccessToken(user) {
//   return jwt.sign(user,process.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.hqd6lc6FVmAYT_vQyDPgVzoJbxf0kNxIybtQ7YW_NVE, { expiresIn: '1800s' });
// }

// app.get('/sign', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_name, mobile, department, emp_email, password, emp_address, emp_designation } = req.body;
     
//     const checkUserQuery = "SELECT COUNT(*) AS count FROM custom.login WHERE emp_email = :emp_email";
//     const checkUserParams = { emp_email };
//     const result = await connection.execute(checkUserQuery, checkUserParams);
    
//     if (result.rows[0][0] > 0) {
//       res.status(409).send({ message: "User already exists with this email." });
//       return;
//     }
//     const insert = `INSERT INTO custom.login 
//       (emp_name, mobile, department, emp_email, password, emp_address, emp_designation) 
//       VALUES (:emp_name, :mobile, :department, :emp_email, :password, :emp_address, :emp_designation)`;
//     const binds = { emp_name, mobile, department, emp_email, password, emp_address, emp_designation };
//     await connection.execute(insert, binds, { autoCommit: true });

//     const user = { name: emp_name };
//     const accessToken = generateAccessToken(user);
//     res.json({ accessToken: accessToken });
//   } catch (err) {
//     console.error("Error inserting user:", err);
//     res.status(500).send({ message: "An error occurred while registering the user." });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing connection:", err);
//       }
//     }
//   }
// });

// app.post('/server', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_email, password } = req.body;
//     const select = "SELECT * FROM custom.login WHERE emp_email = :emp_email AND password = :password";
//     const selectParams = { emp_email, password };
//     const result = await connection.execute(select, selectParams);
    
//     if (result.rows.length > 0) {
//       const user = { name: result.rows[0][0] };  
//       const accessToken = generateAccessToken(user);
//       res.json({ accessToken: accessToken });
//     } else {
//       res.status(401).send({ message: "Invalid credentials." });
//     }
//   } catch (err) {
//     console.error('Error executing query:', err);
//     res.status(500).send({ message: "An error occurred while logging in." });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing connection:", err);
//       }
//     }
//   }
// });

// app.get('/posts', authenticateToken, (req, res) => {
//   res.json({ message: "Here are the posts", user: req.user });
// });

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
  
//   if (token == null) return res.sendStatus(401);
  
//   jwt.verify(token, process.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.hqd6lc6FVmAYT_vQyDPgVzoJbxf0kNxIybtQ7YW_NVE, (err, user) => {
//     if (err) return res.sendStatus(403);
    
//     req.user = user;
//     next();
//   });
// }

// const PORT = process.env.PORT || 3015;
// app.listen(PORT, async () => {
//   try {
//     await connectDB();
//     console.log("Running backend server on port", PORT);
//   } catch (err) {
//     console.error("Error starting backend server:", err);
//   }
// });
