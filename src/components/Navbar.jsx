/* eslint-disable react/no-unescaped-entities */
import Fragment from "react";
// import Donate from "./Donate";
// import JoinUs from "./Join Us";
// import DropDown from "./Services";
import logo from "../assets/navy.png";
import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Menu, MenuHandler, MenuList, Button, } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { PresentationChartBarIcon, UserPlusIcon, CurrencyRupeeIcon, ServerStackIcon } from "@heroicons/react/24/solid";
import { List, ListItem, Card, Typography, ListItemPrefix, Accordion, AccordionHeader, AccordionBody, Alert } from "@material-tailwind/react";

export default function Navbar() {

  {/* Text Change */}

  const [text, setText] = useState("N.A.V Yuva Foundation");
  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Nurturing Aide Valuing Yuva Foundation");
    }, 2000); // Change text after 5 seconds
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

   {/* Burger Menu */}

  const [nav, setNav] = useState(false);    
  const handleNav = () => setNav(!nav);
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const [openMenu4, setOpenMenu4] = useState(false);

  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)

    return (
        <>
          <div className="top-0 left-0 h-16 md:h-24 w-screen border-b-2 border-orange-600 shadow-md shadow-gray-200 overflow-hidden">

                  <div className="w-fit h-16 md:h-24 flex items-center space-x-96">
                    <div className="md:min-h-24 flex items-center space-x-4 md:space-x-6">
                      <img
                        className="ml-6 h-10 w-16 md:h-16 md:w-32 md:ml-12"
                        src={logo}
                        alt="n.a.vyuva"
                      />
                      <div className="mr-4 md:mr-6 md:h-16 h-12 w-1 inline-block bg-orange-600 opacity-100 dark:opacity-50"></div>
                      <span id="name" className="w-40 md:w-72 font-bold text-[12.9px] uppercase cursor-default text-blue-900 md:text-xl">{text}</span>

                    {/* Burger Menu */}

                    <div onClick={handleNav} className="m-4 pl-6 sm:pl-8 md:pl-12 block md:hidden">
                        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} color="black"/>}
                      </div>

                      <div className={!nav ? 'absolute top-0 -left-[100%] h-full ease-in-out duration-500' : 'absolute top-0 -left-4 w-[72%] h-[750px] overscroll-contain border-r-2 border-r-orange-600 bg-black overflow-y-scroll ease-in-out duration-500 overflow-hidden' }>
                        <div>
                            <Card className="rounded-none h-[750px] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                              <div className="mb-3 top-0 flex items-center gap-3">
                                <img src={logo} alt="brand" className="ml-2 h-8 w-14" />
                                <Typography variant="h5" color="blue-gray" className="text-[0.98rem] text-blue-900 uppercase font-bold">
                                  N.A.V Yuva Foundation
                                </Typography>
                              </div>
                              <hr className="mt-1 border-blue-gray-50" />
                              <List>
                                <Accordion
                                  open={open === 1}
                                  icon={
                                    <ChevronDownIcon
                                      strokeWidth={2.5}
                                      className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                                    />
                                  }
                                >
                                  <ListItem className="p-0" selected={open === 1}>
                                    <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-2">
                                      <ListItemPrefix>
                                        <PresentationChartBarIcon className="h-5 w-5" />
                                      </ListItemPrefix>
                                      <Typography color="blue-gray" className="mr-auto font-normal">
                                        Services
                                      </Typography>
                                    </AccordionHeader>
                                  </ListItem>
                                  <AccordionBody className="py-1">
                                    <List className="p-0">
                                      <ListItem onClick={() => setIsOpen(true)}>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Career Counselling
                                      </ListItem>
                                      <ListItem onClick={() => setIsOpen2(true)}>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Women Empowerment
                                      </ListItem>
                                      <ListItem onClick={() => setIsOpen3(true)}>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Blood Donation
                                      </ListItem>
                                      <ListItem onClick={() => setIsOpen4(true)}>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Environment Protection
                                      </ListItem>
                                      <ListItem onClick={() => setIsOpen5(true)}>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Food Distribution
                                      </ListItem>
                                    </List>
                                  </AccordionBody>
                                </Accordion>
                                <hr className="border-blue-gray-50" />
                                <Accordion
                                  open={open === 2}
                                  icon={
                                    <ChevronDownIcon
                                      strokeWidth={2.5}
                                      className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                                    />
                                  }
                                >
                                  <ListItem className="p-0" selected={open === 2}>
                                    <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-2">
                                      <ListItemPrefix>
                                        <ServerStackIcon className="h-5 w-5" />
                                      </ListItemPrefix>
                                      <Typography color="blue-gray" className="mr-auto font-normal">
                                        Grievences
                                      </Typography>
                                    </AccordionHeader>
                                  </ListItem>
                                  <AccordionBody className="py-1">
                                    {/* <List className="p-0">
                                      <ListItem>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        1
                                      </ListItem>
                                      <ListItem>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        2
                                      </ListItem>
                                    </List> */}
                                  </AccordionBody>
                                </Accordion>
                                <hr className="border-blue-gray-50" />
                                <Accordion
                                  open={open === 3}
                                  icon={
                                    <ChevronDownIcon
                                      strokeWidth={2.5}
                                      className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
                                    />
                                  }
                                >
                                  <ListItem className="p-0" selected={open === 3}>
                                    <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-2">
                                      <ListItemPrefix>
                                        <CurrencyRupeeIcon className="h-5 w-5" />
                                      </ListItemPrefix>
                                      <Typography color="blue-gray" className="mr-auto font-normal">
                                        Donate
                                      </Typography>
                                    </AccordionHeader>
                                  </ListItem>
                                  <AccordionBody className="py-1">
                                    <List className="p-0">
                                      <ListItem onClick={() => setIsOpen6(true)}>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Monatry Funds
                                      </ListItem>
                                      {/* <ListItem>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        XYZ
                                      </ListItem> */}
                                    </List>
                                  </AccordionBody>
                                </Accordion>
                                <hr className="border-blue-gray-50" />
                                <Accordion
                                  open={open === 4}
                                  icon={
                                    <ChevronDownIcon
                                      strokeWidth={2.5}
                                      className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`}
                                    />
                                  }
                                >
                                  <ListItem className="p-0" selected={open === 4}>
                                    <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-2">
                                      <ListItemPrefix>
                                        <UserPlusIcon className="h-5 w-5" />
                                      </ListItemPrefix>
                                      <Typography color="blue-gray" className="mr-auto font-normal">
                                        Join Us
                                      </Typography>
                                    </AccordionHeader>
                                  </ListItem>
                                  <AccordionBody className="py-1">
                                    <List className="p-0">
                                      <ListItem>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        <a href="https://forms.gle/yXQ2hgKSwSQGrhEs5" target="_blank">As a Member</a>
                                      </ListItem>
                                      <ListItem>
                                        <ListItemPrefix>
                                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        <a href="https://forms.gle/poZxfsDYp7doFbM76" target="_blank">As a Volunteer</a>
                                      </ListItem>
                                    </List>
                                  </AccordionBody>
                                </Accordion>
                                <hr className="border-blue-gray-50" />
                                {/* <ListItem>
                                  <ListItemPrefix>
                                    <PowerIcon className="h-5 w-5" />
                                  </ListItemPrefix>
                                  Log Out
                                </ListItem> */}
                              </List>
                              {/* <Alert open={openAlert} className="mt-24 mb-3">
                                <CubeTransparentIcon className="mb-4 h-12 w-12" />
                                <Typography variant="h6" className="mb-1">
                                  Donate to Our Foundation
                                </Typography>
                                <Typography variant="small" className="w-52 font-normal opacity-80">
                                  These donations are used for various purposes 
                                  like Women Empowerment, Blood Donation, 
                                  Environment Protection and even Food Distribution.
                                </Typography>
                                <div className="mt-4 flex gap-3"> */}
                                  {/* <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    className="font-medium opacity-80"
                                    onClick={() => setOpenAlert(false)}
                                  >
                                    Dismiss
                                  </Typography> */}
                                  {/* <Typography as="a" href="" variant="small" className="p-2 text-neutral-700 font-medium rounded-lg bg-white">
                                    Donate Now
                                  </Typography>
                                </div>
                              </Alert> */}
                            </Card>
                          </div>
                        </div>
                      </div>

                    {/* Navbar Components */}

                    <div className="hidden h-28 md:flex">
                      <div className="w-[1020px] grid grid-rows-2">
                        <div className="max-h-10 flex flex-row rounded-bl-xl mt-1 border-b-2 bg-orange-500 bg-opacity-80 shadow-lg">
                          {/* <div className=''>Language</div> */}
                            <div>
                              
                            </div>
                          </div>

                          <div className="flex space-x-12 h-10 -mt-1">
                            
                            {/* Services */}

                            <Menu open={openMenu} handler={setOpenMenu} allowHover className="">
                              <MenuHandler>
                                <Button
                                  variant="text"
                                  className="flex items-center gap-3 text-base capitalize tracking-normal font-medium"
                                >
                                  Services{" "}
                                  <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${
                                      openMenu ? "rotate-180" : ""
                                    }`}
                                  />
                                </Button>
                              </MenuHandler>
                                <MenuList>
                                  <List>
                                    <ListItem onClick={() => setIsOpen(true)} className="hover:bg-neutral-200">
                                      Carrer Counselling
                                    </ListItem>
                                    <ListItem onClick={() => setIsOpen2(true)} className="hover:bg-neutral-200">
                                      Women Empowerment
                                    </ListItem>
                                    <ListItem onClick={() => setIsOpen3(true)} className="hover:bg-neutral-200">
                                      Blood Donation
                                    </ListItem>
                                    <ListItem onClick={() => setIsOpen4(true)} className="hover:bg-neutral-200">
                                      Environment Protection
                                    </ListItem>
                                    <ListItem onClick={() => setIsOpen5(true)} className="hover:bg-neutral-200">
                                      Food Distribution
                                    </ListItem>
                                  </List>
                              </MenuList>
                            </Menu>

                            {/* Grievences */}

                            <Menu open={openMenu2} className="">
                              <MenuHandler>
                                <Button
                                  variant="text"
                                  className="flex items-center gap-3 text-base capitalize tracking-normal font-medium"
                                >
                                  Grievences{" "}
                                  <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${
                                      openMenu2 ? "rotate-180" : ""
                                    }`}
                                  />
                                </Button>
                              </MenuHandler>
                              <MenuList >
                                  {/* <List>
                                    <ListItem className="hover:bg-neutral-200">
                                      1
                                    </ListItem>
                                    <ListItem className="hover:bg-neutral-200">
                                      2
                                    </ListItem>
                                  </List> */}
                              </MenuList>
                            </Menu>

                            {/* Donate */}

                            <Menu open={openMenu3} handler={setOpenMenu3} allowHover className="">
                              <MenuHandler>
                                <Button
                                  variant="text"
                                  className="flex items-center gap-3 text-base capitalize tracking-normal font-medium"
                                >
                                  Donate{" "}
                                  <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${
                                      openMenu3 ? "rotate-180" : ""
                                    }`}
                                  />
                                </Button>
                              </MenuHandler>
                              <MenuList >
                                  <List>
                                    <ListItem onClick={() => setIsOpen6(true)} className="hover:bg-neutral-200">
                                      Monatry Funds
                                    </ListItem>
                                    {/* <ListItem className="hover:bg-neutral-200">
                                      2
                                    </ListItem> */}
                                  </List>
                              </MenuList>
                            </Menu>

                            {/* Grievences */}

                            <Menu open={openMenu4} handler={setOpenMenu4} allowHover className="">
                              <MenuHandler>
                                <Button
                                  variant="text"
                                  className="flex items-center gap-3 text-base capitalize tracking-normal font-medium"
                                >
                                  Join Us{" "}
                                  <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${
                                      openMenu4 ? "rotate-180" : ""
                                    }`}
                                  />
                                </Button>
                              </MenuHandler>
                              <MenuList >
                                  <List>
                                    <ListItem className="hover:bg-neutral-200">
                                      <a href="https://forms.gle/yXQ2hgKSwSQGrhEs5" target="_blank">As a Member</a>
                                    </ListItem>
                                    <ListItem className="hover:bg-neutral-200">
                                    <a href="https://forms.gle/poZxfsDYp7doFbM76" target="_blank">As a Volunteer</a>
                                    </ListItem>
                                  </List>
                              </MenuList>
                            </Menu>

                            {/* Transitions */}

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
                                                Career Counselling
                                              </Dialog.Title>
                                              <div className="mt-2">
                                                <p className="mt-4 text-xl text-gray-500 text-justify hyphens-auto">
                                                  According to Nelson Mandela "Education is the most powerful weapon with you can use to change the world."
                                                  Through this wing of our NGO, we work to promote higher education specially in rural areas. 
                                                  This wing works in collaboration with Education Department of the district. 
                                                  We provide different services like career counselling to the students of 9 to 12 class so that they can be clarified about their future endeavours.
                                                </p>
                                              </div>
                                    
                                          <div className="mt-4">
                                            <button
                                              type="button"
                                              className="mt-4 inline-flex justify-center rounded-md border-2 border-orange-600 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-offset-2"
                                              onClick={() => setIsOpen(false)}
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
                                                Women Empowerment
                                              </Dialog.Title>
                                              <div className="mt-2">
                                                <p className="mt-4 text-xl text-gray-500 text-justify hyphens-auto">
                                                There is a difference between having rights and have the knowledge how to use your rights in a right direction.
                                                This specific wing of the NGO is lead by Miss Ankita Pandey as a project manager.
                                                She, along with the team, is working tirelessly to empower the women by making them aware of their rights.
                                                Not only this, she also organises various programs where she can addresses the queries of girls/ladies directly.
                                                </p>
                                              </div>
                                    
                                          <div className="mt-4">
                                            <button
                                              type="button"
                                              className="mt-4 inline-flex justify-center rounded-md border-2 border-orange-600 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-offset-2"
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
                                    
                              <Transition appear show={isOpen3} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={() => setIsOpen3(false)}>
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
                                                Blood Donation
                                              </Dialog.Title>
                                              <div className="mt-2">
                                                <p className="mt-4 text-xl text-gray-500 text-justify hyphens-auto">
                                                This very wing of the NGO is lead by the director of the NGO himself. This wing works in collaboration with government hospital.
                                                We understand the importance of every drop of blood of a human being and that is why working collectively to keep the every breath alive.
                                                </p>
                                              </div>
                                    
                                          <div className="mt-4">
                                            <button
                                              type="button"
                                              className="mt-4 inline-flex justify-center rounded-md border-2 border-orange-600 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-offset-2"
                                              onClick={() => setIsOpen3(false)}
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
                                    
                              <Transition appear show={isOpen4} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={() => setIsOpen4(false)}>
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
                                                Environment Protection
                                              </Dialog.Title>
                                              <div className="mt-2">
                                                <p className="mt-4 text-xl text-gray-500 text-justify hyphens-auto">
                                                "When we talk about the lives, we only include humans and animals, forgetting the very fundamental unit of our existence, the trees" says the project head of the wing, Miss Ritu.
                                                As our country is progressing towards the list of developed nations, so is the need for a healthy environment increasing.
                                                This wing works in collaboration with the Forest Department of the district where we try to bring a change in the Outlook of people towards nature.
                                                </p>
                                              </div>
                                    
                                          <div className="mt-4">
                                            <button
                                              type="button"
                                              className="mt-4 inline-flex justify-center rounded-md border-2 border-orange-600 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-offset-2"
                                              onClick={() => setIsOpen4(false)}
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
                                    
                              <Transition appear show={isOpen5} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={() => setIsOpen5(false)}>
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
                                                Food Distribution
                                              </Dialog.Title>
                                              <div className="mt-2">
                                                <p className="mt-4 text-xl text-gray-500 text-justify hyphens-auto">
                                                Access to a healthy and nutritious meal is a basic human right. Sadly, millions of people around the world still struggle with hunger, Malnutrition and food insecurity.
                                                This wing of our NGO distributes food aid to people in need such as the homeless,low income families and refugees.
                                                We also provide emergency food assistance during natural disaster, conflicts or other cries.
                                                We not only feed human beings but also the animals around us such as dogs, cow etc. 
                                                This wing works in the collaboration with local people.
                                                </p>
                                              </div>
                                    
                                          <div className="mt-4">
                                            <button
                                              type="button"
                                              className="mt-4 inline-flex justify-center rounded-md border-2 border-orange-600 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-offset-2"
                                              onClick={() => setIsOpen5(false)}
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

                              <Transition appear show={isOpen6} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={() => setIsOpen6(false)}>
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
                                              onClick={() => setIsOpen6(false)}
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

                            {/* <div className="p-2 h-10 border border-orange-600 hover:text-orange-600 shadow-sm hover:shadow-orange-600"><DropDown/></div>
                            <div className="text-base font-semibold text-gray-900 hover:text-orange-600 shadow-sm hover:shadow-orange-600">
                              <button type="button" className="p-2 border border-orange-600 inline-block bg-primary text-base font-semibold">
                                Grivences
                              </button>
                              </div>
                              <div className="p-2 h-10 border border-orange-600 hover:text-orange-600 shadow-sm hover:shadow-orange-600">
                                <Donate/> */}
                            {/* <div className="text-base font-semibold text-gray-900 hover:text-orange-600 shadow-sm hover:shadow-orange-600">
                              <button type="button" className="p-2 border border-orange-600 inline-blockbg-primary text-base font-semibold">
                                Donate
                              </button> */}
                            {/* </div> */}
                            {/* <div className="p-2 h-10 border border-orange-600 hover:text-orange-600 shadow-sm hover:shadow-orange-600"><JoinUs/></div> */}
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
        </>
    )
}

{/* 
  
// Search Bar

<div className="xl:w-8">
<div className="relative flex w-[5%] flex-wrap">

    // Search Icon

    <span
        className="input-group-text flex items-center rounded-full bg-black whitespace-nowrap px-1.5 py-1.5 text-center text-base font-normal text-white hover:dark:text-orange-600"
        id="basic-addon2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd" />
        </svg>
    </span>
</div>
</div>

  */}