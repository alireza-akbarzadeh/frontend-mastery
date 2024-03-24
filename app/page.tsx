import { Metadata } from "next"
import { Button } from "components/Button/Button"
// project technology
// url: "https://next-enterprise.vercel.app/",

export const metadata: Metadata = {
  title: "frontend mastery",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <Button intent="primary" size="sm">
          button
        </Button>
      </section>
    </>
  )
}
