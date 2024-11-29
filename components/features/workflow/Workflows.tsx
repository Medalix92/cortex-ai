import { getWorkflows } from "@/actions/workflows/getWorkflows";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, InboxIcon } from "lucide-react";
import React from "react";
import CreateWorkflowDialog from "./CreateWorkflowDialog";

const Workflows = async () => {
  const workflows = await getWorkflows();
  if (!workflows) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="w-4 h-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong! Failed to load workflows
        </AlertDescription>
      </Alert>
    );
  }
  if (workflows.length === 0) {
    return (
      <div className="flex flex-col gap-4 h-full items-center justify-center">
        <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
          <InboxIcon size={32} className="stroke-primary" />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <p className="font-bold">No workflows found</p>
          <p className="text-sm text-muted-foreground">
            Create a new workflow to get started
          </p>
        </div>
        <CreateWorkflowDialog />
      </div>
    );
  }
  return (
    <div>
      <Alert variant="destructive">
        <AlertCircle className="w-5 h-5" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong! Failed to load workflows
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Workflows;
