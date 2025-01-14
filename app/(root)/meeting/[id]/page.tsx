"use client";

import Loader from "@/components/ui/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

type Params = Promise<{ id: string }>;


const Meeting = async({ params }: { params:Params }) => {
  // const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { id } = await params;
  const { call, isCallLoading } = useGetCallById(id);

  if (!call || isCallLoading) return <Loader />;

  return (
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
  );
};

export default Meeting;
