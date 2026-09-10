import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

// Dynamic CORS Configuration
const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.FRONTENDURL,
    'https://avgprimetech.com',
    'http://localhost:5173'
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl requests) or if origin is in the list
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true
}));

app.use(express.json());

// --- DYNAMIC NODEMAILER CONFIGURATION ---
// Automatically switches between Hostinger (Production) and Gmail (Local)
const transporterConfig = process.env.SMTP_HOST
    ? {
        // Hostinger / Custom Domain Setup
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 465,
        secure: true, // true for port 465, false for 587
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    }
    : {
        // Gmail Local Development Fallback
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    };

const transporter = nodemailer.createTransport(transporterConfig);

// Verify email connection on startup
transporter.verify((error, success) => {
    if (error) {
        console.error("⚠️ SMTP Connection Error:", error);
    } else {
        console.log(`✅ Mail server is ready to send messages using ${process.env.SMTP_HOST ? 'Hostinger/Custom SMTP' : 'Gmail'}`);
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, service, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    // HTML Email Template using AGILAVETRI Brand Colors and DM Sans Font
    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Best practice: Always send *from* the authenticated email
        replyTo: email, // If you click "reply" in your inbox, it goes to the customer
        to: process.env.EMAIL_USER, // The inbox receiving the leads
        subject: `New Inquiry from ${name} - ${service}`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
                </style>
            </head>
            <body style="margin: 0; padding: 20px; background-color: #f9fafb;">
                <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); background-color: #ffffff;">
                    
                    <!-- Dark Premium Header -->
                    <div style="background-color: #010a1f; padding: 30px 20px; text-align: center; border-bottom: 4px solid #0437cc;">
                        <img src="https://agilavetri.com/logo.jpg" alt="AGILAVETRI PRIMETECH" style="height: 50px; margin-bottom: 15px;" />
                        <h2 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px; font-weight: 700;">New Service Inquiry</h2>
                    </div>
                    
                    <!-- Content Body -->
                    <div style="padding: 32px; background-color: #ffffff;">
                        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 100px; font-weight: 500;">Name:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 700;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;">Email:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">
                                    <a href="mailto:${email}" style="color: #0437cc; text-decoration: none; font-weight: 500;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;">Service:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                                    <span style="background-color: #f77704; color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: 700;">${service}</span>
                                </td>
                            </tr>
                        </table>
                        
                        <h3 style="color: #010a1f; font-size: 16px; margin-bottom: 10px; font-weight: 700;">Message Details:</h3>
                        <div style="padding: 20px; background-color: #f9fafb; border-left: 4px solid #a6e71c; border-radius: 4px;">
                            <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap; font-weight: 400;">${message}</p>
                        </div>
                    </div>
                    
                    <!-- Footer -->
                    <div style="background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; font-weight: 500;">
                        This email was automatically generated from the AGILAVETRI PRIMETECH contact form.<br/>
                        &copy; ${new Date().getFullYear()} AGILAVETRI PRIMETECH PVT LTD. All rights reserved.
                    </div>
                </div>
            </body>
            </html>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
});

// Start Server with Error Handling
const server = app.listen(PORT, () => {
    console.log(`🚀 Server is successfully running and locked on port ${PORT}`);
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error(`⚠️ Port ${PORT} is in use. Trying port ${PORT + 1}...`);
        setTimeout(() => {
            server.close();
            app.listen(PORT + 1, () => {
                console.log(`🚀 Server is successfully running and locked on port ${PORT + 1}`);
            });
        }, 1000);
    } else {
        console.error("Server Error:", e);
    }
}); 