import Modal from 'react-modal';
import Image from 'next/image';

const Modals = ({isDialogboxOpen,  onRequestClose , children, showCloseBtn}) =>{
    return(
        <Modal isOpen= {isDialogboxOpen} onRequestClose= {onRequestClose} 
            className="bg-blend-overlay flex justify-center items-center p-6 rounded-md gap-3
                text-white absolute mx-[460px] top-24 flex-col bg-black bg-opacity-50">
            <Image src='/right-icon.png' width={50} height={50} alt="right-icon" />
            {children}
            {showCloseBtn? <button onClick={onRequestClose} 
                className='bg-red-600 text-white rounded-md py-1 px-3'> Close </button> : null}
        </Modal>
    )
}

export default Modals;