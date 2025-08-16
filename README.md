# Chukka Prakash Reddy - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Showcasing backend development skills, experience, and projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Contact Form**: Integrated with EmailJS for easy communication
- **Google Maps**: Embedded map showing location in Bangalore, India
- **SEO Optimized**: Meta tags and structured content for better search visibility

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Maps**: Google Maps Embed API
- **Deployment**: Ready for Netlify/GitHub Pages

## 📋 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About** - Professional background and expertise
3. **Experience** - Work history with timeline
4. **Skills** - Technical skills with progress bars
5. **Projects** - Featured projects with descriptions
6. **Location** - Google Maps integration
7. **Contact** - Contact form and information
8. **Footer** - Quick links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chukka-portfolio.git
   cd chukka-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📧 EmailJS Setup

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the EmailJS credentials in `src/components/Contact.jsx`:
   ```javascript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID', // Replace with your service ID
     'YOUR_TEMPLATE_ID', // Replace with your template ID
     formRef.current,
     'YOUR_PUBLIC_KEY' // Replace with your public key
   )
   ```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
  },
  secondary: {
    50: '#f8fafc',
    // ... other shades
  }
}
```

### Content
Update the following files to customize content:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - About section
- `src/components/Experience.jsx` - Work experience
- `src/components/Skills.jsx` - Skills and technologies
- `src/components/Projects.jsx` - Project showcase
- `src/components/Contact.jsx` - Contact information

### Images
Replace project images in the Projects component with your own images or use Unsplash URLs.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repository-name"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: prakashreddy412@gmail.com
- **LinkedIn**: [Chukka Prakash Reddy](https://www.linkedin.com/in/chukka-prakash-reddy)
- **GitHub**: [chukkaprakash](https://github.com/chukkaprakash)

---

Made with ❤️ by Chukka Prakash Reddy
