import React from 'react'
import Modal, { Props as ReactModalProps } from 'react-modal'

export interface PopupProps extends ReactModalProps {
  heading: React.ReactNode
  children: React.ReactNode
  isSidebar?: boolean
}

// TODO Fix transitions
// TODO Pass buttons handlers
// TODO Add auto shadowing
// TODO Check offsets and stuff on different resolutions

const Popup = ({ heading, children, isSidebar = false, closeTimeoutMS = 150, id = 'popup', ...props }: PopupProps) => {
  return (
    <Modal
      bodyOpenClassName={null}
      overlayClassName={{
        base: `popup-overlay${isSidebar ? ' popup-overlay--sidebar' : ''}`,
        beforeClose: 'popup-overlay--before-close',
        afterOpen: 'popup-overlay--after-open',
      }}
      className={{
        base: `popup-content${isSidebar ? ' popup-content--sidebar' : ''}`,
        beforeClose: 'popup-content--before-close',
        afterOpen: 'popup-content--after-open',
      }}
      aria={{ labelledby: id }}
      closeTimeoutMS={closeTimeoutMS}
      {...props}
    >
      <div
        className={`relative ${
          isSidebar ? 'pl-12 pr-6 pt-8 md:pl-20 md:pr-14 md:pt-14 md:rounded-r-sidebar' : 'max-w-popup p-8 md:p-12'
        }`}
      >
        <div id={id} className={`text-popup font-bold ${isSidebar ? 'mb-6 md:mb-12' : 'mb-3'}`}>
          {heading}
        </div>
        {children}
      </div>
    </Modal>
  )
}

Modal.setAppElement('#root')

export default Popup