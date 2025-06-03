import { format } from "date-fns"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import editIcon from "@/assets/edit.svg"
import Image from "../common/Image";
import { useForm } from "react-hook-form";
import { date, nonEmpty, object, pipe, string, type InferOutput } from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Dot, Image as ImageIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { getPriorityColor } from "@/constants/priority-class";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const EditTaskFormSchema = object({
  title: pipe(
    string(),
    nonEmpty('Title is required')
  ),
  date: date("Date is required"),
  priority: pipe(
    string(),
    nonEmpty('Priority is required')
  ),
  description: pipe(
    string(),
    nonEmpty('Description is required')
  ),
  image: pipe(
    string(),
    nonEmpty('Image is required')
  )
});

const prioriryOptions = [
  {
    id: "extreme",
    label: "Extreme"
  },
  {
    id: "moderate",
    label: "Moderate"
  },
  {
    id: "low",
    label: "Low"
  }
]

const EditTaskModal = () => {
  const [filename, setFileName] = useState<string | null>(null);

  const form = useForm<InferOutput<typeof EditTaskFormSchema>>({
    resolver: valibotResolver(EditTaskFormSchema),
    defaultValues: {
      title: '',
      date: new Date(),
      priority: "extreme",
      description: '',
      image: ''
    }

  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-9 w-9 p-0"><Image src={editIcon} alt="Edit" className="w-auto h-auto cursor-pointer h-full w-full" /></Button>
      </DialogTrigger>
      <DialogContent className="w-230 h-177" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="hidden">Edit Task</DialogTitle>
          <DialogDescription className="hidden">Edit Task</DialogDescription>
          <div className="flex justify-between">
            <h4 className="text-xl font-bold"><span className="underline underline-offset-4 decoration-2 decoration-orange-700">Edit </span>Task</h4>
            <DialogClose asChild>
              <p className="cursor-pointer text-base underline">
                Go back
              </p>
            </DialogClose>
          </div>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => console.log(data))}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" {...field} />
                  </div>
                  <div className="min-h-5">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-[240px] justify-between text-left font-normal ${!field.value && "text-muted-foreground"}`}
                      >
                        <span>{field.value && format(field.value, "PPP")}</span>
                        <CalendarIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem className="mt-7">
                  <Label htmlFor="priority">Priority</Label>
                  <div className="flex gap-2">
                    {prioriryOptions.map((item) => (
                      <div className="flex items-center mr-7" key={item.id}>
                        <Dot className={`h-12 w-12 ${getPriorityColor(item.label)}`} />
                        <Label key={item.id} className="flex items-center gap-3">
                          <span className="text-sm font-normal">{item.label}</span>
                          <Input
                            type="radio"
                            value={item.id}
                            checked={field.value === item.id}
                            onChange={() => field.onChange(item.id)}
                            name={field.name}
                            className="shadow-none"
                          />
                        </Label>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Label htmlFor="description" className="mt-5">Description</Label>
            <div className="flex mt-3">
              <div className="w-3/5">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid flex-1 gap-3 mr-7">
                        <Textarea id="description" className="h-50" placeholder="Start writing here..." {...field} />
                      </div>
                      <div className="min-h-5">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-2/5 border-2 flex flex-col items-center justify-center mb-7">
                <ImageIcon className="w-12 h-12 opacity-30" />
                <p className="mt-3 text-xs opacity-30">Drag&Drop file here or</p>
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col items-center justify-center">
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              field.onChange(file);
                              setFileName(file.name);
                            } else {
                              field.onChange(undefined);
                              setFileName(null);
                            }
                          }}
                          className="hidden"
                        />

                        <label
                          htmlFor="image"
                          className="cursor-pointer px-3 py-2 opacity-30 rounded text-sm w-max border-2 my-3"
                        >
                          Browser
                        </label>

                        <p className="text-sm text-gray-600">
                          {filename ?? ""}
                        </p>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit" className="bg-destructive text-white">Done</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditTaskModal
