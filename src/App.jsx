/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import Map from './components/Map';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Trophy from './assets/trophy.png';
import Viveka from './assets/viveka3.png';
import { Fragment, useState } from 'react';
import ReadMore from './components/ReadMore';
// import LearnMore from './components/LearnMore';
import { Dialog,  Transition } from '@headlessui/react';
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

function App() {

  const [startIndex, setStartIndex] = useState(0);
  const [startIndex2, setStartIndex2] = useState(0);

  const handleNext = () => {
    if (startIndex + 1 < cards.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleNext2 = () => {
    if (startIndex2 + 3 < cards.length) {
      setStartIndex2((prevIndex) => prevIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };
  const handlePrev2 = () => {
    if (startIndex2 > 1) {
      setStartIndex2((prevIndex) => prevIndex - 3);
    }
  };

  // Dialog pop up
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)
  const [isOpen8, setIsOpen8] = useState(false)

  const [zoom, setZoom] = useState(false)

  const handleZoom = () => {setZoom(!zoom)}

  const cards = [
    { id: 1, name: 'Parveen Kumar', designation: 'Director & Founder', src: "/assets/team/Parveen.jpg" },
    { id: 2, name: 'Sumit Kumar', designation: 'Director & Co-Founder', src: "/assets/team/Sumit.jpg" },
    { id: 3, name: 'Siddharth', designation: 'Additional Director (Outreach and PR)', src: "/assets/team/Siddharth.jpg" },
    { id: 4, name: 'Ritu', designation: 'Head of Environment Wing, Content Writer', src: "/assets/team/Ritu.jpg" },
    { id: 5, name: 'Ankita Pandey', designation: 'Head of Women Empowerment Cell', src: "/assets/team/Ankita.jpg" },
    { id: 6, name: 'Deepak', designation: 'Treasurer', src: "/assets/team/Deepak.jpg" },
    { id: 7, name: 'Kirti Singh Rajput', designation: 'Women Empowerment Speaker', src: "/assets/team/Kirti.jpg" },
    { id: 8, name: 'Pooja Miglani', designation: 'Protocol Officer', src: "/assets/team/Pooja.jpg" },
    { id: 9, name: 'Mohit', designation: 'Technical Head', src: "/assets/team/Mohit.jpg" },
    { id: 10, name: 'Anoop', designation: 'Fellow', src: "/assets/team/Anoop.jpg" },
  ];

  return (
    <>
      <Navbar/>
      <div className='w-screen md:w-screen'>
        <div id='main' className='overflow-hidden bg-[url("./assets/img2.jpg")] bg-cover bg-no-repeat w-screen md: md:w-screen lg:min-w-screen max-h-screen bg-center border-b-2 border-orange-400 shadow-md shadow-gray-300'>
          <div className='overflow-hidden max-h-screen md:h-screen bg-neutral-900 bg-opacity-80'>
            <h1 className="pt-6 text-[2.2rem] mx-4 mr-[5%] pb-2 md:mx-24 md:mt-14 md:w-3/5 md:text-[5rem] font-serif font-black text-balance text-white">We not only help you, rather give you confidence to help others</h1>
            <p className='mx-4 mr-[5%] mb-4 pb-2 md: md:mx-24 md:w-2/4 md:text-2xl md:leading-10 font-serif text-md font-medium text-justify text-white'><ReadMore/></p>
          </div>
        </div>

        {/* Cards */}

            <div className='md:py-20 overflow-hidden w-screen h-screen md:h-fit flex flex-col md:flex-row md:space-x-72 md:space-y-0 justify-center items-center space-y-6 border-b-2 border-orange-400 shadow-md shadow-gray-300'>

              <div className="min-w-[14rem] md:w-[20rem] md:h-[22rem] bg-white border-2 border-gray-200 rounded-lg dark:bg-white dark:border-orange-700 shadow-md hover:shadow-orange-500">
                <a href="#inspiration" className='pt-4 md:py-6 flex cursor-default justify-center'>
                  <img width="70" height="70" className='md:h-[150px] md:w-[140px]' src="https://img.icons8.com/color/96/storytelling.png" alt="storytelling"/>
                </a>
                  <div className="p-5">
                    <a href="#inspiration">
                        <h5 className="mb-4 md:mb-8 text-2xl md:text-4xl cursor-default text-center font-bold tracking-tight text-gray-900 dark:text-gray-800">Our Inspiration</h5>
                    </a>
                    <a href="#inspiration" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-blue-300 dark:bg-white border-2 border-orange-600 hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-700">
                        Check Out
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                  </div>
              </div>

              <div className="min-w-[14rem] md:w-[20rem] md:h-[22rem] bg-white border-2 border-gray-200 rounded-lg dark:bg-white dark:border-orange-700 shadow-md hover:shadow-orange-500">
                <a href="#team" className='pt-4 md:py-6 flex cursor-default justify-center'>
                  <img width="70" height="70" className='md:h-[150px] md:w-[140px]' src="https://img.icons8.com/pastel-glyph/64/groups--v4.png" alt="groups--v4"/>
                </a>
                  <div className="p-5">
                    <a href="#team">
                        <h5 className="mb-4 md:mb-8 text-2xl md:text-4xl cursor-default text-center font-bold tracking-tight text-gray-900 dark:text-gray-800">Our Core Team</h5>
                    </a>
                    <a href="#team" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-blue-300 dark:bg-white border-2 border-orange-600 hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-700">
                        Check Out
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                  </div>
              </div>

              <div className="min-w-[14rem] md:w-[20rem] md:h-[22rem] bg-white border-2 border-gray-200 rounded-lg dark:bg-white dark:border-orange-700 shadow-md hover:shadow-orange-500">
                <a href="#starmembers" className='pt-4 md:py-6 flex cursor-default justify-center'>
                  <img width="80" height="80" className='md:h-[150px] md:w-[160px]' src={Trophy} alt="trophy-emoji"/>
                </a>
                  <div className="p-5">
                    <a href="#starmembers">
                        <h5 className="mb-4 md:mb-8 text-2xl md:text-4xl cursor-default text-center font-bold tracking-tight text-gray-900 dark:text-gray-800">Star Members</h5>
                    </a>
                    <a href="#starmembers" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-blue-300 dark:bg-white border-2 border-orange-600 hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-700">
                        Check Out
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                  </div>
              </div>
            </div>

      {/* Inspiration */}

        <div id='inspiration' className='overflow-hidden min-h-fit justify-center border-b-2 border-orange-400 shadow-md shadow-gray-300'>
          <div id='main' className='overflow-hidden bg-[url("./assets/chakra.jpg")] md:min-h-screen bg-center-c md:bg-cover bg-size-50 bg-no-repeat max-w-screen'>
          <h1 className='pt-12 font-bold font-serif text-4xl md:text-6xl text-center text-orange-600 uppercase'>Our Inspiration</h1> { /* font-light font-pacifico */ }
            <div className='flex flex-col md:flex-row justify-center items-center space-y-8'>
                <div className='mt-12 px-8 w-[70%] md:w-[55%] overflow-hidden rounded-full md:mt-28 md:ml-28 border-4 border-orange-400'><img src={Viveka} className='' alt="" />
                </div>
              <div className='inline-block text-center'>
                <p className='mx-6 md:ml-20 md:mt-32 text-3xl md:text-6xl md:leading-loose font-cursive leading-relaxed text-balance'>" Tell your body that it is strong, tell your mind that it is strong, and have unbounded faith and hope in yourself."</p>
                <p className='mt-10 mr-28 md:mr-0 mb-10 font-serif font-medium text-justify'>
                <div className="flex"><div className="ml-14 md:ml-72 bg-orange-600 w-10 text-lg rounded-full hover:pr-[8.8rem] hover:text-black transition-all"><button onClick={() => setIsOpen(true)} className='inline-flex w-36 text-sm pl-4 py-2 uppercase font-sans font-semibold'>
                  Learn More<svg className="mt-1 rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg></button></div></div>
                </p>
              </div>
            </div>

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
                    <Dialog.Panel className="w-full md:w-2/5 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-medium leading-8 text-gray-900"
                      >
                        Our Inspiration - Swami Vivekanand
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-4 text-xl text-gray-500  text-justify hyphens-auto">
                        Swami Vivekananda is widely regarded as one of the most influential spiritual leaders and youth icon in Indian history. 
                        Vivekananda's life story serves as a powerful example of courage, resilience and determination. His teachings and philosophy resonate deeply with youth, inspiring them to lead  lives of purpose, integrity and service to humanity. 
                        Swami Vivekananda's ideals profoundly influence the working of our NGO emphasizing service, compassion and selflessness. 
                        Our NGO has adopted the principle of selfless service to humany by priortizing the welfare and empowerment of marginalised communities, providing them with education, healthcare, livelihood opportunities and other essential services. 
                        Swami Vivekananda believed in the transformative power of education to uplift individuals and societies. In the same way, our NGO focuses on educational initiative such as providing career counselling, vocational training etc. to empower the students. 
                        Along with that, he stressed the importance of spiritual and moral values in shaping individuals and society. N.A.V Yuva Foundation integrates ethical principle into its programs and activities fostering a culture of compassion, integrity and social responsibility among its members and volunteers.
                        Vivekananda encouraged individuals to realise their inner potential and strive for self reliance and self development. 
                        He was also a staunch advocate for social justice and equality. N.A.V Yuva Foundation facilitate community lead development initiative empowering local residents to identify their needs and implement sustainable solution to address them. It addresses systematic injustice, advocate for policy reforms and promote human rights, gender equality and social inclusion.
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

        </div>
      </div>
          

      {/* Our Core Team */}

      <div id='team' className='overflow-hidden max-w-screen min-h-fit border-b-2 border-orange-400 shadow-md shadow-gray-300'>
        <h1 className='pt-12 font-bold text-4xl md:text-6xl text-center font-serif text-orange-600 uppercase'>Our Core Team</h1>
        <div className='mt-10 mb-10 md:-ml-32 flex justify-center items-center space-x-2 md:space-x-32'>
        <button className='md:hidden w-10 pt-1 py-2 px-2 border rounded-full font-extrabold border-orange-600 hover:text-white hover:bg-orange-600' onClick={handlePrev}>&lt;</button>
        {cards.slice(startIndex, startIndex + 1).map((card) => (
          <div id={card.id} className="md:hidden w-72 min-h-[530px] bg-white border-2 border-orange-400 rounded-lg dark:bg-white dark:border-orange-400 shadow-md hover:shadow-orange-500">
            <div className="mt-16 flex flex-col items-center pb-10">
              <img className="w-52 h-52 mb-3 rounded-full border border-orange-400 shadow-lg shadow-neutral-400" src={card.src} alt="Member"/>
              <h5 className="mt-12 mb-4 text-3xl font-medium text-gray-900 dark:text-gray-800">{card.name}</h5>
              <span className="mx-4 text-xl text-center text-gray-500 dark:text-gray-400">{card.designation}</span>
              <div className="flex mt-4 md:mt-6">
                {/* <button href="#" onClick={() => {card.set}} className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Know More</button> */}
              </div>
            </div>
          </div>
          ))}

        {/* PC Cards */}

        <button className='hidden md:block w-10 pt-1 py-2 px-2 border rounded-full font-extrabold border-orange-600 hover:text-white hover:bg-orange-600' onClick={handlePrev2}>&lt;</button>
        {cards.slice(startIndex2, startIndex2 + 3).map((cardz) => (
          <div id={cardz.id} className="hidden md:block w-72 min-h-[505px] mx-20 ease-in-out duration-500 bg-white border-2 border-orange-400 rounded-lg dark:bg-white dark:border-orange-400 shadow-md hover:shadow-orange-500">
            <div className="mt-16 flex flex-col items-center pb-10">
              <img className="w-52 h-52 mb-3 rounded-full border border-orange-400 shadow-lg shadow-neutral-400" src={cardz.src} alt="Member"/>
              <h5 className="mt-12 mb-4 text-3xl font-medium text-gray-900 dark:text-gray-800">{cardz.name}</h5>
              <span className="mx-4 text-xl text-center text-gray-500 dark:text-gray-400">{cardz.designation}</span>
              <div className="flex mt-4 md:mt-6">
                {/* <button href="#" onClick={() => {card.set}} className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Know More</button> */}
              </div>
            </div>
          </div>
          ))}
        <button className='md:hidden w-10 pt-1 pb-2 px-2 border rounded-full font-extrabold border-orange-600 hover:text-white hover:bg-orange-600' onClick={handleNext}>&gt;</button>
        <button className='hidden md:block w-10 pt-1 pb-2 px-2 border rounded-full font-extrabold border-orange-600 hover:text-white hover:bg-orange-600' onClick={handleNext2}>&gt;</button>
        </div>
      </div>


      {/* Gallery */}

      <div id='gallery' className='min-h-fit justify-center pb-12 border-b-4 border-orange-400 shadow-md shadow-gray-300'>
          <h1 className='pt-12 md:pt-16 font-bold text-4xl md:text-6xl text-center text-balance font-serif text-orange-600 uppercase'>Our Journey & Moments of Hope</h1>
          <div className='pt-12 md:pt-16 flex flex-row gap-28 justify-center items-center'>

          <TECarousel showControls ride="carousel" className='w-[90%] md:w-[70%] md:mb-4'>
        <div className="relative max-h-60 md:min-h-[700px] overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/1.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <h5 className="text-xl"></h5>
              <p>
              N.A.V Yuva President Sh.Parveen Kumar with Sh.Biplab Kumar Deb
              As Nodal Officer for National Youth day 2024 celebrations at Rohtak.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/2.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              N.A.V Yuva Foundation Secretary, Ankita Pandey administering oath of social service
              April 2024 at an event organised by the foundation.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/3.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              N.A.V Yuva Foundation delegations representing Haryana at NEYP 23’ , IIFM,Bhopal.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/4.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              Additional Director, N.A.V Yuva Foundation, Siddharth speaking at Babasaheb Bhimrao Ambedkar
              National Youth Parliament , CU , Mohali.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/5.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              Cultural event sponsored by N.A.V Yuva Foundation organised at Tagore Auditorium MDU , Rohtak.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={6}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/6.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
                Director, N.A.V Yuva Foundation, Sh.Sumit Kumar voluntarily donating blood in a blood donation drive organised by the foundation.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={7}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/7.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
                N.A.V Yuva Foundation Member, Ms.Kirti felicitated by Sh.Nitin Gadkari for representing Haryana in National Youth Parliament.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={8}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/8.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
                Plantation Drives
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={9}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/9.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
                Additional Director (Outreach & PR), N.A.V Yuva Foundation, Mr.Siddharth at District Youth Festival.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={10}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/11.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
                ANO, NCC, MD University, Rohtak graced NGO Day Celebrations.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={11}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/12.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
                Additional Director, N.A.V Yuva Foundation, Mr.Siddharth at Zonal Youth Festival 2023.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={12}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/13.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
                Director, N.A.V Yuva Foundation, Sh.Parveen Kumar at Zonal Youth Festival 2023.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={13}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/29.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
                Team N.A.V Yuva with DYO, Rohtak.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={14}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/14.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={15}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/15.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={16}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/16.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={17}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/17.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={18}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/18.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={19}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/19.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={20}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/20.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={21}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/21.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={22}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/22.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={23}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/23.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={24}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/24.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={25}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/25.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={26}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/26.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={27}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/27.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={28}
            className="relative float-left -mr-[100%] hidden max-w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/assets/gallery/28.png"
              className="block h-60 md:h-[700px] w-screen"
              alt="..."
            />
            <div className="absolute text-[10px] md:text-4xl font-semibold drop-shadow-2xl inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
              <p>
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>

          </div>
        </div>


      {/* Star Members */}

      <div id='starmembers' className='overflow-hidden min-h-full border-b-2 border-orange-400 shadow-md shadow-gray-300'>
        <h1 className='pt-12 font-bold text-4xl md:text-6xl text-center font-serif text-orange-600 uppercase'>Star Members</h1>
          {/* <div className='mt-20 mx-2 grid gap-2 grid-cols-2'> */}
          <div className='mt-10 mb-10 mx-2 grid gap-8 grid-cols md:mt-16 md:mx-40 md:gap-x-60 md:gap-y-16 md:grid-cols-2'>

          {/* Card 1 */}

          <Card className="mx-2 max-h-56 md:max-h-72 flex-row rounded-lg border border-orange-400 bg-white shadow-md hover:shadow-orange-500">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-md border-r-2 border-orange-400"
            >
              <img
                src="/assets/team/Ankita.jpg"
                alt="card-image"
                className="h-full w-full object-cover md:object-contain object-top"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="text-lg md:text-3xl md:my-6 mb-2 uppercase">
                Ankita Pandey
              </Typography>
              <Typography variant="h6" color="gray" className="text-sm md:text-xl mb-4 uppercase">
                Achievements
              </Typography>
              <Typography color="gray" className="text-sm mb-2 md:text-xl md:mr-10 md:mb-4 font-normal">
                Attended National Youth Parliament Festival (NYPF) 2023 ...
              </Typography>
              <a className="inline-block">
                <Button variant="text" className="flex items-center gap-2" onClick={() => setIsOpen6(true)}>
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>

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
                        ACHIEVEMENTS - ANKITA PANDEY
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-4 text-xl text-gray-500 text-justify hyphens-auto">
                          1. Attended National Youth Parliament Festival (NYPF) 2023 in August Central Hall of Parliament as the 2nd best speaker from Haryana.
                          (2nd position in declamation contest at State level in NYPF).<br/>
                          2. Represented Haryana in National Youth Festival (NYF) 2024 , Nashik (Maharashtra) as a Speaker.<br/>
                          3. 2 times winner at district level declamtion contest organised by Sports and Youth affairs Minstry (2021 and 2022).<br/>
                          4. Winner in self written Poem Recitation Competition organised by Vaish Mahila Mahavidyalya, Bahadurgarh at National Level on the theme of environment.<br/>
                          5. 2nd position in Elocution at InterZonal Youth Festival (2024).<br/>
                          6. 2nd position in extempore at district level organised by Sports and Youth Affairs Ministery.
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="mt-4 inline-flex justify-center rounded-md border-2 border-orange-600 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-offset-2"
                          onClick={() => setIsOpen6(false)}
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

          {/* Card 2 */}

          <Card className="mx-2 max-h-56 md:max-h-72 flex-row rounded-lg border border-orange-400 bg-white shadow-md hover:shadow-orange-500">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-md border-r-2 border-orange-400"
            >
              <img
                src="/assets/team/Kirti.jpg"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="text-lg md:text-3xl md:my-6 mb-2 uppercase">
                Kirti Singh
              </Typography>
              <Typography variant="h6" color="gray" className="text-sm md:text-xl mb-4 uppercase">
                Achievements
              </Typography>
              <Typography color="gray" className="text-sm mb-2 md:text-xl md:mr-10 md:mb-4 font-normal text-pretty">
                Participated in India's First National Digital Exchange ...
              </Typography>
              <a className="inline-block">
                <Button variant="text" className="flex items-center gap-2" onClick={() => setIsOpen8(true)}>
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>

          <Transition appear show={isOpen8} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen8(false)}>
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
                        ACHIEVEMENTS - KIRTI SINGH RAJPUT
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-4 text-xl text-gray-500  text-justify hyphens-auto">
                          1. Participated in India's First National Digital Exchange Programme Young 20, 2019 organised by the Italian Delegation.<br/><br/>
                          2. Attended National Youth Festival at Nashik (2024).<br/><br/>
                          3. Grabbed Best Research and Content Award at National Environment Youth Festival held at Nagpur (2024).
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="mt-4 inline-flex justify-center rounded-md border-2 border-orange-600 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-offset-2"
                          onClick={() => setIsOpen8(false)}
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

          {/* Card 3 */}

          <Card className="mx-2 max-h-56 md:max-h-72 flex-row rounded-lg border border-orange-400 bg-white shadow-md hover:shadow-orange-500">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-md border-r-2 border-orange-400"
            >
              <img
                src="/assets/team/Deepak.jpg"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="text-lg md:text-3xl md:my-6 mb-2 uppercase">
                Deepak
              </Typography>
              <Typography variant="h6" color="gray" className="text-sm md:text-xl mb-4 uppercase">
                Achievements
              </Typography>
              <Typography color="gray" className="text-sm mb-2 md:text-xl md:mr-10 font-normal text-pretty">
                Best Male Member of the Year Award 2023 from N.A.V YUVA Foundation.
              </Typography>
              <a href="#" className="inline-block">
                <Button variant="text" className="items-center gap-2 hidden">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>

          {/* Card 4 */}

          <Card className="mx-2 max-h-56 md:max-h-72 flex-row rounded border border-orange-400 bg-white shadow-md hover:shadow-orange-500">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-md border-r-2 border-orange-400"
            >
              <img
                src="/assets/team/Pooja.jpg"
                alt="card-image"
                className="h-full w-full object-cover md:object-top"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="text-lg md:text-3xl md:my-6 mb-2 uppercase">
                Pooja Miglani
              </Typography>
              <Typography variant="h6" color="gray" className="text-sm md:text-xl mb-4 uppercase">
                Achievements
              </Typography>
              <Typography color="gray" className="text-sm mb-2 md:text-xl md:mr-10 font-normal text-pretty">
                Best Female Member of the Year Award 2023 from N.A.V YUVA Foundation.
              </Typography>
              <a href="#" className="inline-block">
                <Button variant="text" className="items-center gap-2 hidden">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>

          </div>
      </div>


      {/* Headlines */}

      <div id='starmembers' className='overflow-hidden min-h-fit border-b-2 border-orange-400 shadow-md shadow-gray-300'>
        <h1 className='pt-12 font-bold text-4xl md:text-6xl text-center font-serif text-orange-600 uppercase'>Headlines</h1>
          <div className='mt-10 mb-10 mx-2'>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="grid gap-4">
                <div onClick={handleZoom}>
                  <img
                    className='h-auto max-w-full rounded-lg object-cover object-center border-2 md:border-4'
                    src="/assets/news/1.jpg"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center border-2 md:border-4"
                    src="/assets/news/2.jpg"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center border-2 md:border-4"
                    src="/assets/news/5.jpg"
                    alt="gallery-photo"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center border-2 md:border-4"
                    src="/assets/news/12.jpg"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center border-2 md:border-4"
                    src="/assets/news/6.jpg"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center border-2 md:border-4"
                    src="/assets/news/11.jpg"
                    alt="gallery-photo"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center border-2 md:border-4"
                    src="/assets/news/13.jpg"
                    alt="gallery-photo"
                  />
                </div>
                {/* <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center border-2 md:border-4"
                    src="/assets/news/9.jpg"
                    alt="gallery-photo"
                  />
                </div> */}
                <div>
                  <img
                    className="h-auto w-full rounded-lg object-contain object-center border-2"
                    src="/assets/news/7.jpg"
                    alt="gallery-photo"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center border-2 md:border-4"
                    src="/assets/news/3.jpg"
                    alt="gallery-photo"
                  />
                </div>
                {/* <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="/assets/news/4.jpg"
                    alt="gallery-photo"
                  />
                </div> */}
              </div>
            </div>
          </div>

      </div>

      {/* Contact US */}

      <div id='contact' className='overflow-hidden min-h-screen border-b-2 border-orange-400 shadow-md shadow-gray-300'>
        <h1 className='pt-12 font-bold text-4xl md:text-6xl text-center font-serif text-orange-600 uppercase'>Contact Us</h1>
            <div id='map' className='mt-10 justify-center border-2 border-orange-400 shadow-md shadow-gray-300'>
              <div className="mx-4 flex justify-center items-center">
                <Map />
              </div>
            </div>

            <div className='mt-16 mb-10 flex flex-col md:flex-row gap-12 md:gap-0 justify-center items-center text-center'>

              <div className='w-screen flex flex-col justify-center items-center'>
                <div className='p-10 w-fit rounded-full bg-orange-600'>
                  <svg className="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                  </svg>
                </div>
                <h1 className='mt-4 text-2xl text-gray-900 font-bold uppercase'>Phone Number</h1>
                <h4 className='text-lg text-gray-600 font-bold uppercase'>+91-87089-51442</h4>
                <h4 className='text-lg text-gray-600 font-bold uppercase'>+91-93063-16359</h4>
              </div>

              <div className='w-screen flex flex-col justify-center items-center'>
                <div className='p-10 w-fit rounded-full bg-orange-600'>
                  <svg className="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                  </svg>
                </div>
                <h1 className='mt-4 text-2xl text-gray-900 font-bold uppercase'>Email Address</h1>
                <h4 className='text-lg text-gray-600 font-bold'>navyuvafoundationnyf@gmail.com</h4>
              </div>
            </div>

      </div>

    <Footer/>

  </div>
  </>
  );
}

export default App
