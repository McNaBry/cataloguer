"use client"

import { Dialog, Transition } from "@headlessui/react"
import { useState, Fragment } from "react"
import { EntryTag, TagMetadata } from "../(common)/(types)/EntryModel"

interface TagButtonProps {
  content: string;
  openModal: () => void;
}

function TagButton({ content, openModal }: TagButtonProps) {
  return (
    <button 
      type="button"
      className="w-fit block bg-narvik text-black px-3 py-1 mr-2 mb-2
      whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer 
      rounded-full shadow-md" 
      onClick={openModal}
    >
      {content}
    </button>
  )
}

interface TagModalProps {
  isOpen: boolean;
  closeModal: () => void;
  tagKey: string;
  tagContent: string;
  toolTip: string;
}

function TagModal({ isOpen, closeModal, tagKey, tagContent, toolTip }: TagModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
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
                <Dialog.Panel className="w-full max-w-md transform bg-narvik p-6 text-left align-middle rounded-2xl shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black"
                  >
                    {tagKey}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="bg-sorrell-brown text-sm text-white px-2 py-1 mb-2 rounded-md">
                      {tagContent}
                    </p>
                    <p className="text-md text-gray-700">
                      {toolTip}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="bg-brown-rose px-4 py-2 text-sm font-medium text-white rounded-md"
                      onClick={closeModal}
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
  )
}

type EntryTagProps = TagMetadata & EntryTag

export default function EntryTag({ name, description, value }: EntryTagProps) {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <TagButton content={name + ": " + value} openModal={openModal} />
      <TagModal isOpen={isOpen} closeModal={closeModal} tagKey={name} tagContent={value} toolTip={description} />
    </>
  )
}