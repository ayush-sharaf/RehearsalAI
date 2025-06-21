import React from "react";
import {
  Clock,
  Zap,
  Users,
  Shield,
  BarChart3,
  MessageSquare,
  Video,
  BookOpen,
} from "lucide-react";

function Upgrade() {
  const comingSoonFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Feedback",
      description:
        "Get instant, detailed feedback on your interview performance with advanced AI analysis",
      status: "Coming Soon",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Recording",
      description:
        "Record and review your interview sessions with professional video analysis",
      status: "In Development",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Peer Practice Sessions",
      description:
        "Practice with other users in real-time collaborative interview sessions",
      status: "Coming Soon",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description:
        "Track your progress with detailed analytics and improvement suggestions",
      status: "In Development",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Coaching",
      description:
        "Get real-time coaching from industry experts during your practice sessions",
      status: "Coming Soon",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Industry-Specific Questions",
      description:
        "Access curated question banks for specific industries and roles",
      status: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="p-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Clock className="w-4 h-4" />
            Coming Soon
          </div>
          <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Exciting New Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're working hard to bring you the most advanced interview
            preparation platform. Here's what's coming next to help you ace your
            interviews.
          </p>
        </div>

        {/* Current Plans Reminder */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Current Plans Available
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Start practicing today with our current features while we build the
            future
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Free Plan</h3>
              <p className="text-blue-100 mb-4">Perfect to get started</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>3 Free Mock Interviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Unlimited Retakes</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Monthly Plan</h3>
              <p className="text-purple-100 mb-4">$7.99/month</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>All Free Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Practice Questions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Email Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coming Soon Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What's Coming Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    {feature.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Be the First to Know</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get notified when these exciting features launch and be among the
            first to try them out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Early Access
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
