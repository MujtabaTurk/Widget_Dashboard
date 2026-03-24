import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../libs/utils";
import { LuCross } from "react-icons/lu";

const Component = ({ isOpen, onClose, title, className, children }) => {
  const onOpenChange = (isOpen) => {
    if (isOpen) return;
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] bg-neutral-800 max-w-2xl max-h-[80vh] gap-4 border shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl  border-neutral-700 overflow-hidden",
            className,
          )}
        >
          {title && (
            <div
              className={
                "bg-neutral-800 rounded-t-2xl p-5 font-pressStart2P text-sm! text-white w-full flex items-center justify-between gap-5 border-b border-neutral-700 shadow-2xl"
              }
            >
              <Dialog.Title>{title}</Dialog.Title>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full cursor-pointer bg-neutral-700 hover:bg-neutral-700 flex items-center justify-center transition-colors border border-neutral-700"
              >
                <LuCross className="w-5 h-5 text-neutral-300" />
              </button>
            </div>
          )}

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const Modal = React.memo(Component);
