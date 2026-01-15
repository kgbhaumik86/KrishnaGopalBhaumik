# Krishna Gopal Bhaumik - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Showcasing 15+ years of experience in SharePoint Online, Power Platform, and Microsoft 365 development.

## ✨ Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **TypeScript**: Type-safe codebase for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Component-Based**: Modular, reusable React components
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Smooth Navigation**: Fixed navbar with smooth scroll behavior
- **SEO Friendly**: Semantic HTML and meta tags for better search engine visibility

## 🚀 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Professional summary and key achievements
- **Skills**: Comprehensive skill categories with tech stack
- **Experience**: Detailed work history with key highlights
- **Projects**: Notable project highlights with clients and technologies
- **Contact**: Multiple contact methods and additional information
- **Footer**: Quick navigation and social links

## 📦 Tech Stack

- **React 18**: Modern UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend build tool
- **Lucide React**: Beautiful SVG icon library
- **Autoprefixer**: CSS vendor prefixing

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📝 Development

The development server will start on `http://localhost:5173/`

### Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Project highlights
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
├── App.tsx              # Main app component
├── main.tsx             # React entry point
└── index.css            # Global styles with Tailwind
```

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#0f172a",
      secondary: "#1e293b",
      accent: "#3b82f6",
    },
  },
}
```

### Content
Update personal information directly in component files:
- `src/components/Hero.tsx` - Name and title
- `src/components/About.tsx` - Bio and achievements
- `src/components/Skills.tsx` - Technical skills
- `src/components/Experience.tsx` - Work history
- `src/components/Projects.tsx` - Project details
- `src/components/Contact.tsx` - Contact information

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Update `vite.config.ts` with your repo name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  ...
})
```

2. Build and deploy:
```bash
npm run build
# Deploy dist folder to GitHub Pages
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

- Email: bhaumikg1986@gmail.com
- Phone: +91 9836952545
- LinkedIn: [Krishna Bhaumik](https://www.linkedin.com/in/krishna-bhaumik)
- GitHub: [@kgbhaumik86](https://github.com/kgbhaumik86)

---

**Built with ❤️ using React + TypeScript + Tailwind CSS**
