import Workflows from "@/components/features/workflow/Workflows";
import WorkflowsSkeleton from "@/components/features/workflow/WorkflowsSkeleton";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-muted-foreground">Manage your workflows</p>
        </div>
      </div>
      <div className="h-full py-6">
        <Suspense fallback={<WorkflowsSkeleton />}>
          <>
            {/* <WorkflowsSkeleton /> */}
            <Workflows />
          </>
        </Suspense>
      </div>
    </div>
  );
};

export default page;
