'use client'
import { useFormState } from "react-dom"
import { Popover, PopoverTrigger, PopoverContent, Input, Button, Textarea } from "@nextui-org/react"
import * as actions from '@/actions'
import FormButton from "../ui/form-button"

type TopicSlugProp = {
  slug: string
}
export default function CreatePostForm({ slug }: TopicSlugProp) {
  const [formState, action] = useFormState(actions.CreatePost.bind(null, slug), { errors: {} })
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary'>Create A Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col p-4 gap-4 w-80">
            <h3 className="text-lg">Create A Post</h3>
            <Input isInvalid={!!formState.errors.title} errorMessage={formState.errors.title?.join(', ')} placeholder="Title" label='Title' name='title' labelPlacement='outside' />
            <Textarea isInvalid={!!formState.errors.content} errorMessage={formState.errors.content?.join(', ')} placeholder="Content" label='Content' name='content' labelPlacement='outside' />
            {formState.errors._form ? <div className="p-2 bg-red-200 border border-red-400 rounded">{formState.errors._form?.join(', ')}</div> : null}
            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}
