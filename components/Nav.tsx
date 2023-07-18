'use client'
import Link from "@node_modules/next/dist/client/link";
import Image from "@node_modules/next/dist/client/image";
import {getProviders, signIn, signOut, useSession} from "@node_modules/next-auth/react";
import {useEffect, useState} from "react";

const Nav = () => {
  const {data: session} = useSession()
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    const setUpProviders = async () => {
      const response: any = await getProviders();
      setProviders(response)
    }
    setUpProviders();
  }, []);

  return (
    <nav className={"flex-between w-full mb-16 pt-3"}>
      <Link href={"/"} className={"flex gap-2 flex-center"}>
        <Image
          src={'/assets/images/logo.svg'}
          alt={'prompt list logo'}
          width={30}
          height={30}
          className={"object-contain"}
        />
        <p className={"max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide"}>Prompt List</p>
      </Link>
      {/*desktop*/}
      <div className={"sm:flex hidden"}>
        {session?.user ? (
          <div className={"flex gap-3 md:gap-5"}>
            <Link
              href={"/create-prompt"}
              className={"rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"}>
              Create Post
            </Link>
            <button
              type={"button"}
              // @ts-ignore
              onClick={signOut}
              className={"rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center"}
            >
              Sign Out
            </button>
            <Link href={"profile"}>
              <Image
                src={session?.user.image+''}
                alt={"profile"}
                width={37}
                height={37}
                className={"rounded-full"}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider: any) => (
              <button
                type={"button"}
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className={"rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"}
              >
                Sign In
              </button>
            ))}
          </>
        )}
      </div>
      {/*mobile*/}
      <div className={"sm:hidden flex relative"}>
        {session?.user ? (
          <div className={'flex'}>
            <Image
              src={session?.user.image+''}
              alt={"profile"}
              width={37}
              height={37}
              className={"rounded-full"}
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            {toggleDropdown && (
              <div
                className={"absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end"}>
                <Link
                  href={'/profile'}
                  className={"text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"}
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href={'/create-prompt'}
                  className={"text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"}
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type={"button"}
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className={"mt-5 w-full rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider: any) => (
              <button
                type={"button"}
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className={"rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"}
              >
                Sign In
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
