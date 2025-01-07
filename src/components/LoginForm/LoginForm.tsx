import { ChangeEvent, FC, FormEvent, useState } from 'react'
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
  onSubmit: (userName: string) => void
}

const LoginForm: FC<Props> = ({ isOpen, onSubmit }) => {
  const [value, setValue] = useState('')
  const { onOpenChange } = useDisclosure()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

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
              console.log(value)
              onSubmit(value)
            }}>
              <ModalHeader className="flex flex-col gap-1">What's your name?</ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  className="max-w-xs"
                  onChange={handleChange}
                  defaultValue={''}
                  label="Enter your name here!"
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
