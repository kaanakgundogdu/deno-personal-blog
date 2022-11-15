/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "blog";

export function Section() {
  return (
    <section class="text-gray-400 my-10 bg-gray-900 body-font">
      <div class="container px-16 py-16 mx-auto">
        <div class="lg:w-3/3 flex flex-col sm:flex-column sm:items-center p-2 items-start mx-auto">
          <h6 class="flex-grow sm:pr-0 text-xl font-medium title-font text-white text-center">
            You can follow me on github or connect me on linkedin.
          </h6>
          <a
            href="https://github.com/kaanakgundogdu"
            target="_blank"
            class="flex-shrink-0 text-white bg-indigo-500 border-0.2 py-4 px-4 focus:outline-none hover:bg-indigo-300 rounded text-lg mt-5 sm:mt-5"
          >
            My Github Profile
          </a>
          <a
            href="https://www.linkedin.com/in/kaanakgundogdu/"
            target="_blank"
            class="flex-shrink-0 text-white bg-indigo-500 border-0.2 py-4 px-4 focus:outline-none hover:bg-indigo-300 rounded text-lg mt-5 sm:mt-5"
          >
            My Linkedin Profile
          </a>
        </div>
      </div>
    </section>
  );
}
