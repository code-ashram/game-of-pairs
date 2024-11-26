import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'
import { FC, FormEvent } from 'react'

type Props = {
  isOpen: boolean
  steps: number
  onReset: () => void
}

const Message: FC<Props> = ({ isOpen, steps, onReset }) => {
  const { onOpenChange } = useDisclosure()

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <form onSubmit={(e: FormEvent) => {
              e.preventDefault()
              onReset()
            }}>
              <ModalHeader className="flex flex-col gap-1">Congratulations!</ModalHeader>

              <ModalBody>
                <p>
                  You're winner! Your steps: {steps}
                </p>
              </ModalBody>

              <ModalFooter>
                <Button color="primary" type="submit">
                  New Game
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Message
