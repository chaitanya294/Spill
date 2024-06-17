import React from 'react'
import { Fragment } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
const Icon = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
  return (<>
        <Menu as="div" className="relative ml-[150px] w-[100px] mt-[20px]">
            <div>
            <MenuButton className="absolute right-0 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                className="h-10 w-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPfTZvQAyDv9uN3-3_ux9XMTJRYC-iwlUQDFfYs1_SDz9azF-dgNi8kDxUg_mTH9x8dg&usqp=CAU"
                alt=""
                />
            </MenuButton>
            </div>
            <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
            <MenuItems className="absolute right-0 z-10 mt-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                {({ focus }) => (
                    <a
                    href="/edit"
                    className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                    Your Profile
                    </a>
                )}
                </MenuItem>
                <MenuItem>
                {({ focus }) => (
                    <a
                    href="/create"
                    className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                    Write Blog
                    </a>
                )}
                </MenuItem>
                <MenuItem>
                {({ focus }) => (
                    <a
                    href="/"
                    className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                    Sign out
                    </a>
                )}
                </MenuItem>
            </MenuItems>
            </Transition>
        </Menu>
    </>
  )
}

export default Icon
