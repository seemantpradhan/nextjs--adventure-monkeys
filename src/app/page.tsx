import Image from "next/image";
import styles from '@/app/ui/home.module.css';
import Link from "next/link";
import Button from '@mui/material/Button';
import AppHeader from "./ui/AppHeader";
import Counter from "./features/counter/Counter";

export default function RootPage() {
  return (
    <>
      {/* <AppHeader /> */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className={styles.shape} />
        <Image
          src="/vercel.svg"
          width={1000}
          height={760}
          style={{
            backgroundColor: 'darkgray',
            padding: '2rem'
          }}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Link
            className="mb-2 flex items-end justify-start rounded-md bg-blue-600 p-4 "
            href="/dashboard"
          >
            <div className="w-32 text-white md:w-40">
              Let's visit the Dashboard&nbsp;
            </div>
          </Link>
          <Button variant="contained">Hello world</Button>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

      </main>
    </>

  );
}
