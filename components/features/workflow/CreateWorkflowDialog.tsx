"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { workflowSchema } from "@/schema/workflow";
import { Layers2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";

const CreateWorkflowDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof workflowSchema>>({
    resolver: zodResolver(workflowSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Create Workflow</Button>
      </DialogTrigger>
      <DialogContent className="px-0">
        <DialogHeader className="py-4">
          <DialogTitle asChild>
            <div className="flex flex-col items-center gap-2 mb-2">
              <Layers2Icon size={30} className="stroke-primary" />
              <p className="text-xl text-primary">Create Workflow</p>
              <p className="text-sm text-muted-foreground">
                Start building your workflow
              </p>
            </div>
          </DialogTitle>
          <Separator />
        </DialogHeader>
        <div className="p-6">
          <Form {...form}>
            <form className="space-y-6 w-full">
              <FormField control={form.control} name="name" />
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkflowDialog;
