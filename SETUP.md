# FBX Next.js Setup Guide

This guide will walk you through setting up the FBX Technologies Next.js website with Auth0 authentication.

## Prerequisites

1. **Install Node.js** (version 18 or higher):
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **Install npm** (comes with Node.js):
   - Verify installation: `npm --version`

## Step 1: Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

This will install all the required dependencies including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Auth0 Next.js SDK

## Step 2: Set Up Auth0

1. **Create an Auth0 Account**:
   - Go to [auth0.com](https://auth0.com) and sign up
   - Create a new tenant (your domain)

2. **Create a New Application**:
   - In the Auth0 Dashboard, go to "Applications"
   - Click "Create Application"
   - Name it "FBX Website"
   - Select "Regular Web Application"
   - Click "Create"

3. **Configure Application Settings**:
   - In your application settings, configure the following URLs:
   
   **Allowed Callback URLs:**
   ```
   http://localhost:3000/api/auth/callback
   ```
   
   **Allowed Logout URLs:**
   ```
   http://localhost:3000
   ```
   
   **Allowed Web Origins:**
   ```
   http://localhost:3000
   ```

4. **Get Your Credentials**:
   - Copy your **Domain** (e.g., `dev-xyz.us.auth0.com`)
   - Copy your **Client ID**
   - Copy your **Client Secret**

## Step 3: Configure Environment Variables

1. **Create Environment File**:
   ```bash
   copy env.example .env.local
   ```

2. **Generate AUTH0_SECRET**:
   ```bash
   openssl rand -hex 32
   ```
   Copy the output (it will be a 64-character string)

3. **Edit .env.local**:
   Replace the placeholder values with your actual Auth0 credentials:
   ```env
   AUTH0_SECRET='your_generated_secret_here'
   AUTH0_BASE_URL='http://localhost:3000'
   AUTH0_ISSUER_BASE_URL='https://YOUR_DOMAIN'
   AUTH0_CLIENT_ID='your_client_id'
   AUTH0_CLIENT_SECRET='your_client_secret'
   ```

## Step 4: Start Development Server

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

## Step 5: Test Authentication

1. **Visit the website** and click "Sign In" in the header
2. **You'll be redirected to Auth0** for authentication
3. **Sign up or sign in** with your preferred method
4. **You'll be redirected back** to the website
5. **Check the header** - you should see your name and a "Sign Out" option
6. **Click "Dashboard"** to access the protected page

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── auth/          # Auth0 API routes
│   ├── about/             # About page
│   ├── contact/           # Contact pages
│   ├── dashboard/         # Protected dashboard
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

## Available Pages

- **Home** (`/`) - Main landing page
- **About** (`/about`) - Company information
- **Contact** (`/contact/general`) - Contact form
- **Dashboard** (`/dashboard`) - Protected user dashboard (requires login)

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Troubleshooting

### Common Issues

1. **"Cannot find module" errors**:
   - Run `npm install` to ensure all dependencies are installed
   - Check that Node.js version is 18 or higher

2. **Auth0 not working**:
   - Verify all environment variables are set correctly
   - Check that callback URLs match exactly
   - Ensure Auth0 application type is "Regular Web Application"

3. **Styling issues**:
   - Clear browser cache
   - Check that Tailwind CSS is properly configured
   - Verify custom CSS classes are defined

4. **Build errors**:
   - Run `npm run lint` for detailed error messages
   - Check TypeScript types
   - Verify all imports are correct

### Getting Help

If you encounter issues:

1. Check the browser console for errors
2. Check the terminal for build errors
3. Verify all environment variables are set
4. Ensure Auth0 application is configured correctly

## Next Steps

Once the basic setup is working:

1. **Customize the design** by modifying `src/styles/globals.css`
2. **Add more pages** by creating new files in `src/app/`
3. **Implement form handling** for the contact forms
4. **Add database integration** for user data
5. **Deploy to production** (Vercel recommended)

## Production Deployment

For production deployment:

1. **Update Auth0 settings** with your production domain
2. **Set production environment variables**
3. **Deploy to your preferred platform** (Vercel, Netlify, etc.)
4. **Configure custom domain** if needed

The website is now ready for development and can be extended with additional features as needed! 