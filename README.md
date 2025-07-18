# Personal Portfolio Website
This is my modern, responsive personal portfolio website that I built with React and Tailwind CSS. It is a dark cyan/blue and white themed website with animations to showcase my professional journey, skills, and projects. 

**Features**
- Typewriter Effect: text animation for the viewer to see letters being types
- Professional Experience Timeline: an animated timeline that loads my professional experinces so far
- Interactive Contact Form: an integrated message for with Apps Script to directly leave me a message from the website's interface
- Responsive Design: a mobile-first approach with optimized layouts for all devices
- Skills Showcase: a categorized skill display with logos and interactive tabs to cover a variety of skills
- Projects Showcase: a grid display with hovering effects and buttons to present my independent work

**Tech Stack**
- Frontend: React framework, JavaScript (ES6+)
- Styling: Tailwind CSS
- Icons: Lucide React
- Backend Integration: Google Apps Script for contact form (message box at the bottom of the website)
- Other external integrations used: Calendly integration to schedule a meeting

**Project Structure**

<img width="211" height="490" alt="Screenshot 2025-07-18 at 14 47 25" src="https://github.com/user-attachments/assets/721c3c77-5549-44e5-bbc9-ebbf72f829da" />

**Installation**
1. Clone the repository
git clone https://github.com/anjalibhimani/personal-portfolio-website.git
cd personal-portfolio-website

2. Install dependencies
npm install

4. Start the dev server
npm start

5. Open http://localhost:3000 to view it in the browser

**Contact Form Setup**
The contact form is integrated with Google Apps Script for backend processing. To set it up for yourself:
1. Create a new Google Apps Script project
2. Deploy the project as a web app with correct permissions
3. Update the endpoint URL in the src/components/Contact.js file

**Customization**
- change personal information in the About.js file
- replace experience data in Experience.js with your own experiences
- edit the skills in Skills.js
- update all contact information and links throughout the website

