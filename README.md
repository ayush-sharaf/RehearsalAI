# RehearsalAI

RehearsalAI is a robust web application designed to simulate role-based conversations for practice and preparation. Built with Next.js, Clerk for authentication, GeminiAI for conversational AI, and NeonDB with Drizzle ORM for data management, RehearsalAI is designed for flexibility and scalability.

## Live Demo

Try RehearsalAI here: [https://rehearsal-ai.vercel.app/](https://rehearsal-ai.vercel.app/)

---

## Features

- **Role-Based Dialogue**: Simulate conversations with two distinct roles.
- **Dynamic AI Integration**: Powered by GeminiAI for advanced conversational capabilities.
- **Authentication**: Clerk ensures secure and seamless user authentication.
- **Database Management**: NeonDB with Drizzle ORM enables efficient, scalable, and flexible data handling.
- **Environment Customization**: Configure conversation inputs, arguments, and outcomes to tailor practice sessions.

---

## Technologies Used

- **Next.js**: Server-rendered React framework for building applications.
- **React**: Component-based JavaScript library for UI development.
- **Tailwind CSS**: Utility-first CSS framework for rapid design and styling.
- **Clerk**: Simplified and secure user authentication solution.
- **GeminiAI**: AI for generating and managing conversation flows.
- **NeonDB + Drizzle ORM**: Scalable database with ORM for clean, efficient queries.

---

## Environment Variables

The following environment variables are required for this application. Ensure these values are set in a `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_clerk_sign_in_url
NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_clerk_sign_up_url
NEXT_PUBLIC_DATABASE_URL=your_database_url
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_INFORMATION=custom_information_variable
NEXT_PUBLIC_QUESTION_NOTE=custom_question_note
```

---

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Clerk account for authentication setup
- NeonDB for database services
- GeminiAI API key

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ayush-sharaf/RehearsalAI.git
   cd RehearsalAI
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Add your environment variable values in a `.env.local` file in the root directory.

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app locally.

---

## Deployment

This application is deployed using Vercel.

1. **Fork the Repository**:
   Create a fork of the repository on GitHub.
2. **Connect to Vercel**:
   Link the repository to your Vercel account.
3. **Configure Environment Variables**:
   Add the required variables in the Vercel dashboard.
4. **Deploy**:
   Trigger a deployment from the Vercel dashboard or GitHub.

---

## Contributing

Contributions to RehearsalAI are welcome! Please follow these steps:

1. Fork the project.
2. Create a feature branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request for review.

---


## Acknowledgements

- OpenAI and GeminiAI for conversational APIs.
- Clerk for authentication services.
- NeonDB and Drizzle ORM for database solutions.
- Vercel for deployment and hosting.
