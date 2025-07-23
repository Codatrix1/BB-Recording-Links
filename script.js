//----------------------------------------------
// Test error function for log capturing demo
//---------------------------------------------
document.querySelector(".btn").addEventListener("click", function () {
  throw new Error("Random error #" + Math.trunc(Math.random() * 10) + 1);
});

//----------------------------------------------
// Customization Options for Recording Link UI
//----------------------------------------------
window.__BetterbugsRecordingLinkConfig = {
  styles: {
    theme: "light",
    primaryColor: "#38d9a9",
    primaryTextColor: "#fff",
  },
  startRecordingBtnText: "Start recording",
  mainHeaderText: "Ready to record?",
  subHeaderText: "Record your screen",
  emailFieldLabel: "Custom email label",
  emailFieldPlaceholder: "jessie@example.com",
  successMessageHeaderText: "Thanks for your feedback 🙏🏻",
  successMessageSubHeaderText: "We'll get back to you at the earliest.",
};
