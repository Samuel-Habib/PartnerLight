export const welcome = (recipient) => {
   return  `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en" dir="ltr">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome Email</title>
        <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
            font-family: Arial, sans-serif;
            color: #333333;
        }
        table {
            border-spacing: 0;
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border: 1px solid #dddddd;
        }
        td {
            padding: 20px;
            text-align: left;
        }
        h1 {
            font-size: 24px;
            color: #333333;
            margin: 0 0 10px;
        }
        p {
            font-size: 14px;
            line-height: 20px;
            margin: 0 0 20px;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a.button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 10px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-size: 14px;
            font-weight: bold;
        }
        a.button:hover {
            background-color: #0056b3;
        }
        </style>
    </head>
    <body>
        <table role="presentation">
        <tr>
            <td>
            <h1>Welcome to Our Platform!</h1>
            <p>
                Hi ${recipient},
            </p>
            <p>
                We're thrilled to have you join us! Our platform is designed to help you [briefly mention what the platform does or provides]. Feel free to explore and make the most out of it.
            </p>
            <p>
                To get started, click the button below:
            </p>
            <p>
                <a href="[Your Link Here]" class="button">Get Started</a>
            </p>
            <p>
                If you have any questions, feel free to reply to this email or contact us at <a href="mailto:support@example.com">support@example.com</a>.
            </p>
            <p>
                Best regards,<br />
                The MangoBlaze Team
            </p>
            </td>
        </tr>
        <tr>
            <td style="text-align: center; font-size: 12px; color: #999999; padding: 10px 20px;">
            &copy; 2025 [Your Company Name]. All rights reserved. <br />
            1234 Your Address, City, State, ZIP Code
            </td>
        </tr>
        </table>
    </body>
    </html>
    `
} 
