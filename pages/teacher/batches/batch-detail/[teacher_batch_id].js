import React, { useEffect } from "react";
import { useRouter } from "next/router";
import BatchDetails from "@/components/batches/BatchDetails";

const TeacherBatchDetail = () => {
  const router = useRouter();
  const batchId = router.query.teacher_batch_id;

  return (
    <>
      <BatchDetails batchId={batchId} type="teacher" />
    </>
  );
};

export default TeacherBatchDetail;
