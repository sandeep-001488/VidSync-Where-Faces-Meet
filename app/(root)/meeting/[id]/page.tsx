"use client";

import Loader from "@/components/ui/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState, useEffect } from "react";

interface Params {
  id: string;
}

const Meeting = ({ params }: { params: Params }) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [callId, setCallId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchParams() {
      const { id } = await params; // Assuming params is a Promise, adjust if necessary
      setCallId(id);
    }
    fetchParams();
  }, [params]);

  const { call, isCallLoading } = useGetCallById(callId ?? "");

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
