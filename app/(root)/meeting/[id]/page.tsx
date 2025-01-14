// "use client";

// import Loader from "@/components/ui/Loader";
// import MeetingRoom from "@/components/ui/MeetingRoom";
// import MeetingSetup from "@/components/ui/MeetingSetup";
// import { useGetCallById } from "@/hooks/useGetCallById";
// import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
// import React, { useState } from "react";

// const Meeting = ({ params }: { params: Promise<{ id: string }> }) => {
//   // const { user, isLoaded } = useUser();
//   const [isSetupComplete, setIsSetupComplete] = useState(false);

//   const { id } = React.use(params);
//   const { call, isCallLoading } = useGetCallById(id);

//   if (!call || isCallLoading) return <Loader />;

//   return (
//     <main className="text-white h-screen w-full">
//       <StreamCall call={call}>
//         <StreamTheme>
//           {!isSetupComplete ? (
//             <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
//           ) : (
//             <MeetingRoom />
//           )}
//         </StreamTheme>
//       </StreamCall>
//     </main>
//   );
// };

// export default Meeting;
"use client";

import Loader from "@/components/ui/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

interface MeetingProps {
  params: {
    id: string;
  };
}

const Meeting = ({ params }: MeetingProps) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(params.id);

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
