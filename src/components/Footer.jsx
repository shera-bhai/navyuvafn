/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/navy.png";
import { Fragment, useState} from "react";
import { Footer } from "flowbite-react";
import { FaXTwitter } from 'react-icons/fa6';
import { Dialog,  Transition } from '@headlessui/react';
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footerr() {

const [isOpen, setIsOpen] = useState(false)
const [isOpen2, setIsOpen2] = useState(false)

    return (
        <>
        <Footer container className="bg-neutral-800 rounded-none">
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="https://nurturingaidevaluingyuvafoundation.org"
                        src={logo}
                        alt="N.A.V Yuva Foundation Logo"
                        name="N.A.V Yuva Foundation" />
                    <div className="my-6 flex justify-center space-x-4 md:space-x-12">
                        <a href="https://drive.google.com/file/d/1xhZy7Wk-vFdBGlLlDfB-OZAXQ31uG8I2/view?usp=sharing" target="_blank" className="text-gray-500 hover:text-white">COI</a>
                        <a><button onClick={() => setIsOpen(true)} className="text-gray-500 hover:text-white">Donate Now</button></a>
                        <a><button onClick={() => setIsOpen2(true)} className="text-gray-500 hover:text-white">Join Us</button></a>
                        <Footer.Icon href="https://www.instagram.com/nav_yuva_foundation" icon={BsInstagram} />
                        <Footer.Icon href="https://www.linkedin.com/company/n-a-v-yuva-foundation/" icon={BsLinkedin} />
                        <Footer.Icon href="https://x.com/N_A_V_Yuva" icon={FaXTwitter} className="md:mr-20" />
                    </div>
                </div>
                <Footer.Divider />
                <Footer.Copyright by="N.A.V Yuva Foundation™" year={2024} />
                <div className="flex flex-col mt-4 gap-4 text-sm text-center text-gray-400">
                  <p>Maintained by <a>Harsh Yadav</a> and Addl. Director 
                  (Outreach & PR) on behalf of N.A.V Yuva Foundation (Regd.)
                  </p>
                  <p>The images and content are copyrighted by N.A.V Yuva Foundation , 
                    violations of fair use policy will be subjected to legal action.
                  </p>
                </div>
            </div>
        </Footer>

        {/* /* Transitions */}

            <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>
            
                <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full md:w-1/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-medium leading-8 text-gray-900"
                      >
                        Guidelines - Donate Now
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-4 text-xl text-gray-500 hyphens-auto">
                          1. Go to <a className="underline text-blue-600" href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm" target="_blank">State Bank of India Collect</a> Website.<br/>
                          2. In the Search Bar, search for "<a className="italic uppercase">Nurturing Aide Valuing Yuva Foundation</a>".<br/>
                          3. Select the appropriate option.<br/>
                          4. Check for the Address as "<a className="italic">ROHTAK,HARYANA, ROHTAK-124001</a>".<br/>
                          4. Fill in the all the details and proceed to payment.<br/>
                          5. You will receive a confirmation mail from SBI Collect.<br/>
                          6. You can also download the receipt from the SBI Collect Website.<br/>
                        </p>
                      </div>
            
                  <div className="mt-4">
                    <button
                      type="button"
                      className="mt-4 mr-8 inline-flex justify-center rounded-md border-2 border-orange-600 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                    <a
                      type="button"
                      target="_blank"
                      href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
                      className="mt-4 inline-flex justify-center rounded-md border-2 text-white bg-orange-600 border-orange-600 px-4 py-2 text-sm font-medium hover:shadow-orange-400 dark:shadow-md hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-offset-2"
                    >
                      Go to Website
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
            </div>
          </Dialog>
        </Transition>

        <Transition appear show={isOpen2} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen2(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full md:w-1/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-3xl font-medium leading-8 text-gray-900"
                                >
                                    JOIN US
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="mt-8 text-xl text-gray-500 text-justify hyphens-auto">
                                        1. Join Us As a <a className="underline text-blue-600" href="https://forms.gle/yXQ2hgKSwSQGrhEs5" target="_blank">Member</a><br/><br/>
                                        2. Join Us As a <a className="underline text-blue-600" href="https://forms.gle/poZxfsDYp7doFbM76" target="_blank">Volunteer</a><br/><br/>
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border-2 border-orange-600 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-offset-2"
                                        onClick={() => setIsOpen2(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
    );
}