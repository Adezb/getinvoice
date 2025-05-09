import Link from "next/link";

export function Footer() {
  return (
    //Footer component for GetInvoice
    //Theme color is black and blue
    //Make footer to remain at the bottom of the page
    <footer className="bg-gradient-to-t from-blue-50 via-blue-100 to-blue-200 text-black py-4 mt-auto border-t border-gray-200">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} GetInvoice. All rights reserved.
        </p>
        <Link href="/privacy-policy" className="text-blue-500 hover:underline">
          Privacy Policy
        </Link>{" "}
        |
        <Link
          href="/terms-of-service"
          className="text-blue-500 hover:underline"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
