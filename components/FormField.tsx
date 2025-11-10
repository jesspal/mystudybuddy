import React from 'react'
import { FormDescription } from './ui/form'

const FormField = () => (
    <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
            <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input placehold="shadcn" {... field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
            </FormItem>
              )}>

    </FormField>
)

export default FormField
