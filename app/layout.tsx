import "./globals.css";
import PageTransitionWrapper from "../components/PageTransitionWrapper";

export const metadata = {
  title: "Mauka – Student-Powered Change",
  description: "Connecting students and NGOs through India's most powerful student-led movement.",
  keywords: [
    "Mauka",
    "Students for NGOs",
    "Student Council",
    "Volunteering India",
    "JPIS",
    "Student-led change",
    "Education Access",
    "Youth Service",
    "Ekal Vidyalaya",
    "Mauka Movement"
  ],
  openGraph: {
    title: "Mauka – Powered by Students, Built for Impact",
    description: "Transforming India's last mile through student-led volunteerism and grassroots NGO partnerships.",
    url: "https://mauka.org.in",
    siteName: "Mauka",
    images: [
      {
        url: "https://mauka.org.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mauka Website Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauka – India’s Student-Led Movement",
    description: "A movement that connects willing students with waiting causes.",
    site: "@jpischool",
    creator: "@veerforimpact",
    images: ["https://mauka.org.in/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
      </body>
    </html>
  );
}
