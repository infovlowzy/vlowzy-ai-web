# Legal Pages Setup Guide

This guide explains how to add the Privacy Policy and Terms & Conditions pages to your main website (vlowzy.com).

## Files to Copy

Copy these files to your main website repo:
- `src/pages/PrivacyPolicy.tsx`
- `src/pages/TermsAndConditions.tsx`

## Setup Instructions

### Option 1: React/Next.js Website

1. Copy the two files to your `pages/` or `src/pages/` directory
2. Add routes in your router:

```tsx
// For React Router
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-and-conditions" element={<TermsAndConditions />} />

// For Next.js (pages router)
// Just place files as pages/privacy-policy.tsx and pages/terms-and-conditions.tsx
```

### Option 2: Static HTML (No React)

If your main website is plain HTML, create these files:

**privacy-policy.html** and **terms-and-conditions.html**

The content is already styled with Tailwind classes. If you don't use Tailwind, add this to your `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

### Option 3: Any Website Platform

The pages are self-contained. Just ensure:
1. Routes are publicly accessible (no login required)
2. URLs are clean: `/privacy-policy` and `/terms-and-conditions`

## Meta Developer Portal Setup

After deploying, update your Meta app settings:

1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Select your app → Settings → Basic
3. Update **Privacy Policy URL**: `https://vlowzy.com/privacy-policy`
4. Update **Terms of Service URL**: `https://vlowzy.com/terms-and-conditions`
5. Save and re-submit for review

## Important Notes

- Pages must be publicly accessible (no authentication)
- URLs must be HTTPS
- Content must be visible without JavaScript if possible (for Meta's crawler)
- Keep the "Last updated" date current when making changes

## Testing

Before submitting to Meta, verify:
1. Both URLs load without login
2. Content is fully visible
3. No broken links or missing styles
