import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navigation
        headings={["contact", "about", "prices", "therapy", "kink"]}
        styleModifier="kink"
      />
      <main>
        <div class="page-title">
          <p>Contact</p>
        </div>
      </main>
    </>
  );
}
