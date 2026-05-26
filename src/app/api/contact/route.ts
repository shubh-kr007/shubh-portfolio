import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Simple validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // Setup SMTP transporter
        const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
        const smtpPort = parseInt(process.env.SMTP_PORT || '587');
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const contactReceiver = process.env.CONTACT_RECEIVER || smtpUser;

        // If credentials are not set, return simulation mode to avoid throwing errors during development
        if (!smtpUser || !smtpPass) {
            console.warn("SMTP credentials are not configured in environment variables. Running in simulation mode.");
            return NextResponse.json({
                success: true,
                simulated: true,
                message: 'Message received! (SMTP credentials are not configured in .env.local, so the email was logged to server console instead)'
            });
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: contactReceiver,
            subject: `Portfolio Contact: ${subject || 'New Message'}`,
            text: `You have received a new message from your portfolio contact form.\n\n` +
                  `Name: ${name}\n` +
                  `Email: ${email}\n` +
                  `Subject: ${subject || 'N/A'}\n\n` +
                  `Message:\n${message}\n`,
            replyTo: email
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Your message has been sent successfully!'
        });

    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
