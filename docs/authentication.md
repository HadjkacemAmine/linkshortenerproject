# Authentication Standards

All authentication in this application is handled exclusively by **Clerk**. No other authentication methods should be implemented.

## Core Rules
- Clerk is the single source of truth for all user authentication
- Never implement alternative auth systems (JWT, sessions, custom OAuth, etc.)
- Do not store custom password hashing or user credentials

## Protected Routes

### /dashboard
- **Requirement**: User must be logged in to access
- **Implementation**: Use `auth()` from `@clerk/nextjs` middleware or route handlers
- **Redirect behavior**: Unauthenticated users should be redirected to the sign-in modal

### /
- **Requirement**: Logged-in users must be redirected to `/dashboard`
- **Implementation**: Check user session and redirect in the page component or middleware
- **Behavior**: Only guests should see the homepage

## Sign In & Sign Up Modals

- Sign in and sign up flows must **always** launch as modals, never full-page redirects
- Use Clerk's `<SignInButton>` and `<SignUpButton>` components with `mode="modal"` (default)
- Configure modal UI through Clerk's dashboard or the `<ClerkProvider>` appearance prop
- Keep the modal experience lightweight and non-intrusive

## Implementation Checklist

When working with authentication:
- ✓ Use `auth()` for server-side authentication checks
- ✓ Use `useAuth()` hook for client-side checks
- ✓ Wrap protected components with `<SignedIn>` / `<SignedOut>` Clerk components
- ✓ Test redirect behavior for both authenticated and unauthenticated users
- ✓ Ensure modals do not interfere with page layout
