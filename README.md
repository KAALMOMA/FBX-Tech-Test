# FBX Technologies - Next.js Website

This is a Next.js conversion of the original FBX Technologies website with Auth0 authentication integration.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Auth0** authentication
- **Responsive design**
- **SEO optimized**

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Auth0:**
   - Go to [Auth0 Dashboard](https://manage.auth0.com/)
   - Create a new application
   - Set the application type to "Regular Web Application"
   - Configure the following URLs:
     - Allowed Callback URLs: `http://localhost:3000/api/auth/callback`
     - Allowed Logout URLs: `http://localhost:3000`
     - Allowed Web Origins: `http://localhost:3000`

3. **Configure environment variables:**
   - Copy `env.example` to `.env.local`
   - Fill in your Auth0 credentials:
     ```env
     AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
     AUTH0_BASE_URL='http://localhost:3000'
     AUTH0_ISSUER_BASE_URL='https://YOUR_DOMAIN'
     AUTH0_CLIENT_ID='your_client_id'
     AUTH0_CLIENT_SECRET='your_client_secret'
     ```

4. **Generate AUTH0_SECRET:**
   ```bash
   openssl rand -hex 32
   ```

## Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── auth/          # Auth0 API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
│   └── auth0-config.ts    # Auth0 configuration
└── styles/                # Additional styles
public/
└── images/                # Static images
```

## Key Components

### Header Component
- Navigation menu with dropdowns
- Auth0 sign-in/sign-out functionality
- Responsive design

### Footer Component
- Social media links
- Footer navigation
- Company information

### Auth0 Integration
- User authentication
- Protected routes (can be added)
- User profile management

## Styling

The project uses Tailwind CSS with custom components that match the original design:

- **Color Scheme:** Primary colors (red, blue, purple gradient)
- **Typography:** Inter and Lacquer fonts
- **Layout:** Responsive grid system
- **Animations:** Smooth transitions and hover effects

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
- Update `AUTH0_BASE_URL` to your production domain
- Configure Auth0 application settings for production
- Build and deploy using your preferred platform

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Converting Additional Pages

To convert more pages from your original website:

1. **Create new page files** in `src/app/` (e.g., `about/page.tsx`)
2. **Copy and convert HTML** to JSX components
3. **Update navigation links** in the Header component
4. **Add any page-specific styles** to `globals.css`

## Troubleshooting

### Common Issues

1. **Auth0 not working:**
   - Check environment variables
   - Verify Auth0 application settings
   - Ensure callback URLs are correct

2. **Styling issues:**
   - Check Tailwind CSS configuration
   - Verify custom CSS classes are defined
   - Clear browser cache

3. **Build errors:**
   - Check TypeScript types
   - Verify all imports are correct
   - Run `npm run lint` for detailed errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to FBX Technologies. 