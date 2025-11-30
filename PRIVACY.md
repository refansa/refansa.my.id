# Privacy Policy

## Philosophy

This portfolio is designed with privacy in mind. I believe in minimizing data collection and respecting the privacy of all visitors.

## Data Collection

### Personal Information
This website does **not** collect any personal information from visitors. 
- There are no contact forms.
- There are no newsletter sign-ups.
- No user accounts or login systems are implemented.

### Analytics
This website does not currently use any third-party analytics services (like Google Analytics) to track visitor behavior.

## Contact

To contact me, I provide a direct email link. When you click this link, it will open your default email client. No information is sent to any server controlled by me until you explicitly send an email.

## Security Measures

### Security Headers
This website implements strict security headers to protect visitors:
- **Content Security Policy (CSP)**: Restricts the sources from which content can be loaded.
- **X-Frame-Options**: Prevents the site from being embedded in iframes to avoid clickjacking.
- **X-Content-Type-Options**: Prevents the browser from MIME-sniffing a response away from the declared content-type.
- **Referrer-Policy**: Controls how much referrer information is included with requests.
- **Permissions-Policy**: Disables access to sensitive features like camera, microphone, and geolocation.

### Robots.txt
A `robots.txt` file is configured to manage crawler access and prevent aggressive scraping.

## Usage as a Template

If you choose to use this project as a template for your own portfolio, please ensure you respect the privacy of your visitors and yourself:

1.  **Update Personal Information**: Thoroughly replace all instances of my personal information (name, email, links) in `src/config/site.ts` and `src/messages/`.
2.  **Review Security Headers**: The security headers in `next.config.mjs` are strict. Ensure they match your deployment needs (e.g., if you add analytics or external scripts, you may need to adjust the CSP).
3.  **Respect the License**: Remember that while the code is CC BY-NC 4.0, the personal content is All Rights Reserved. You **must** replace all personal content.

## Changes to This Policy

I may update this Privacy Policy from time to time. Any changes will be reflected on this page.
