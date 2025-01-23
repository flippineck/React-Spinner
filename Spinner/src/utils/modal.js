import React from 'react';
import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';


function Modal({ title, handleDismiss, children }) {
  const closeBtnRef = React.useRef();

  React.useEffect(() => {
    const currentlyFocusedElem = document.activeElement;

    closeBtnRef.current.focus();

    return () => {
      currentlyFocusedElem?.focus();
    };
  }, []);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        handleDismiss();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <FocusLock>
      <RemoveScroll>
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-gray-600 bg-opacity-50"
            onClick={handleDismiss}
          />
          <div
            className="relative p-1 bg-transparent"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              ref={closeBtnRef}
              className="absolute top-0 right-0 p-4 cursor-pointer bg-transparent border-none -translate-y-full"
              onClick={handleDismiss}
            >
              <Close />

            </button>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;