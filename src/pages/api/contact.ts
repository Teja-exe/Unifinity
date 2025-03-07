// src/pages/api/contact.ts
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const prerender = false;

export async function POST({ request }) {
    try {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const mobile = formData.get('mobile');
        const message = formData.get('message');

        if (!name || !email || !message || !mobile) {
            return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: import.meta.env.EMAIL_ID,
                pass: import.meta.env.EMAIL_PASS,
            },
        });

        const sendSelf = async () => {
            const mailOptions = {
                from: import.meta.env.EMAIL_ID,
                to: import.meta.env.EMAIL_ID,  // Send to yourself
                subject: `Contact Query Received from ${name}`,
                text: `${name} has tried to contact you.\n\nDetails:\nEmail: ${email}\nPhone: ${mobile}\nMessage: ${message}\n\nPlease respond as soon as possible.`,
            };
            await transporter.sendMail(mailOptions);
        };
      
        const sendUser = async () => {
            const mailOptions = {
                from: import.meta.env.EMAIL_ID,
                to: email,
                subject: "Unifinity EdTech Services Private Ltd.",
                text: `Dear ${name},\n\nThank you for contacting us. Our representative will reach out to you soon.\n\nBest regards,\nUnifinity EdTech Services`,
            };
            await transporter.sendMail(mailOptions);
        };

        await Promise.all([sendSelf(), sendUser()]); // Wait for both emails to be sent

        return new Response(JSON.stringify({ success: 'Message sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email :', error);
        return new Response(JSON.stringify({ error: 'Failed to send message.' }), { status: 500 });
    }
}