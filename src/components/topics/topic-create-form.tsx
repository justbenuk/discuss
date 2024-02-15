'use client'
import { useFormState } from "react-dom"
import { Textarea, Input, Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react"
import { CreateTopic } from "@/actions"
import FormButton from "../ui/form-button"
export default function TopicCreateForm() {
  const [formState, action] = useFormState(CreateTopic, {errors:  {}})
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button className="w-full rounded-none" color='primary'>Create A Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 w-80 p-4">
            <h3 className="ctext-lg">Create A Topic</h3>
            <Input label='Name' name='name' labelPlacement='outside' placeholder="Name"  isInvalid={!!formState.errors.name} errorMessage={formState.errors.name?.join(', ')}/>
            <Textarea label='Description' name='description' labelPlacement='outside' placeholder='Describe Your Topic' isInvalid={!!formState.errors.description} errorMessage={formState.errors.description?.join(', ')}/>
            {formState.errors._form ? <div className="p-2 bg-red-200 border border-red-400 rounded">{formState.errors._form?.join(', ')}</div> : null}
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}
