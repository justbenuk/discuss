'use client'
import { useFormState } from "react-dom"
import { Popover, PopoverTrigger, PopoverContent, Input, Button, Textarea } from "@nextui-org/react"
import * as actions from '@/actions'
import FormButton from "../ui/form-button"

export default function CreatePostForm() {
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary'>Create A Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form>
          <div className="flex flex-col p-4 gap-4 w-80">
            <h3 className="text-lg">Create A Post</h3>
            <Input placeholder="Title" label='Title' name='title' labelPlacement='outside'/>
            <Textarea placeholder="Content" label='Content' name='content' labelPlacement='outside'/>
            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}
