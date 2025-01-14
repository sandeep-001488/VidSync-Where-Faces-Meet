"use client";

import Loader from "@/components/ui/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

const Meeting = () => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const params = useParams();
  const id = params?.id as string | undefined; 

  const { call, isCallLoading } = useGetCallById(id || "");

  if (!id || !call || isCallLoading) {
    return <Loader />;
  }


  return (
    <ErrorBoundary>
      <main className="text-white h-screen w-full">
        <StreamCall call={call}>
          <StreamTheme>
            {!isSetupComplete ? (
              <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
            ) : (
              <MeetingRoom />
            )}
          </StreamTheme>
        </StreamCall>
      </main>
    </ErrorBoundary>
  );
};

export default Meeting;
