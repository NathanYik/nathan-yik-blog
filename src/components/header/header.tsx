import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
  GoThreeBars16 as HamburgerIcon,
  GoX24 as XIcon,
} from "@qwikest/icons/octicons";

export interface HeaderProps {}

export const Header = component$<HeaderProps>((props) => {
  const isMenuOpen = useSignal(false);
  return (
    <div class="relative">
      <div class="px-5vw py-9 lg:py-12">
        <nav class="max-w-8xl mx-auto flex items-center justify-evenly">
          <Link
            class="text-primary underlined block whitespace-nowrap text-3xl font-medium transition focus:outline-none"
            href="/"
          >
            <h1>Nathan Yik</h1>
          </Link>
          <button
            class="rounded-full border-2 p-3"
            onClick$={() => (isMenuOpen.value = !isMenuOpen.value)}
          >
            {isMenuOpen.value ? (
              <XIcon font-size={24} />
            ) : (
              <HamburgerIcon font-size={24} />
            )}
          </button>
        </nav>
      </div>
      <div
        class={`${isMenuOpen.value ? "scale-y-100" : "invisible scale-y-0"} absolute flex w-full origin-top flex-col items-center bg-white transition-all duration-200 ease-out`}
      >
        <Link
          class="px-5vw w-full cursor-pointer border-b border-gray-200 py-9 transition-all duration-100 hover:bg-gray-200"
          href="/"
        >
          Home
        </Link>
        <Link
          class="px-5vw w-full cursor-pointer border-b border-gray-200 py-9 transition-all duration-100 hover:bg-gray-200"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          class="px-5vw w-full cursor-pointer border-b border-gray-200 py-9 transition-all duration-100 hover:bg-gray-200"
          href="/about"
        >
          About
        </Link>
        <Link
          class="px-5vw w-full cursor-pointer border-b border-gray-200 py-9 transition-all duration-100 hover:bg-gray-200"
          href="/resume"
        >
          Resume
        </Link>
        <div class="fixed -z-10 h-screen w-screen backdrop-blur-sm backdrop-brightness-50"></div>
      </div>
    </div>
  );
});
