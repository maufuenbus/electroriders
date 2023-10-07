require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,     
    port: Number(process.env.SMTP_PORT), 
    secure: true,
    auth: {
      user: process.env.SMTP_USER,   
      pass: process.env.SMTP_PASS   
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,  
      to: process.env.SMTP_USER,    
      subject: `Nuevo mensaje de ${name}`, 
      text: `${name} (${email}) dice: ${message}`
    });
    res.status(200).send('Mensaje enviado exitosamente.');
  } catch (error) {
    res.status(500).send('Hubo un error al enviar el mensaje.');
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
