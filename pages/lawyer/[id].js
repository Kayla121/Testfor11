
import { useEffect } from 'react';

export default function LawyerProfile() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.talkjs.com/talk.js";
    script.async = true;
    script.onload = () => {
      Talk.ready.then(function () {
        var me = new Talk.User({
          id: "123456",
          name: "Client",
          email: "client@example.com",
          photoUrl: "https://talkjs.com/images/avatar-1.jpg",
          role: "user"
        });

        var other = new Talk.User({
          id: "654321",
          name: "Lawyer Jane",
          email: "jane@example.com",
          photoUrl: "https://talkjs.com/images/avatar-5.jpg",
          role: "lawyer"
        });

        window.talkSession = new Talk.Session({
          appId: "YOUR_TALKJS_APP_ID",
          me: me
        });

        var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other));
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        var inbox = talkSession.createInbox({ selected: conversation });
        inbox.mount(document.getElementById("talkjs-container"));
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Lawyer Jane</h1>
      <p className="mb-6">Expert in family law with 10+ years of experience.</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded mb-6">Request Paid Consultation</button>
      <div id="talkjs-container" className="w-full h-[500px] border border-gray-600" />
    </div>
  );
}
