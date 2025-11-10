"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { console } from "inspector"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const AuthForm = () => {
  // Define Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    }
  })

  // Define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form
    // This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div>

      
    </div>
  )
}

export default AuthForm
