import { FC, FormEvent } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input
} from '@nextui-org/react'

type Props = {
  isOpen: boolean
  userName: string
  onSubmit: () => void
}

const LoginForm: FC<Props> = ({ isOpen, userName, onSubmit }) => {
  const { onOpenChange } = useDisclosure()

  return (
    <>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <form onSubmit={(e: FormEvent) => {
              e.preventDefault()
              onSubmit()
            }}>
              <ModalHeader className="flex flex-col gap-1">Enter your name!</ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  className="max-w-xs"
                  defaultValue={userName}
                  label="User Name"
                  type="text"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit">
                  Go!
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginForm
