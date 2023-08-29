import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
console.log('midleware running');
export default authMiddleware({});
 
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Protect most routes
    "/", // Protect the root route
    "/(api|trpc)(.*)", // Protect API and trpc routes
    "/public(.*)", // Allow public access to the /public route
  ],
};
 
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
 