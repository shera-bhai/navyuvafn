import { Fragment, useState } from 'react'
import { Menu, Dialog, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Services() {
  
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)

  return (
    <Menu as="div" className="relative inline-block text-left hover:text-orange-600">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-base font-semibold">
          Services
          <ChevronDownIcon className="-mr-1 mt-0.5 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => setIsOpen(true)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Career Counselling
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => setIsOpen2(true)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Women Empowerment
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => setIsOpen3(true)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Blood Donation
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => setIsOpen4(true)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Environment Protection
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => setIsOpen5(true)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Food Distribution
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
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
                    <Dialog.Panel className="w-[60%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-medium leading-6 text-gray-900"
                      >
                        Career Counselling
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-4 text-xl text-gray-500">
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
                    <Dialog.Panel className="w-[60%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-medium leading-6 text-gray-900"
                      >
                        Women Empowerment
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-4 text-xl text-gray-500">
                        There is a difference between having rights and have the knowledge how to use your rights in a right direction.
                        This specific wing of the NGO is lead by Miss Ankita Pandey as a project manager.
                        She, along with the team, is working tirelessly to empower the women by making them aware of their rights.
                        Not only this, she also organises various programs where she can addresses the queries of girls/ladies directly.
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
                    <Dialog.Panel className="w-[60%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-medium leading-6 text-gray-900"
                      >
                        Blood Donation
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-4 text-xl text-gray-500">
                        This very wing of the NGO is lead by the director of the NGO himself. This wing works in collaboration with government hospital.
                        We understand the importance of every drop of blood of a human being and that is why working collectively to keep the every breath alive.
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
                    <Dialog.Panel className="w-[60%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-medium leading-6 text-gray-900"
                      >
                        Environment Protection
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-4 text-xl text-gray-500">
                        "When we talk about the lives, we only include humans and animals, forgetting the very fundamental unit of our existence, the trees" says the project head of the wing, Miss Ritu.
                        As our country is progressing towards the list of developed nations, so is the need for a healthy environment increasing.
                        This wing works in collaboration with the Forest Department of the district where we try to bring a change in the Outlook of people towards nature.
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
                    <Dialog.Panel className="w-[60%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-medium leading-6 text-gray-900"
                      >
                        Food Distribution
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-4 text-xl text-gray-500">
                        Access to a healthy and nutritious meal is a basic human right. Sadly, millions of people around the world still struggle with hunger, Malnutrition and food insecurity.
                        This wing of our NGO distributes food aid to people in need such as the homeless,low income families and refugees.
                        We also provide emergency food assistance during natural disaster, conflicts or other cries.
                        We not only feed human beings but also the animals around us such as dogs, cow etc. 
                        This wing works in the collaboration with local people.
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
    </Menu>
  )
}