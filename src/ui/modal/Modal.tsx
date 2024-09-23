interface ModalProps {
  isModalOpen: boolean
  onClose: () => void
}

export const Modal = ({ isModalOpen, onClose }: ModalProps) => {
  if (!isModalOpen) return null

  return (
    <div className='absolute z-20 top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-hex-950 bg-opacity-45 backdrop-blur-sm'>
      <div>modal</div>

      <button onClick={onClose}>X</button>
    </div>
  )
}
