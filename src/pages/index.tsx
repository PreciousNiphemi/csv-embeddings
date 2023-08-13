import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { CsvUpload } from "@/components/CsvUpload/CsvUpload";
export default function Home() {
  const [files, setFiles] = useState<File>();
  const [searchField, setSearchField] = useState<string>();
  const [positiveTraits, setPositiveTraits] = useState<string>("");
  const [negativeTraits, setNegativeTraits] = useState<string>("");

  return (
    <main>
      <div className="min-h-screen ">
        <div className="0 bg-white px-4 py-5 sm:px-6">
          <div className="-ml-4 -mt-2 flex sm:flex-row flex-col flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-2 ">
              <h3 className="text-base text-center font-semibold leading-6 text-gray-900">
                CSV Rank
              </h3>
            </div>
            <div className="ml-4 mt-2 ">
              <div className="relative z-0 flex flex-1 items-center justify-center">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      value={searchField}
                      onChange={(e) => setSearchField(e.target.value)}
                      className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-4 mt-2 flex-shrink-0 bg-green">
              <button
                type="button"
                className="relative inline-flex items-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Rank
              </button>
            </div>
          </div>
        </div>

        <div className=" min-h-[90vh] flex flex-col justify-center flex-1">
          <div>
            <div className="relative px-10 z-0 flex flex-1 items-center justify-center">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Positive traits
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="positiveTraits"
                    name="positiveTraits"
                    value={positiveTraits}
                    onChange={(e) => setPositiveTraits(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Positive traits"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="relative px-10 mt-4 z-0 flex flex-1 items-center justify-center">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Negative traits
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="negativeTraits"
                    name="negativeTraits"
                    value={negativeTraits}
                    onChange={(e) => setNegativeTraits(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Negative traits"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <CsvUpload files={files} setFiles={setFiles} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
